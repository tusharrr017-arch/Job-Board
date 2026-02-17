import NextAuth from "next-auth";
import type { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./lib/prisma";
import { authConfig } from "./auth.config";

/** Map Auth.js emailVerified (camelCase) to Prisma emailverified (lowercase) */
function toPrismaUser(data: Record<string, unknown>) {
  const { emailVerified, ...rest } = data;
  return {
    ...rest,
    ...(emailVerified !== undefined && { emailverified: emailVerified }),
  };
}

const baseAdapter = PrismaAdapter(prisma as Parameters<typeof PrismaAdapter>[0]);
const adapter: Adapter = {
  ...baseAdapter,
  createUser: (data) => baseAdapter.createUser!(toPrismaUser(data as unknown as Record<string, unknown>) as never),
  updateUser: (data) => baseAdapter.updateUser!(toPrismaUser(data as unknown as Record<string, unknown>) as never),
};

export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter,
});