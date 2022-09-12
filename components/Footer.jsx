import Logo from "./Logo";

export default function Footer() {
  return (
    <section className="flex items-right mt-24">
      <div className="w-4/12 lg:w-3/12 md:w-2/12 sm:w-2/12 ">
        <Logo logoClassName="lg:max-w-[200%] md:max-w-[150%] " />
      </div>
      <div className="w-2/12 lg:w-3/12 md:w-3/12 sm:w-3/12 lg:text-sm md:text-xs sm:text-xxs">
        <p className=" uppercase mb-6">About Us</p>
        <p className="uppercase mb-6">Testimonial</p>
        <p className="uppercase mb-6">Contact Us</p>
        <p className="uppercase mb-6">Feature</p>
      </div>
      <div className="w-2/12 lg:w-3/12 md:w-3/12 sm:w-3/12 lg:text-sm md:text-xs sm:text-xxs">
        <p className="uppercase mb-6">Policy Library</p>
        <p className="uppercase mb-6">Site Map</p>
        <p className="uppercase mb-6">Blog</p>
      </div>
      <div className="w-4/12 lg:w-3/12 md:w-3/12 sm:w-4/12 xl:ml-12 lg:text-sm md:text-xs sm:text-xxs">
        <p className="uppercase mb-6">Follow Us</p>
        <div className="flex">
          <img src="/instagram.svg" alt="instagram" className="bg-black rounded-full p-2 mr-4" />
          <img src="/youtube.svg" alt="instagram" className="bg-black rounded-full p-2 mr-4" />
          <img src="/twitter.svg" alt="instagram" className="bg-black rounded-full p-2 mr-4" />
          <img src="/linkedin.svg" alt="instagram" className="bg-black rounded-full p-2 mr-4" />
        </div>
      </div>
    </section>
  );
}
