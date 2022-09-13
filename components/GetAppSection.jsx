import TitleSection from "../components/TitleSection";
import ImgAsset from "../components/ImgAsset";
import ParagraphSection from "../components/ParagraphSection";
import Button from "../components/Button";

export default function GetAppSection() {
  return (
    <section className="flex flex-col-reverse sm:flex-row items-right sm:mt-20 md:mt-6" id="download">
      <div className="sm:w-5/12">
        <div className="sm:mb-12">
          <TitleSection>
            <p>Get our</p>
            <p>mobile app</p>
          </TitleSection>
        </div>
        <div className="mb-12">
          <ParagraphSection>Daily update products </ParagraphSection>
          <ParagraphSection>and better service from support</ParagraphSection>
        </div>
        <Button>Download Now</Button>
      </div>
      <div className="sm:w-7/12 rounded-lg bg-cover">
        <div>
          <ImgAsset image="/App.png" imageClassName="max-w-[100%] sm:max-w-[120%] lg:-ml-28 sm:-ml-8 md:-ml-4 mt-16 sm:mt-8 mb-6 sm:mb-20" />
        </div>
      </div>
    </section>
  );
}
