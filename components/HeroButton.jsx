import Button2 from "./Button2";

export default function HeroButton() {
  return (
    <>
      <div>
        <Button2>Learn More</Button2>
      </div>

      <div>
        <div>
          <h2 className="text-xl font-semibold text-green-400">100+</h2>
          <p className="opacity-50">Sales Everyweek</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-green-400">250+</h2>
          <p className="opacity-50">Awesome Collections</p>
        </div>
      </div>
    </>
  );
}
