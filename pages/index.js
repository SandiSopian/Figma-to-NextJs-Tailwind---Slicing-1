export default function Home() {
  return (
    <>
      <div>
        <div className="container mx-auto">
          <div className="flex">
            {/* Logo */}
            <div className="w-3/12">Logo</div>
            {/* - */}
            <div className="w-6/12">
              <ul className="flex justify-center space-x-10">
                <li>
                  <a className="text-white text-opacity-60 font-semibold" />
                  Home
                </li>
                <li>
                  <a className="text-white text-opacity-60 font-semibold" />
                  About
                </li>
                <li>
                  <a className="text-white text-opacity-60 font-semibold" />
                  Contact
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
