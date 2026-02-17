// Can't use the video's one-liner "export { auth as middleware } from '@/auth'"
// because middleware runs in Edge; @/auth uses Prisma (Node-only) and would break.
import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import { authConfig } from "./auth.config";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  return NextResponse.next();
});