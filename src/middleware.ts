import { defineMiddleware } from "astro:middleware";
import { authMiddleware } from "./middleware/authMiddleware";

export const onRequest = defineMiddleware(authMiddleware);
