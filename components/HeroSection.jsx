import HeroTeks from "../components/HeroTeks";
import ImgAsset from "../components/ImgAsset";

export default function HeroSection() {
  return (
    <section className="flex flex-wrap-reverse sm:flex-nowrap items-right mt-12">
      <HeroTeks />
      <div className="flex-grow bg-img z-0 -mt-32 w-7/12 sm:rounded-bl-[70px]">
        <ImgAsset image="/img7.png" imageClassName="max-w-[150%] sm:max-w-[120%] lg:max-w-[100%] -ml-12 sm:-ml-6 lg:ml-0 mt-36 mb-20" />
      </div>
    </section>
  );
}
