import Button from "./Button";
import ParagraphSection from "./ParagraphSection";

export default function HeroTeks() {
  return (
    <div className="items-center sm:w-7/12 lg:ml-28 md:ml-0 -mt-12 sm:mt-12 md:mt-6 lg:mt-24 flex-grow">
      <ParagraphSection>
        <p>That give decorations on your garden with variants</p>
        <p>color and shapes</p>
      </ParagraphSection>

      <div className="flex md:justify-between mt-9 md:mt-14 mr-10">
        <Button>Order Now</Button>
      </div>
    </div>
  );
}
