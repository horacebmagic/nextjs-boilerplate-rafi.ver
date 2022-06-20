import { NextPage } from "next";
import ActiveLink from "../ActiveLink";

const Navbar: NextPage = () => {
  return (
    <nav>
      <ActiveLink href="/" activeClassName="underline">
        Home
      </ActiveLink>
      <ActiveLink href="/about" activeClassName="underline">
        About
      </ActiveLink>
    </nav>
  );
};

export default Navbar;
