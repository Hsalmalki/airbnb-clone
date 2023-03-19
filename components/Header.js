import Image from "next/image";
import logo from "../public/imgs/580b57fcd9996e24bc43c513.png";
// import searchIcon from "@/public/svg/svgIcons";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
function Header() {
  return (
    <header className=" p-5 bg-white z-50 sticky top-0 grid grid-cols-3 shadow-md md:px-10">
      {/*Left Section */}
      <div className=" relative h-8 md:h-12 items-center my-auto cursor-pointer">
        <Image
          src={logo}
          alt={"imge"}
          fill
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/*Middle Section */}
      <div
        className="flex items-center  border-2 rounded-full 
       "
      >
        <input
          className=" 
          shadow-sm pl-3 py-2   outline-none flex-grow rounded-full transparent"
          type="text"
          placeholder="Search here"
          
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 text-red-400 sm:h-10 cursor-pointer" />
      </div>
      {/*Right Section */}
      <div>

      </div>
    </header>
  );
}

export default Header;
