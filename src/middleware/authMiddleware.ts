import { getAuth } from "firebase-admin/auth";
import { app } from "../firebase/server";
import type { MiddlewareHandler } from "astro";

export const authMiddleware: MiddlewareHandler = async ({ cookies, url, redirect }, next) => {
  const auth = getAuth(app);

  // List of public routes that don't require authentication
  const publicRoutes = ["/signin", "/register", "/api/auth/signin", "/api/auth/register"];

  // If the requested route is not public, check for authentication
  if (!publicRoutes.includes(url.pathname)) {
    const sessionCookie = cookies.get("__session")?.value;

    if (!sessionCookie) {
      return redirect("/signin");
    }

    try {
      await auth.verifySessionCookie(sessionCookie);
    } catch (error) {
      cookies.delete("__session", { path: "/" });
      return redirect("/signin");
    }
  }

  return next();
};
