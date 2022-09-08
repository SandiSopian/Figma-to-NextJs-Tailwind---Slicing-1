import TitleSection from "../components/TitleSection";
import ImgAsset from "../components/ImgAsset";
import ParagraphSection from "../components/ParagraphSection";
import Button from "../components/Button";

export default function GetAppSection() {
  return (
    <section className="flex items-right mt-24">
      <div className="w-5/12">
        <div className="mb-12">
          <TitleSection>Get our</TitleSection>
          <TitleSection>mobile app</TitleSection>
        </div>
        <div className="mb-24">
          <ParagraphSection>Daily update products </ParagraphSection>
          <ParagraphSection>and better service from support</ParagraphSection>
        </div>
        <Button>Download Now</Button>
      </div>
      <div className="w-7/12 rounded-lg bg-cover">
        <div>
          <ImgAsset image="/App.png" imageClassName="max-w-[100%] -ml-28 mt-16 mb-20" />
        </div>
      </div>
    </section>
  );
}
