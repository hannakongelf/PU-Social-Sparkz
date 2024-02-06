import { gameType } from "@prisma/client";
import prisma from "../lib/prisma.ts";

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john.doe@example.com",
      admin: false,
    },
  });

  const game = await prisma.game.create({
    data: {
      name: "Sample Game",
      description: "A sample game description",
      type: [gameType.CARD],
      author: {
        connect: { id: user.id },
      },
    },
  });

  console.log({ user, game });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
