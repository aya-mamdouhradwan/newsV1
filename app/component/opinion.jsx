import Image from "next/image";  
import { VscArrowLeft } from "react-icons/vsc";
import { VscArrowRight } from "react-icons/vsc";
import { FaStar } from "react-icons/fa";
export default function Opinion(){
    return(
        <div id="container2">
            <img 
        src="https://mediacenter.tqniait.com/wp-content/uploads/2020/09/%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%88%D9%8A%D8%A8-%D8%B3%D8%A7%D9%8A%D8%AA-%D9%83%D8%A7%D9%85%D9%84-%D9%88%D8%AC%D8%A7%D9%87%D8%B2-%D9%84%D9%84%D8%B9%D9%85%D9%84.gif"
        width={500}
        height={200}
        alt="photo"
        id="logo5"
        style={{  objectFit: 'cover'}}
      />
      <div>
      <p id="p1">Watchers Feedback</p>
      <div id="pho">
      <img src="https://i.pravatar.cc/150?img=1"id="account" width={50} height={50} alt="account" style={{ borderRadius: '50%', objectFit: 'cover' }}></img>
      <h3> Washing Sunder</h3>
      <h5>Watcher of News</h5>
      
        </div>
        <p id="p2">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Ut accusamus quisquam aspernatur libero voluptas! Deleniti facere dolores pariatur culpa laborum.
      </p>
      <div id="icons">
      
      <FaStar id="face"/>
      <FaStar  id="face"/>
      <FaStar  id="face"/>
      <FaStar  id="face"/>
      <FaStar  id="face"/>
      
      </div>
      </div>
      </div>
    )
};