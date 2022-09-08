import Nav from "../components/Nav";
import Logo from "../components/Logo";
import Button from "../components/Button";

export default function Navbar() {
  return (
    <section className="flex items-center text-sm">
      <div className="w-3/12 px-10">
        <Logo />
      </div>

      <div className="w-6/12">
        <Nav />
      </div>

      <div className="w-3/12">
        <Button>Order Now</Button>
      </div>
    </section>
  );
}
