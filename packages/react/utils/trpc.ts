import { createReactQueryHooks } from "@trpc/react";
import type { AppRouter } from "@tcll/api/src/routes";

export const trpc = createReactQueryHooks<AppRouter>();
