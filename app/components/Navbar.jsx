import Image from "next/image";
import {CiSearch} from "react-icons/ci";
import {FiAlignJustify} from "react-icons/fi";
import { RxDividerVertical} from "react-icons/rx";
export default function Navbar() {
  return (
    <div id="navbar">
      <Image src="/images/logo.jpg" id="logo" width={80} height={80} alt="logo"></Image>
      <div id="menue">
        <a href="#home" className="text-black   px-6 py-2 rounded-md transition duration-200">
         Home
        </a>
        <a href="#popular" className="text-black  px-6 py-2 rounded-md transition duration-200">
          OurPobularNews
        </a>
        <a href="#find" className="text-black  px-6 py-2 rounded-md transition duration-200">
          FindNews
        </a>
        <a href="#feedback" className="text-black  px-6 py-2 rounded-md transition duration-200">
          Feedback
        </a>
        <a href="#subscribe" className="text-black  px-6 py-2 rounded-md transition duration-200">
        Subscribe
        </a>
        
      </div>
      <FiAlignJustify id="feather-icon" size={30} style={{ cursor: 'pointer', color: 'white' }}/>
      <CiSearch id="search-icon" size={30} style={{ cursor: 'pointer', color: 'white' }}/>
      <RxDividerVertical id="slach" size={30} style={{ cursor: 'pointer', color: 'white' }}/>
    
    </div>
  );
}
