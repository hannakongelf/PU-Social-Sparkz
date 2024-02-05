'use client';

import Navbar from '@/components/Navbar';
import { useSession } from 'next-auth/react';

export default function Home() {
  const session = useSession();
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <h1>Social Sparkz</h1>
      {session.data?.user && <div>Velkommen {session.data.user.name}</div>}
    </main>
  );
}
