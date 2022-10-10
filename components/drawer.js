import NavList from './navlist'

export default function Drawer({ isOpen, isMobile, toggleDrawer }) {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-purple-light bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0"
          : " transition-all delay-500 opacity-0 translate-x-full")
      }
    >
      <section
        className={
          " w-screen max-w-xs right-0 absolute bg-purple h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <NavList isMobile={isMobile}/>
      </section>
      <section className=" w-screen h-full cursor-pointer" onClick={() => toggleDrawer(false)} />
    </main>
  );
}
