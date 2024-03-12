import { PrismaClient } from "@prisma/client";
// ()
const prisma = new PrismaClient();

const main = async () => {
  //   // create single data
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "first title 3",
  //       content: "this is content",
  //       authorName: "Naimur Rahman",
  //     },
  //   });

  // create many data
  const createManny = await prisma.post.createMany({
    data: [
      {
        title: "title 5",
        content: "this is content 1",
        authorName: "Author 1",
      },
      {
        title: "title 6",
        content: "this is content 2",
        authorName: "Athor 2",
      },
      {
        title: "title 7",
        content: "this is content 3",
        authorName: "Author 3",
      },
    ],
  });
  console.log({ createManny });
};

main();
