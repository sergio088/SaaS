import prisma from "./prisma";

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "sergio",
      email: "ssergiosantos088@gmail.com",
      age: 19,
      posts: {
        create: { title: "primeiro post", content: "Hello Word" },
      },
    },
  });
  console.log("usuario criado", user);

  const users = await prisma.user.findMany({
    include: { posts: true },
  });
  console.log("Usuários:", users);
}

main();
