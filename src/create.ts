import { PrismaClient } from "@prisma/client";
// ()
const prisma = new PrismaClient();

const main = async () => {
  // create data
  const result = await prisma.post.create({
    data: {
      title: "first title 3",
      content: "this is content",
      authorName: "Naimur Rahman",
    },
  });
  console.log(result);
};

main();
