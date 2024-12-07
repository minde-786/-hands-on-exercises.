// import Hero from "@/component/hero";
import Link from "next/link";
import React from "react"
import Image from "next/image";
const Home= () => {
    return(
     <div className=" md:grid grid-cols-2 gap-1  md:h-screen bg-slate-300"> 
        
         <div className=" bg-black text-white rounded mt-2 md:mt-3 mx-2 md:mx-3 mb- md:mb-3  border-8 border-green-700">
<h1 className=" mx-3 py-3 text-center md:text-left lg:text-center  font-bold  md:text-5xl">Explore_<br></br>the Beauty of Gilgit Baltistan
</h1>
<p className="text-pretty text-left py-6 mx-3 text-xs md:text-xl">Gilgit-Baltistan&#39;s&#39; breathtaking landscape. adorned with majestic mountains, serene lakes,
   and lush green valleys, is a testament to nature&#39;s&#39; unparalleled beauty.</p>
<Link href="/.nn"> <button className="bg-lime-600 rounded-3xl py-1 md:py-2 lg:py-5 mt- md:mt-16 lg:mt-20 hover:bg-lime-700 px-2 md:px-14 mx-16 md:mx-24 lg:mx-36  mb-2 text-center text-sm md:text-xl ">Explore GB</button></Link>

        </div> 
        <div className=" bg-slate-300  rounded mb-3  md:mx-2 mt-3  border-8 border-green-700  ">
         <Image
  src="/a.png"
  alt="skardu baltistan" width={1000} height={100} 
className="h-[400px] md:h-[600px] md:w-[2500]"
  /></div>  



       
        
      </div>  
      
     
      )
}



export default Home;