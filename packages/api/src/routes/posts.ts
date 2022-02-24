import { createRouter } from "../util/trpc";
import { z } from "zod";
import crypto from "crypto";

import db from "../database/db";

const posts = createRouter()
  .mutation("create", {
    input: z.object({
      title: z.string(),
      description: z.string(),
    }),
    resolve: ({ input }) => {
      const post = {
        id: crypto.randomUUID(),
        ...input,
      };

      db.posts.push(post);
      return post;
    },
  })
  .query("list", {
    resolve: () => db.posts,
  });

export default posts;
