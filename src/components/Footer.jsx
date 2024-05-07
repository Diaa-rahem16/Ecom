const Footer = () => {
    return (
      <footer className="mt-[101px] relative flex bg-gray-900 pl-[43px] pt-[43px] shadow-xs md:h-auto md:pl-5 md:pt-5">
        <div className="relative h-[304px] w-[96%]">
          <div className="absolute left-[0.00px] top-[0.00px] m-auto flex w-[45%] items-start justify-between gap-5 md:relative md:flex-col">
            <div className="flex flex-col gap-3.5 md:p-5 " >
              <h4 className="!text-white font-bold">Contact</h4>
              <ul className="flex flex-col">
                <li>
                  <a href="#"><p className="!text-gray-400">+03135939584</p></a>
                </li>
                <li>
                  <a href="#" className="mt-4"><p className="!text-blue_gray-500">email@email.com</p></a>
                </li>
                <li>
                  <a href="#" className="mt-3.5"><p className="!text-gray-400">29 city 12 constantine algeria</p></a>
                </li>
                <li>
                  <a href="#" className="mt-[41px] text-white"><h4 className="!text-white font-bold">Social media links</h4></a>
                </li>
                <li>
                  <a href="#" className="mt-[17px]"><p className="!text-gray-400">instagram</p></a>
                </li>
                <li>
                  <a href="#" className="mt-3"><p className="text-gray-400">facebook</p></a>
                </li>
                <li>
                  <a href="#" className="mt-[15px]"><p className="!text-gray-400">twitter</p></a>
                </li>
              </ul>
            </div>
            <ul className="flex flex-col items-start gap-4 md:p-5">
              <li>
                <a href="#"><h4 className="!text-white font-bold ">Navigation links</h4></a>
              </li>
              <li>
                <a href="#"><p className="!text-gray-400">About us</p></a>
              </li>
              <li>
                <a href="#"><p className="!text-gray-400">Shipping information</p></a>
              </li>
              <li>
                <a href="#"><p className="!text-gray-400">Terms and Services</p></a>
              </li>
            </ul>
          </div>
          <div className="absolute right-[16%] top-[0.00px] m-auto flex flex-col items-start gap-[15px]">
            <h4 className="!text-white font-bold">Our Team</h4>
            <p className="!text-gray-400">Amdjed.bellir@univ-constantine2.dz</p>
            <p className="!text-gray-400">sohaib.bouzitouna@univ-constantine2.dz</p>
            <p className="!text-gray-400">diaa.rahem@univ-constantine2.dz</p>
          </div>
          <h1 className="absolute bottom-[-0.10px] right-[0.00px] m-auto !text-white-A700">Soukkantra</h1>
        </div>
        <h1 className=" absolute text-white text-8xl bottom-[10%] right-[3%] font-montserrat font-extrabold ">SouqKantra</h1>
      </footer>
    )
  }
  
  export default Footer;