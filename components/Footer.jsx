import Logo from "./Logo";

export default function Footer() {
  return (
    <section className="flex items-right mt-24">
      <div className="w-4/12 grid justify-items-center ">
        <Logo logoClassName="max-w-[200%] " />
      </div>
      <div className="w-2/12 ">
        <p className="uppercase mb-6">About Us</p>
        <p className="uppercase mb-6">Testimonial</p>
        <p className="uppercase mb-6">Contact Us</p>
        <p className="uppercase mb-6">Feature</p>
      </div>
      <div className="w-2/12">
        <p className="uppercase mb-6">Policy Library</p>
        <p className="uppercase mb-6">Site Map</p>
        <p className="uppercase mb-6">Blog</p>
      </div>
      <div className="w-4/12 ml-12">
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
