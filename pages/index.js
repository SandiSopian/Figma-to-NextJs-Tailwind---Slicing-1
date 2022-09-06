import Nav from "../components/Nav";
import Logo from "../components/Logo";
import Button from "../components/Button";
import HeroTeks from "../components/HeroTeks";
import OrderTeks from "../components/OrderTeks";
import ImgAsset from "../components/ImgAsset";
import TitleSection from "../components/TitleSection";

export default function Home() {
  return (
    <>
      <div>
        <div className="container mx-auto px-16">
          {/* Navbar Start */}
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
          {/* Navbar End */}

          {/* Hero Section Start */}
          <div className="flex items-right mt-12">
            <HeroTeks />
            <div className="bg-img -mt-32 rounded-bl-[70px]">
              <ImgAsset image="/img7.png" imageClassName="max-w-[70%] ml-16 mt-32 mb-20" />
            </div>
          </div>
          {/* Hero Section End */}

          {/* Order Section Start */}
          <div className="flex items-right mt-24">
            <div className="w-6/12 ">
              <div className="bg-img rounded-lg flex justify-center ">
                <ImgAsset image="/img4.png" imageClassName="max-w-[60%] mt-32 mb-20 mx-auto" />
              </div>
              <OrderTeks />
            </div>
            <div className="w-6/12 bg-img rounded-lg bg-cover">
              <TitleSection>Make your garden </TitleSection>
              <TitleSection>more beauty </TitleSection>
              <div>
                <ImgAsset image="/img2.png" imageClassName="max-w-[80%] ml-16 mt-16 mb-20" />
              </div>
            </div>
          </div>
          {/* Order Section End */}
        </div>
      </div>
    </>
  );
}
