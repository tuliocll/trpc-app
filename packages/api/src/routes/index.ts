import { createRouter } from "../util/trpc"
import posts from "./posts";

const appRouter = createRouter().merge("post.", posts)

export type AppRouter = typeof appRouter;

export default appRouter
