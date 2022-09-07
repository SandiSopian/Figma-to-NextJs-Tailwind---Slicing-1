import TitleSection from "../components/TitleSection";
import ImgAsset from "../components/ImgAsset";

export default function GetAppSection() {
  return (
    <section className="flex items-right mt-24">
      <div className="w-6/12 ">
        <TitleSection>Make your garden </TitleSection>
        <TitleSection>more beauty </TitleSection>
      </div>
      <div className="w-6/12 bg-img rounded-lg bg-cover">
        <div>
          <ImgAsset image="/img2.png" imageClassName="max-w-[80%] ml-16 mt-16 mb-20" />
        </div>
      </div>
    </section>
  );
}
