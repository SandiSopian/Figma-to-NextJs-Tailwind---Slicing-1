import Nav from "../components/Nav";
import Logo from "../components/Logo";
import Button from "../components/Button";
import HeroTeks from "../components/HeroTeks";
import HeroImg from "../components/HeroImg";

export default function Home() {
  return (
    <>
      <div>
        <div className="container mx-auto px-16">
          <div className="flex items-center">
            {/* Logo Start*/}
            <div className="w-3/12 px-10">
              <Logo />
            </div>
            {/* Logo End */}
            {/* Nav Item Start */}
            <div className="w-6/12">
              <Nav />
            </div>
            {/* Nav Item End */}
            {/* Button Start */}
            <div className="w-3/12">
              <Button>Order Now</Button>
            </div>
            {/* Button End */}
          </div>
          <div className="flex items-right">
            <HeroTeks />
            <HeroImg />
          </div>
        </div>
      </div>
    </>
  );
}
