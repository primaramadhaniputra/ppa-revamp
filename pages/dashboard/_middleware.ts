import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
	console.log("req.cookies", req.cookies);
	// if (!req.cookies.token) {
	// return NextResponse.redirect(req.nextUrl.origin);
	// return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}`);
	// }

	return NextResponse.next();
}
