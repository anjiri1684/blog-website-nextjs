import Logo from "./logo";
import Link from "next/link";

function MainNavigation() {
  return (
    <header>
      <Link href="/">
        <span>
          <Logo />
        </span>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
