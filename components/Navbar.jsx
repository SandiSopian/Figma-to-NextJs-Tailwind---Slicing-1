import { useState } from "react";
import Nav from "../components/Nav";
import Logo from "../components/Logo";
import Button from "../components/Button";
import classnames from "classnames";

export default function Navbar() {
  const [offcanvas, setOffcanvas] = useState(false);

  return (
    <>
      <section className="flex sticky top-0 items-center text-sm mt-8 backdrop-filter backdrop-blur-lg border-b border-gray-200 z-20">
        <div className="w-3/12 md:w-3/12 px-10">
          <Logo logoClassName="-ml-16 md:-ml-10" />
        </div>

        <div className="w-6/12 hidden sm:block">
          <Nav dir="horizontal" />
        </div>

        <div className="w-3/12 md:w-3/12 md:ml-12 hidden sm:block">
          <Button>Order Now</Button>
        </div>

        <div className="w-9/12 sm:hidden text-right mb-8">
          <img src="/menu.svg" className="inline-block hover:cursor-pointer" onClick={() => setOffcanvas(true)} />
        </div>
      </section>

      <div className={classnames("fixed bg-white z-10 top-0 h-full w-full transition-all p-10 md:hidden", offcanvas ? "right-0" : "-right-full")}>
        <img src="/x.svg" className="absolute top-8 right-16 w-8 hover:cursor-pointer" onClick={() => setOffcanvas(false)} />
        <Nav dir="vertical" />
      </div>
    </>
  );
}
