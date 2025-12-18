
import Hero from "./component/hero";
import Body from "./component/body";
import Opinion from "./component/opinion";
import Ui from "./component/ui";
import Find from "./component/find"
import Foot from "./component/foot";
import Navbar from "./components/Navbar";
import {CiSearch} from "react-icons/ci";
import {FiAlignJustify} from "react-icons/fi";
import { RxDividerVertical} from "react-icons/rx";

import { ProductProvider } from "./component/ProductContext";



export default function Home() {
  return (
    <div>
      <div id="home">
        <Body />
      </div>

      <div id="popular">
        <Hero />
      </div>

      <div id="find">
        <Find />
      </div>

      <div id="feedback">
        <Opinion />
      </div>

      <div id="subscribe">
        <Ui />
      </div>

      <div id="footer">
        <Foot />
      </div>
    </div>
  );
}
