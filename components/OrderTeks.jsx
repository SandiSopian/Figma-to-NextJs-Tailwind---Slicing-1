import Button from "./Button";
import ParagraphSection from "./ParagraphSection";

export default function HeroTeks() {
  return (
    <div className="w-7/12 ml-28 mt-12">
      <ParagraphSection>
        <p>That give decorations on your garden with variants color</p>
        <p>and shapes</p>
      </ParagraphSection>

      <div className="flex justify-between mt-9 mr-10">
        <Button>Order Now</Button>
      </div>
    </div>
  );
}
