"use client";

import Button from "./common/button";
import Link from "next/link";
import * as actions from "@/actions";
import { useSession } from "next-auth/react";

const CreateHeader = () => {
  const session = useSession();

  if (session.status === "loading") return null;
  else if (session.data?.user)
    return (
      <section className="flex gap-4 items-center">
        <form action={actions.signOut}>
          <Link href={"/create"} className={"ml-4"}>
            <button>Create new game</button>
          </Link>
          ;
        </form>
      </section>
    );
  else
    return (
      <section>
        <form action={actions.signIn}></form>
      </section>
    );
};

export default CreateHeader;
