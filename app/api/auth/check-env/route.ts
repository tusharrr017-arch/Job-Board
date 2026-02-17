import { NextResponse } from "next/server";

/**
 * Temporary: hit /api/auth/check-env on Vercel to see if auth env vars are present.
 * Delete this file after fixing the Configuration error.
 */
export async function GET() {
  const vars = ["AUTH_SECRET", "AUTH_URL", "AUTH_GITHUB_ID", "AUTH_GITHUB_SECRET", "DATABASE_URL"];
  const missing = vars.filter((name) => !process.env[name]?.trim());
  return NextResponse.json({
    ok: missing.length === 0,
    missing,
    present: vars.filter((name) => process.env[name]?.trim()).length,
  });
}
