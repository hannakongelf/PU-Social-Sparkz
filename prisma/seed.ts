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

const lekNavn = [
  "Stiv Heks",
  "Bro, Bro, Brille",
  "Kongen befaler",
  "Haien kommer",
  "Rødt lys, Grønt lys",
  "Fruktsalat",
  "Museumsvokteren",
  "Limbo",
  "Stolleken",
  "Flasketuten peker på",
  "Tre på rad med bevegelse",
  "Boksen går",
  "Sisten",
  "Hauk og due",
  "Paradis",
  "Løkken",
  "Dødball",
  "Kims lek",
  "Gjemsel",
  "Hopp i havet",
  "Fotballkongen",
  "Tau trekking",
  "Ballongdans",
  "Sekkeløp",
  "Eggløp",
  "Potetløp",
  "Tug of War (Taukrig)",
  "Vannballongstafett",
  "Hinderløype",
  "Ballongstafett"
];



  const gamesData = Array.from({ length: 25 }, (_, index) => ({
    name: lekNavn[index],
    description: "Bli kjent-leken er en morsom og engasjerende aktivitet designet for å bryte isen og fremme samhold i nye grupper. Deltakerne samles i en sirkel, og en ball eller et annet lett gjenkjennelig objekt kastes mellom deltakerne. Når en person mottar ballen, må vedkommende si navnet sitt og dele en interessant fakta om seg selv før ballen kastes videre til neste person. Målet er å huske så mange navn og fakta som mulig, noe som oppmuntrer til lytting og gir en unik mulighet til å lære om de andre i gruppen. Denne leken er perfekt for skoleklasser, teambyggingsøkter, eller sosiale sammenkomster, og tilrettelegger for et inkluderende og vennlig miljø.",
    type: getRandomGameType(),
    userId: user.id,
    playerMin: 2,
    playerMax: 4,
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
