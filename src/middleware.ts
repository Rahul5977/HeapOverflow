import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import getOrCreateDB from "@/models/server/dbSetup";
import getOrCreateStorage from "@/models/server/storageConfig";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  try {
    await Promise.all([getOrCreateDB(), getOrCreateStorage()]);
    console.log("Setup complete");
  } catch (error) {
    console.error("Setup failed:", error);
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  /* Match all request except except for the one which starts with:
  - -api
  --_next/static
  --_next/images
  --favicon.ico
  --home (to avoid redirect loop)
  */
  matcher: ["/((?!api|_next/static|_next/images|favicon.ico|home).*)", "/"],
};
