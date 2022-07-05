import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  if (!req.cookies.token) {
    return NextResponse.redirect("http://localhost:3000");
  }

  return NextResponse.next();
}
