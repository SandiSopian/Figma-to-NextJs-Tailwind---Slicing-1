import Nav from "../components/Nav";
import Logo from "../components/Logo";
import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <div>
        <div className="container mx-auto">
          <div className="flex items-center">
            {/* Logo Start*/}
            <div className="w-3/12">
              <Logo />
            </div>
            {/* Logo End */}
            {/* Nav Item Start */}
            <div className="w-6/12">
              <Nav />
            </div>
            {/* Nav Item End */}
            {/* Button Start */}
            <div className="w-3/12  ">
              <Button>Order Now</Button>
            </div>
            {/* Button End */}
          </div>
        </div>
      </div>
    </>
  );
}
