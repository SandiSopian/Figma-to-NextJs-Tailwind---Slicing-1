import HeroTeks from "../components/HeroTeks";
import ImgAsset from "../components/ImgAsset";

export default function HeroSection() {
  return (
    <section className="flex items-right mt-12">
      <HeroTeks />
      <div className="bg-img -mt-32 rounded-bl-[70px]">
        <ImgAsset image="/img7.png" imageClassName="max-w-[70%] ml-16 mt-32 mb-20" />
      </div>
    </section>
  );
}
