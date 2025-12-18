import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
export default function Body(){
    return(

         
        <div  id="hero" >
         <div id="line">
            <h1 id="line1">Our Popular News</h1>
             </div>
         <div id="new1">
            <Image src="/images/photo15.jpg" alt="photo1" width={300} height={150}/>
            
            <h3>23 Nov, 2025</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, fugiat!
            </p>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur excepturi ratione impedit debitis animi, quos doloribus reiciendis 
               iusto sequi amet error. Vero vel cupiditate obcaecati possimus, quae aliquid aperiam nostrum.
            </p>
         </div>
         <div id="new2">
            <Image src="/images/photo16.jpg" alt="photo2" width={300} height={300}/>
            <h3>23 Nov, 2025</h3>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing 
                elit. Ratione, voluptate.
            </p>
            <p>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eum explicabo minus voluptate ducimus voluptates beatae obcaecati qui ad unde, aliquam praesentium expedita maxime facilis, cumque ex alias, ea earum ut!
            </p>
         </div>
         <div id="new3">
         <Image src="/images/photo17.jpg" alt="photo3" width={300} height={300}/>
         <h3>23 Nov, 2025</h3>
         <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, recusandae.
         </p>
         <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, officia. Fugit illum iure quisquam, labore expedita corrupti earum officia
             quae aspernatur deleniti debitis veritatis pariatur. Asperiores officiis sequi facilis. Ratione.
         </p>
         </div>
         <div id="new4">
         <Image src="/images/photo18.jpg" alt="photo4" width={300} height={300}/>
         <h3>23 Nov, 2025</h3>
         <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, blanditiis!
         </p>
         
         <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ab dolorum vel ipsam enim, quod officiis voluptate nisi perspiciatis
             qui cumque accusamus. Atque, ut beatae. Aspernatur odit maxime culpa voluptate?
         </p>
         </div>
         <div id="new5">
         <Image src="/images/photo12.jpg" alt="photo5" width={300} height={300}/>
         <h3>23 Nov, 2025</h3>
         <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, fuga.
         </p>
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui minima adipisci, iste libero dolore a, pariatur quam neque quos reprehenderit 
            omnis accusamus tenetur maiores vero aspernatur voluptatem, aperiam ullam quibusdam.
         </p>
         </div>
         <div id="new6">
         <Image src="/images/photo14.jpg" alt="photo6" width={300} height={300}/>
         <h3>23 Nov, 2025</h3>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, magni?
            </p>
            <p>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut deleniti, magnam at neque dolorem sint nobis sunt harum
                dolore? Aut nostrum optio, facere molestias neque voluptate non ipsum velit asperiores.
            </p>
         </div>
         <button>Read More News</button>
         
       </div>
       
       
    )

    
}