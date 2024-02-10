import * as actions from "@/actions";
import AuthHeader from "@/components/auth-header";
import { ClassNames } from "@emotion/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between py-4 items-center">
      <section>
        <Link href={"/"}>
          Social <span className={"text-yellow-400"}>Sparkz</span>
        </Link>
      </section>
      <AuthHeader />
    </nav>
  );
};

export default Navbar;
