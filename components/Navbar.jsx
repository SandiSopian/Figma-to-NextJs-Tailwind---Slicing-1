import Nav from "../components/Nav";
import Logo from "../components/Logo";
import Button from "../components/Button";

export default function Navbar() {
  return (
    <div className="flex items-center">
      <div className="w-3/12 px-10">
        <Logo />
      </div>

      <div className="w-6/12">
        <Nav />
      </div>

      <div className="w-3/12">
        <Button>Order Now</Button>
      </div>
    </div>
  );
}
