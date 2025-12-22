
import Hero from "./component/hero";
import Body from "./component/body";
import Opinion from "./component/opinion";
import Subscribe from "./component/subscribe";
import Find from "./component/find"
import Foot from "./component/foot";

export default function Home() {
  return (
    <div>
      
      <div id="home">
        <Hero/>
      </div>
      <div id="popular">
        <Body />
      </div>
      <div id="find">
        <Find />
      </div>

      <div id="feedback">
        <Opinion />
      </div>

      <div id="subscribe">
        <Subscribe />
      </div>
      <div id="foot">
        <Foot/>
      </div>
      
    </div>
  );
}
