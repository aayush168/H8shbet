import { useState, useEffect } from "react";

import Header from './header'
import Footer from './footer'
import Drawer from './drawer'

export default function Layout({ children }) {
  const [isMobile, toggleIsMobile] = (useState(false))
  const [isOpen, toggleDrawer] = (useState(false))

  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 ? toggleIsMobile(false) : toggleIsMobile(true));
    if (!isMobile) {
      toggleDrawer(false)
    }
  }, [isMobile]);

  return (
    <>
      <Header isMobile={isMobile} isOpen={isOpen} toggleDrawer={toggleDrawer}/>
      <Drawer isOpen={isOpen} isMobile={isMobile} toggleDrawer={toggleDrawer} />
      <main>{children}</main>
      <Footer />
    </>
  )
}