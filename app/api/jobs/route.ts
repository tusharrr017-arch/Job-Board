import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const session = await auth();
    if (!session?.user?.id) {
        return NextResponse.redirect(new URL("/auth/signin", request.url));
    }
    try {
        const data = await request.json();
        const title = data?.title ?? "";
        const company = data?.company ?? "";

        // Prevent duplicate job post from double-clicks: same user + same title+company in last 15s
        const since = new Date(Date.now() - 15_000);
        const duplicate = await prisma.job.findFirst({
            where: {
                postedById: session.user.id,
                title: String(title).trim(),
                company: String(company).trim(),
                postedAt: { gte: since },
            },
        });
        if (duplicate) {
            return NextResponse.json(duplicate, { status: 200 });
        }

        const job = await prisma.job.create({
            data: {
                ...data,
                postedById: session.user.id,
            },
        });
        return NextResponse.json(job);
    } catch (err) {
        console.error("Error creating the job:", err);
        return new NextResponse("Internal Server error", { status: 500 });
    }
}

export async function GET() {
  try {
        const jobs = await prisma.job.findMany({
            orderBy:{
                postedAt:"desc"
            }
        });
    return NextResponse.json(jobs);
  } catch (err) {
    console.error("Error fetching jobs:", err);
    return new NextResponse("Internal Server error", { status: 500 });
  }
}