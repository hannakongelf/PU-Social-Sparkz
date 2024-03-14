import AuthHeader from "@/components/header/auth-header";
import CreateHeader from "@/components/header/create-header";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <nav className="py-4 shadow flex justify-center">
      <div className="container max-w-6xl flex justify-between items-center">
        <section>
          <Link href={"/"}>
            <Image
              src="/socialsparkz.svg"
              alt="Social Sparkz logo"
              height={150}
              width={150}
            />
          </Link>
        </section>
        <section className="flex items-center">
          <CreateHeader />
          <Link href={"/toolbox"} className={"ml-4"}>
            <Button className="bg-purple-500">Toolbox</Button>
          </Link>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
