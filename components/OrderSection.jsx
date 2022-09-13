import OrderTeks from "../components/OrderTeks";
import ImgAsset from "../components/ImgAsset";
import TitleSection from "../components/TitleSection";

export default function OrderSection() {
  return (
    <section className="flex flex-col-reverse sm:flex-row items-right mt-10 sm:mt-12">
      <div className="sm:w-6/12 ">
        <div className="bg-img rounded-lg">
          <ImgAsset image="/img4.png" imageClassName="bg-img rounded-full max-w-[100%] sm:max-w-[70%] md:max-w-[70%] lg:max-w-[60%] sm:mt-0 md:mt-0 mb-20 sm:mb-0 lg:mx-auto" />
        </div>
        <OrderTeks />
      </div>
      <div className="sm:w-6/12 rounded-lg bg-cover mt-10">
        <div className="-mt-8">
          <TitleSection>
            <p>Make Garden</p>
            <p>more beauty</p>
          </TitleSection>
        </div>
        <div className="sm:w-6/12">
          <ImgAsset image="/img2.png" imageClassName="bg-img max-w-[150%] sm:max-w-[200%] -ml-16 sm:ml-0 md:-ml-10 lg:ml-0 mt-16 md:mt-10 sm:mt-8 mb-20 sm:mb-10" />
        </div>
      </div>
    </section>
  );
}
