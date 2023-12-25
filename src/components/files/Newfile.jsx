import { useState } from "react"

export default function Filepost(props){
 
    return(
        <div className="flex justify-center">
         <div className="border-2 border-gray-500 mt-4 p-2  ">
     

  <img className="w-[300px]" src={props.image}/>
  <p>   {props.title}</p>
  </div>

         </div>
      
    )
}