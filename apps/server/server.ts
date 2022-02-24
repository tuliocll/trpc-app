import express from "express";
import cors from "cors";
import * as trpcExpress from "@trpc/server/adapters/express";

import tRPCRoutes from "@tcll/api/src/routes/index";
import { createContext } from "@tcll/api/src/util/trpc";

const PORT = process.env.PORT || 4000;

async function server() {
  const app = express();

  app.use(cors());

  app.use((req, _res, next) => {
    console.log("⏩", req.method, req.path);

    next();
  });

  app.get("/", (_req, res) => res.send("hello"));

  app.use(
    "/trpc",
    trpcExpress.createExpressMiddleware({
      router: tRPCRoutes,
      createContext,
    })
  );

  app.listen(PORT, () => {
    console.log(`🥳 Listen on ${PORT}...`);
  });
}

server();
