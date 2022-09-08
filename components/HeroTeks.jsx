import ParagraphSection from "./ParagraphSection";
import TitleSection from "./TitleSection";
import Button2 from "./Button2";

export default function HeroTeks() {
  return (
    <div className="w-7/12 ml-28">
      <TitleSection className="text-green-400 leading-relaxed">Plants is a Friend</TitleSection>

      <h2 className="text-3xl font-semibold mb-5 leading-relaxed">
        for save us <br />
        breathe tomorrow
      </h2>

      <ParagraphSection>
        <p>We know how important plants are to our existence and for </p>
        <p>the well-being of the planet at large, which is why we have put</p>
        <p>together a number</p>
      </ParagraphSection>

      <div className="flex justify-between mt-9 mr-10">
        <div>
          <Button2>Learn More</Button2>
        </div>

        <div>
          <div>
            <h2 className="text-xl font-semibold text-green-400">100+</h2>
            <p className="opacity-50 mb-6">Sales Everyweek</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-green-400">250+</h2>
            <p className="opacity-50">Awesome Collections</p>
          </div>
        </div>
      </div>
    </div>
  );
}
