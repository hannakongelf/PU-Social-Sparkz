"use server";

import SpinTheWheel from "@/components/toolbox/spin-the-wheel";

export default async function Home() {
  return (
    <main className="flex justify-center items-center">
      <SpinTheWheel />
    </main>
  );
}
