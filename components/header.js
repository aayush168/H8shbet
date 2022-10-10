import Image from 'next/image';
import NavList from './navlist'

const classes = {
  "header": "bg-purple-light",
  "container": "container flex flex-wrap justify-between items-center mx-auto h-navbar-mobile",
  "logo": "w-6 h-6 text-white cursor-pointer"
}

export default function Header({ isMobile, isOpen, toggleDrawer }) {
    return (
    <div className={classes['header']}>
      <div className={`${classes['container']} ${isMobile ? 'h-navbar-mobile' : 'h-navbar-desktop'}`}>
        <section className={classes['logo-wrapper']}>
          <Image src="/images/logo.png" width={isMobile ? 144: 192 } height={ isMobile ? 24: 32 } alt="H8shbet logo" />
        </section>
        { !isMobile 
          ? <NavList isMobile={isMobile} />
          : 
          <div onClick={() => toggleDrawer(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={classes.logo}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        }
      </div>
    </div>
  )
}

