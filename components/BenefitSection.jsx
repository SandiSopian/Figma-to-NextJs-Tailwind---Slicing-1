import TitleSection from "../components/TitleSection";
import BenefitIcon from "../components/BenefitIcon";
import ImgAsset from "../components/ImgAsset";
import ParagraphSection from "../components/ParagraphSection";

export default function BenefitSection() {
  return (
    <section className="flex items-right mt-24">
      <div className="w-6/12 bg-img rounded-lg bg-cover">
        <div>
          <ImgAsset image="/img3.png" imageClassName="max-w-[80%] ml-16 mb-20" />
        </div>
      </div>
      <div className="w-6/12">
        <TitleSection>A great</TitleSection>
        <TitleSection>initiative indeed</TitleSection>

        <div className="flex items-start mt-20 mb-6">
          <BenefitIcon />
          <div className="ml-4">
            <ParagraphSection>Ost plants are multicellular organism. Green</ParagraphSection>
            <ParagraphSection>plants obtain most fo their energy</ParagraphSection>
          </div>
        </div>
        <div className="flex items-start mb-6">
          <BenefitIcon />
          <div className="ml-4">
            <ParagraphSection>Sunlight takes about 8-3 minutes to reach Earth</ParagraphSection>
            <ParagraphSection>from the surface of the Sun</ParagraphSection>
          </div>
        </div>
        <div className="flex items-start mb-6">
          <BenefitIcon />
          <div className="ml-4">
            <ParagraphSection>Redearchers can measure the intensity of</ParagraphSection>
            <ParagraphSection>sunlight using a sunshine recorder</ParagraphSection>
          </div>
        </div>
        <div className="flex items-start mb-6">
          <BenefitIcon />
          <div className="ml-4">
            <ParagraphSection>That were not animals and included algae</ParagraphSection>
            <ParagraphSection>and fungi however</ParagraphSection>
          </div>
        </div>
      </div>
    </section>
  );
}
