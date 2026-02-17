import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ jobId: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json(
      { error: "Please sign in to apply" },
      { status: 401 }
    );
  }
  try {
    const { jobId } = await params;
    const job = await prisma.job.findUnique({ where: { id: jobId } });
    if (!job) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }
    const existingApplication = await prisma.application.findFirst({
      where: { jobId, userId: session.user.id },
    });
    if (existingApplication) {
      return NextResponse.json(
        { error: "You have already applied for this job" },
        { status: 400 }
      );
    }
    const application = await prisma.application.create({
      data: {
        jobId,
        userId: session.user.id,
        Status: "PENDING",
      },
    });
    return NextResponse.json(application);
  } catch (err) {
    console.error("Error creating application:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
