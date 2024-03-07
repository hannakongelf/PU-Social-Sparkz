"use client";

import * as actions from "@/actions";
import { useSession } from "next-auth/react";
import { Button, Link } from "@mui/material";

const UserInfoBox = () => {
  const session = useSession();

  if (session.status === "loading") return null;
  else if (session.data?.user)
    return (
      <section className="w-4/5">
        <div className="flex justify-start items-start">
          <div className="w-1/3">
            {session.data.user.image ? (
              <img src={session.data.user.image} alt="" className="w-4/5"/>
            ) : (
              <div>Your picture could not be loaded </div>
            )}
          </div>
          <div className="flex flex-col ">
            <label>{session.data.user.name}</label>
            <label>Username</label>
            <label>Bio</label>

            <form action={actions.signOut}>
              <Button type="submit" variant="contained">
                Sign out
              </Button>
            </form>
          </div>
        </div>
      </section>
    );
  else
    return (
      <section>
        <form action={actions.signIn}>
          <Button type="submit" variant="contained">
            Sign in
          </Button>
        </form>
      </section>
    );
};

export default UserInfoBox;
