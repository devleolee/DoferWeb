import { NextResponse } from "next/server";
import { authRoutes, protectedRoutes } from "./src/router/routes";

export function middleware(request) {
    const session = request.cookies.get("session")?.value;

    if (
        protectedRoutes.includes(request.nextUrl.pathname) &&
        (!session || Date.now() > JSON.parse(session).expiredAt)
    ) {
        request.cookies.delete("session");
        const response = NextResponse.redirect(new URL("/login", request.url));
        response.cookies.delete("session");

        return response;
    }

    if (authRoutes.includes(request.nextUrl.pathname) && session) {
        return NextResponse.redirect(new URL("/account", request.url));
    }
}