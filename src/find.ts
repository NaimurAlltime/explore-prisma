import { PrismaClient } from "@prisma/client";
// ()
const prisma = new PrismaClient();

const main = async () => {
  // get all data
  const getAllData = await prisma.post.findMany();
  //   console.log(getAllData);

  //   find first and find first or throw error
  const singleData = await prisma.post.findFirstOrThrow({
    where: { published: false },
  });

  //   find unique threw error
  const findUnique = await prisma.post.findUniqueOrThrow({
    where: { id: 5 },
    select: {
      title: true,
      content: true,
    },
  });

  console.log({ findUnique });
};

main();
