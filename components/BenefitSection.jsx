import TitleSection from "../components/TitleSection";
import ImgAsset from "../components/ImgAsset";
import ParagraphSection from "../components/ParagraphSection";

export default function BenefitSection() {
  return (
    <section className="flex items-right mt-24 sm:mt-10">
      <div className="w-6/12 md:w-5/12 bg-img rounded-lg bg-full md:bg-none">
        <div>
          <ImgAsset image="/img3.png" imageClassName="max-w-[80%] md:max-w-[110%] sm:max-w-[90%] ml-16 md:-ml-10 sm:ml-2 mb-20 lg:mt-0 md:mt-36 sm:mt-16" />
        </div>
      </div>
      <div className="w-6/12">
        <TitleSection>A great</TitleSection>
        <TitleSection>initiative indeed</TitleSection>

        <div className="flex items-start mt-20 sm:mt-0 md:mt-10 mb-6 ">
          <img src="/check.svg" className="bg-green-400 rounded-full " />
          <div className="ml-4">
            <ParagraphSection>Ost plants are multicellular organism. Green plants obtain most for their energy</ParagraphSection>
          </div>
        </div>
        <div className="flex items-start mb-6">
          <img src="/check.svg" className="bg-green-400 rounded-full " />
          <div className="ml-4">
            <ParagraphSection>Sunlight takes about 8-3 minutes to reach Earth from the surface of the Sun</ParagraphSection>
          </div>
        </div>
        <div className="flex items-start mb-6">
          <img src="/check.svg" className="bg-green-400 rounded-full " />
          <div className="ml-4">
            <ParagraphSection>Redearchers can measure the intensity of sunlight using a sunshine recorder</ParagraphSection>
          </div>
        </div>
        <div className="flex items-start mb-6">
          <img src="/check.svg" className="bg-green-400 rounded-full " />
          <div className="ml-4">
            <ParagraphSection>That were not animals and included algae and fungi however</ParagraphSection>
          </div>
        </div>
      </div>
    </section>
  );
}
