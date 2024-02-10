import { PrismaClient, gameType } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john.doe@example.com",
      admin: false,
    },
  });

  const gameTypes = Object.values(gameType);

  const getRandomGameType = () => {
    const randomIndex = Math.floor(Math.random() * gameTypes.length);
    return gameTypes[randomIndex];
  };

  const gamesData = Array.from({ length: 25 }, (_, index) => ({
    name: `Sample Game ${index}`,
    description: "A sample game description",
    type: getRandomGameType(),
    userId: user.id,
    playerMin: 2,
    playerMax: 4,
    image:
      "https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_960_720.png",
  }));

  const games = await prisma.game.createMany({
    data: gamesData,
  });

  const reviewsData = gamesData.map((_, index) => ({
    description: `Review for Sample Game ${index}`,
    rating: Math.floor(Math.random() * 5) + 1,
    userId: user.id,
    gameId: index + 1,
  }));

  for (let i = 0; i < reviewsData.length; i++) {
    await prisma.review.create({
      data: reviewsData[i],
    });
  }

  console.log("Seeding completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
