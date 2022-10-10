import Link from "next/link";
import { useRouter } from "next/router";

const classes = {
  "nav-item": "font-medium hover:text-yellow text-lg px-5 py-3",
  "nav-item-active": "text-yellow",
  "nav-item-inactive": "text-white",
  "mobile-nav-list": "flex flex-col"
}

export default function Navbar({ isMobile }) {
  const router = useRouter();

  function NavList () {
    return (
      <nav className={isMobile ? classes['mobile-nav-list'] : ''}>
        <NavigationLink href="/" text="Game" router={router} />
        <NavigationLink href="/how-to-play" text="How to Play" router={router} />
        <NavigationLink href="/why-choose-us" text="Why Choose Us" router={router} />
        <NavigationLink href="/faq" text="FAQ" router={router} />
        <NavigationLink href="/contact-us" text="Contact Us" router={router} />
      </nav>
    )
  }

  function NavigationLink({ href, text, router }) {
    const isActive = router.asPath === href;
    return (
      <Link href={href}>
        <a className={`${isActive ? classes['nav-item-active'] : classes['nav-item-inactive']} ${classes['nav-item']}`}>
          {text}
        </a>
      </Link>
    );
  }

  return <NavList />
}