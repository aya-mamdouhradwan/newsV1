import Image from "next/image"; 
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
export default function Foot(){
    return(
        <div id="footer">
            <div>
            <h2> @ For More, Visit our Website</h2>
            
            </div>
            <div id="links">
                <div id="footimg">
                    <Image src="/images/logo.jpg" width={100} height={30}></Image>
                </div>
                <div id="l1">
                    <h1>Home</h1>
                    <a>Home</a>
                    <a>About us</a>
                    <a>Our Process</a>
                    <a>Services</a>
                    <a></a>
                </div>
                <div id="l2">
                    <h1>Community</h1>
                    <a>Team Plans</a>
                    <a>Refer a Friend</a>
                    <a>Get Cardes</a>
                </div>
                <div id="l3">
                    <h1>Stay Connected</h1>
                    <FaFacebook id="icon"/>
                    <FaFacebookMessenger id="icon"/>
                    <FaTwitterSquare id="icon"/>
                    <IoLogoWhatsapp id="icon"/>
                </div>
            </div>
            
        </div>
    )
};