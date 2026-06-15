import Link from "next/link";
import { useRouter } from "next/router";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const router = useRouter();

  return (
    <header className='flex items-center justify-between gap-4 bg-card p-4 px-12'>
      <p className='text-xl font-bold text-primary tracking-tight'>
        Essentials<span className='text-foreground'>.</span>
      </p>
      <ul className='flex space-x-6 text-foreground font-medium'>
        <li>
          <Link
            href='/'
            className={`transition-colors ${router.pathname === "/" ? "text-primary font-bold" : "text-muted-foreground hover:text-primary"}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href='/products'
            className={`transition-colors ${router.pathname.startsWith("/products") ? "text-primary font-bold" : "text-muted-foreground hover:text-primary"}`}
          >
            Products
          </Link>
        </li>
      </ul>
      <ThemeToggle />
    </header>
  );
};

export default Navbar;
