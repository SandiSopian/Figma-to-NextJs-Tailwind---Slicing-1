import HeroButton from "./HeroButton";

export default function HeroTeks() {
  return (
    <div className="w-7/12 ml-28">
      <h1 className="text-5xl font-bold text-green-400 mb-5">Plants is a friend</h1>
      <h2 className="text-3xl font-semibold mb-5">
        for save us <br />
        breathe tomorrow
      </h2>
      <div className="opacity-70">
        <p>We know how important plants are to our existence and for</p>
        <p>the well-being of the planet at large, which is why we have put</p>
        <p>together a number</p>
      </div>

      <div className="flex justify-between mt-9 mr-10">
        <HeroButton />
      </div>
    </div>
  );
}
