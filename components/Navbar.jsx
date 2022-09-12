import { useState } from "react";
import Nav from "../components/Nav";
import Logo from "../components/Logo";
import Button from "../components/Button";
import classnames from "classnames";

export default function Navbar() {
  const [offcanvas, setOffcanvas] = useState(false);

  return (
    <>
      <section className="flex items-center text-sm mt-8">
        <div className="w-3/12 md:w-3/12 px-10">
          <Logo />
        </div>

        <div className="w-6/12 hidden md:block">
          <Nav dir="horizontal" />
        </div>

        <div className="w-3/12 md:w-3/12 md:ml-12 hidden md:block">
          <Button>Order Now</Button>
        </div>

        <div className="w-9/12 md:hidden text-right mb-8 ">
          <img src="/menu.svg" className="inline-block" onClick={() => setOffcanvas(true)} />
        </div>
      </section>

      <div className={classnames("fixed bg-white z-10 top-0 h-full w-full transition-all p-10 md:hidden", offcanvas ? "right-0" : "-right-full")}>
        <img src="/x.svg" className="absolute top-8 right-16 w-8" onClick={() => setOffcanvas(false)} />
        <Nav dir="vertical" />
      </div>
    </>
  );
}
