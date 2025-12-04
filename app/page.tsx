import Image from "next/image";
import Play from "./play/page";
import Hero from "./component/hero";
import Body from "./component/body";
import Opinion from "./component/opinion";
import Ui from "./component/ui";
import Find from "./component/find"
import Foot from "./component/foot";
import Window from "./component/window";
import Navbar from "./components/Navbar";
import {CiSearch} from "react-icons/ci";
import {FiAlignJustify} from "react-icons/fi";
import { RxDividerVertical} from "react-icons/rx";

import { ProductProvider } from "./component/ProductContext";

export default function Home() {
  return (
    <div>
      <Navbar/>
      
      <FiAlignJustify/>
      <CiSearch/>
      <RxDividerVertical/>
      <ProductProvider>
        <Body/>
        <Hero/>
        <Find/>
        <Opinion/>
        <Ui/>
        <Foot/>
      </ProductProvider>
    </div>
  );
}
      
    


