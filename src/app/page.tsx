'use client';
import { User } from "@prisma/client";
import { createUser, getUser } from "./actions/user";


export default function Home() {

  async function getUser2(){
    const u = await getUser();
    
    console.log(u)
  }

  return (
    <main>
      <button onClick={() => createUser()}>
        createuser
      </button>
      <h1>Social Sparkz</h1>
      <button onClick={() => (getUser2())}>testuser</button>
    </main>
  );
}
