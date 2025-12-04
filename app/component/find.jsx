import Image from "next/image"
export default function Find(){
    return(
        <div id="container4">
            <div>
            <h1 id="h11">
                Find Your News With Us
            </h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Est dolorem eum eaque maxime cumque </p>
                <p>impedit doloribus soluta sapiente,
                 molestiae nam perferendis minus consectetur inventore facere,</p> 
                <p>dolores porro laboriosam itaque eligendi.</p>
                <p> Dolorum praesentium autem ipsum hic magni sunt illo optio expedita?
            </p>
            <buttom id="buttom">Get Now</buttom>
            </div>
            <div><Image src="/images/logo.jpg" width={30} height={30} id="ph21"></Image></div>
        </div>
    )
};