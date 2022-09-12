import OrderTeks from "../components/OrderTeks";
import ImgAsset from "../components/ImgAsset";
import TitleSection from "../components/TitleSection";

export default function OrderSection() {
  return (
    <section className="flex items-right mt-10 sm:mt-12">
      <div className="w-6/12 ">
        <div className="bg-img rounded-lg flex">
          <ImgAsset image="/img4.png" imageClassName=" max-w-[70%] md:max-w-[70%] lg:max-w-[60%] mt-32 sm:mt-0 md:mt-0 mb-20 sm:mb-0 lg:mx-auto" />
        </div>
        <OrderTeks />
      </div>
      <div className="w-6/12 bg-img rounded-lg bg-cover">
        <TitleSection>Make garden</TitleSection>
        <TitleSection>more beauty </TitleSection>
        <div>
          <ImgAsset image="/img2.png" imageClassName="lg:max-w-[80%] md:max-w-[90%] sm:max-w-[80%] ml-16 sm:ml-7 md:ml-6 mt-16 md:mt-0 sm:mt-8 mb-20 sm:mb-10" />
        </div>
      </div>
    </section>
  );
}
