import Navbar from '@/components/Navbar';
import { gameType } from '@prisma/client';

export default function Home() {
  const GAME_CATEGORIES = Object.values(gameType).map((type) => type);
  console.log(GAME_CATEGORIES);
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <h1>Social Sparkz</h1>
    </main>
  );
}
