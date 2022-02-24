import crypto from "crypto";
type Database = {
  posts: { id?: string; title?: string; description?: string }[];
};

const db: Database = {
  posts: [
    {
      id: crypto.randomUUID(),
      title: "Teste Title",
      description:
        "vitae dignissim metus. Praesent sed erat at mi consequat tempus in a lacus. Phasellus malesuada, tellus nec aliquet condimentu",
    },
    {
      id: crypto.randomUUID(),
      title: "Test Title 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
};

export default db;
