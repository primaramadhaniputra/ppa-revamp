import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  console.log("bananana");
  if (!req.cookies.token) {
    return NextResponse.redirect("http://localhost:3000");
    // return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}`);
  }

  return NextResponse.next();
}
