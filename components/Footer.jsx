import Logo from "./Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="flex flex-col-reverse sm:flex-row flex-grow items-right mt-24 sm:mt-12">
      <div className="sm:w-2/12 md:w-3/12 lg:w-3/12   ">
        <Logo logoClassName="invisible sm:visible sm:max-w-[150%] lg:max-w-[200%] sm:-ml-8 md:ml-0" />
      </div>
      <div className="sm:w-3/12 lg:text-sm md:text-xs sm:text-xxs">
        <Link href="/#benefit">
          <p className="uppercase mb-6 text-xs cursor-pointer lg:text-lg hover:opacity-50">About Us</p>
        </Link>
        <p className="uppercase mb-6 text-xs cursor-pointer lg:text-lg hover:opacity-50">Testimonial</p>
        <p className="uppercase mb-6 text-xs cursor-pointer lg:text-lg hover:opacity-50">Contact Us</p>
        <p className="uppercase mb-6 text-xs cursor-pointer lg:text-lg hover:opacity-50">Feature</p>
      </div>
      <div className="sm:w-4/12 md:w-3/12 lg:text-sm md:text-xs sm:text-xxs">
        <Link href="/#hero">
          <p className="uppercase mb-6 text-xs cursor-pointer lg:text-lg hover:opacity-50 ">Home</p>
        </Link>
        <Link href="/#download">
          <p className="uppercase mb-6 text-xs cursor-pointer lg:text-lg hover:opacity-50">Download</p>
        </Link>
        <p className="uppercase mb-6 text-xs cursor-pointer lg:text-lg hover:opacity-50">Blog</p>
      </div>
      <div className="sm:w-3/12 md:w-2/12 xl:ml-12 lg:text-sm md:text-xs sm:text-xxs">
        <p className="uppercase mb-6 text-xs lg:text-lg ">Follow Us</p>
        <div className="flex w-6 lg:w-full mb-12">
          <img href="" src="/instagram.svg" alt="instagram" className="bg-black rounded-full p-2 mr-4 hover:cursor-pointer" />
          <img href="" src="/youtube.svg" alt="instagram" className="bg-black rounded-full p-2 mr-4 hover:cursor-pointer" />
          <img href="" src="/twitter.svg" alt="instagram" className="bg-black rounded-full p-2 mr-4 hover:cursor-pointer" />
          <img href="" src="/linkedin.svg" alt="instagram" className="bg-black rounded-full p-2 mr-4 hover:cursor-pointer" />
        </div>
      </div>
    </section>
  );
}
