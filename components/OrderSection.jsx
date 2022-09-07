import OrderTeks from "../components/OrderTeks";
import ImgAsset from "../components/ImgAsset";
import TitleSection from "../components/TitleSection";

export default function OrderSection() {
  return (
    <section className="flex items-right mt-24">
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
    </section>
  );
}
