'use client';
import Image from "next/image";
import { useProduct } from "./ProductContext";
export default function Body() {
  return (
    <div id="container">
       <div>
      <img 
        src="https://mediacenter.tqniait.com/wp-content/uploads/2020/09/%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%88%D9%8A%D8%A8-%D8%B3%D8%A7%D9%8A%D8%AA-%D9%83%D8%A7%D9%85%D9%84-%D9%88%D8%AC%D8%A7%D9%87%D8%B2-%D9%84%D9%84%D8%B9%D9%85%D9%84.gif"
        width={500}
        height={200}
        alt="photo"
        id="ph"
        style={{  objectFit: 'cover'}}
      />
      <div id="cover">

      </div>
      <h1 id="news">News</h1>
    </div>
    
    
    </div>
   ); 
  }
