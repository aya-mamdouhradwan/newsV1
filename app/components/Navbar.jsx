import Image from "next/image";
import {CiSearch} from "react-icons/ci";
import {FiAlignJustify} from "react-icons/fi";
import { RxDividerVertical} from "react-icons/rx";
export default function Navbar() {
  return (
    <div id="navbar">
      <Image src="/images/logo.jpg" id="logo" width={80} height={80} alt="logo"></Image>
      <div id="menue">
        <a href="/" className="text-black   px-6 py-2 rounded-md transition duration-200">
         Home
        </a>
        <a href="/play" className="text-black  px-6 py-2 rounded-md transition duration-200">
          pages
        </a>
        <a href="/about" className="text-black  px-6 py-2 rounded-md transition duration-200">
          Servives
        </a>
        <a href="/contact" className="text-black  px-6 py-2 rounded-md transition duration-200">
          Blog
        </a>
        <a href="/settings" className="text-black  px-6 py-2 rounded-md transition duration-200">
        Shops
        </a>
        <a href="/settings" className="text-black  px-6 py-2 rounded-md transition duration-200">
          Setting
        </a>
        <a href="/settings" className="text-black  px-6 py-2 rounded-md transition duration-200">
         Another News
        </a>
        
      </div>
      <FiAlignJustify id="feather-icon" size={30} style={{ cursor: 'pointer', color: 'white' }}/>
      <CiSearch id="search-icon" size={30} style={{ cursor: 'pointer', color: 'white' }}/>
      <RxDividerVertical id="slach" size={30} style={{ cursor: 'pointer', color: 'white' }}/>
    
    </div>
  );
}
