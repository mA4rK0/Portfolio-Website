import { getAuth } from "firebase-admin/auth";
import { app } from "../firebase/server";
import type { MiddlewareHandler } from "astro";

export const authMiddleware: MiddlewareHandler = async ({ cookies, url, redirect }, next) => {
  const auth = getAuth(app);

  // List of public routes that don't require authentication
  const publicRoutes = ["/signin", "/register", "/api/auth/signin", "/api/auth/register"];

  const sessionCookie = cookies.get("__session")?.value;

  if (publicRoutes.includes(url.pathname)) {
    // If the user already has a valid session cookie, redirect to /home
    if (sessionCookie) {
      try {
        await auth.verifySessionCookie(sessionCookie);
        return redirect("/home");
      } catch (error) {
        // If verification fails, proceed to the public route (e.g., /signin)
        cookies.delete("__session", { path: "/" });
        return redirect("/signin");
      }
    }
  }

  // If the requested route is not public, check for authentication
  if (!publicRoutes.includes(url.pathname)) {
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
