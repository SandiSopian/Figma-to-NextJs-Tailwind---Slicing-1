import Logo from "./Logo";

export default function Footer() {
  return (
    <section className="flex flex-col-reverse sm:flex-row flex-grow items-right mt-24 sm:mt-12">
      <div className="sm:w-2/12 md:w-3/12 lg:w-3/12   ">
        <Logo logoClassName="invisible sm:visible sm:max-w-[150%] lg:max-w-[200%] sm:-ml-8 md:ml-0" />
      </div>
      <div className="sm:w-3/12 ">
        <p className=" uppercase mb-6 text-xs lg:text-lg ">About Us</p>
        <p className="uppercase mb-6 text-xs lg:text-lg ">Testimonial</p>
        <p className="uppercase mb-6 text-xs lg:text-lg ">Contact Us</p>
        <p className="uppercase mb-6 text-xs lg:text-lg ">Feature</p>
      </div>
      <div className="sm:w-4/12 md:w-3/12 ">
        <p className="uppercase mb-6 text-xs lg:text-lg ">Policy Library</p>
        <p className="uppercase mb-6 text-xs lg:text-lg ">Site Map</p>
        <p className="uppercase mb-6 text-xs lg:text-lg ">Blog</p>
      </div>
      <div className="sm:w-3/12 md:w-2/12 xl:ml-12 ">
        <p className="uppercase mb-6 text-xs lg:text-lg ">Follow Us</p>
        <div className="flex w-6 lg:w-full mb-12">
          <img src="/instagram.svg" alt="instagram" className="bg-black rounded-full p-2 mr-4 " />
          <img src="/youtube.svg" alt="instagram" className="bg-black rounded-full p-2 mr-4" />
          <img src="/twitter.svg" alt="instagram" className="bg-black rounded-full p-2 mr-4" />
          <img src="/linkedin.svg" alt="instagram" className="bg-black rounded-full p-2 mr-4" />
        </div>
      </div>
    </section>
  );
}
