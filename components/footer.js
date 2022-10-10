import Link from "next/link";
import { useRouter } from "next/router";

const classes = {
  "footer-wrapper": "bg-purple-light",
  "container": "container mx-auto",
  "content-section": "py-7",
  "quick-link-title": "text-white text-xl mb-5 font-medium",
  "quick-link-wrapper": "grid sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2",
  "nav-item": "font-medium hover:text-yellow text-lg",
  "nav-item-active": "text-yellow",
  "nav-item-inactive": "text-white",
}

export default function Footer() {
  const router = useRouter();
  return (
    <footer className={classes['footer-wrapper']}>
      <div className={classes['container']}>
        <section className={classes['content-section']}>
          <h3 className={classes['quick-link-title']}>Quick Link</h3>
          <nav className={classes['quick-link-wrapper']}>
            <NavigationLink href="/about-us" text="About Us" router={router} />
            <NavigationLink href="/term-condition" text="Term & Conditions" router={router} />
            <NavigationLink href="/responsible-gaming" text="Responsible Gaming" router={router} />
            <NavigationLink href="/contact-us" text="Contact Us" router={router} />
            <NavigationLink href="/privacy-policy" text="Privacy Policy" router={router} />
            <NavigationLink href="/help-center" text="Help Center" router={router} />
          </nav>
        </section>
      </div>
    </footer>
  )

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
}

