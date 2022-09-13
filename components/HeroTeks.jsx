import ParagraphSection from "./ParagraphSection";
import TitleSection from "./TitleSection";
import Button2 from "./Button2";

export default function HeroTeks() {
  return (
    <div className="flex-grow w-7/12 md:w-10/12 lg:ml-28">
      <TitleSection className="-mt-12 text-green-400 leading-relaxed">Plants is a Friend</TitleSection>

      <p className="text-sm md:text-xl font-semibold mb-5 leading-relaxed">
        for save us <br />
        breathe tomorrow
      </p>

      <ParagraphSection>
        <p>We know how important plants are to our existence and for </p>
        <p>the well-being of the planet at large, which is why we have put</p>
        <p>together a number</p>
      </ParagraphSection>

      <div className="flex flex-wrap justify-between mt-9 xl:mr-10 ">
        <div>
          <Button2>Learn More</Button2>
        </div>

        <div>
          <div>
            <h2 className="mt-6 text-xs md:text-sm lg:text-lg font-semibold text-green-400">100+</h2>
            <p className="text-xxs md:text-xs lg:text-sm opacity-50 mb-6">Sales Everyweek</p>
          </div>
          <div>
            <h2 className="mt-6 text-xs md:text-sm lg:text-lg  font-semibold text-green-400">250+</h2>
            <p className="text-xxs md:text-xs lg:text-sm  opacity-50">Awesome Collections</p>
          </div>
        </div>
      </div>
    </div>
  );
}
