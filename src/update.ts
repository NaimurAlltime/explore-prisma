import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  //   const sindleUpdate = await prisma.post.update({
  //     where: {
  //       id: 8,
  //     },
  //     data: {
  //       title: "title 8",
  //       //   content: "content 6",
  //       //   authorName: "Author 6",
  //     },
  //   });

  const updateManny = await prisma.post.updateMany({
    where: {
      title: "first title 3",
    },
    data: {
      title: "new updated title 3",
      published: true,
    },
  });
  console.log({ updateManny });
};

updates();
