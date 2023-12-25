import { useRef, useState } from "react"
import Filepost from "../files/Newfile"
export default function Forms(){
    const [isOpen,setISopen]=useState(false)
    
    const[title,settile]=useState('')
    const [image,setimage]=useState(null)
    //imge blur
    //ime refence
    const imagRefence=useRef()
    const[buler,setbluer]=useState(false)
    //state for storin data 
    const [post,setpost]=useState([])
    const handleopn=()=>{
        setISopen(true)
         document.body.style.background='#EAB19C'
        document.body.style.opacity=0.9;
     
    }
    const handlclose=()=>{
        setISopen(false)
       // document.body.style.backgroundColor='white'

    }
    const handlePOST=(event)=>{
         document.body.style.backgroundColor='white'
         document.body.style.opacity=0.9;
      event.preventDefault()
      const  newpost={title,image}
     //   setpost()
     console.log(newpost)
     if(title !="" && image != null){
setpost([newpost,...post])
settile(' ')
imagRefence.current.value=null
setISopen(false)
     }
    }
    // const Bluerhandle=()=>{
    //     setbluer(true)
    // }
    return(<div  className=" ">
            <div>
            
                <button onClick={handleopn} className="fixed  right-4 rounded-full 
               bottom-6 pb-4 text-5xl h-[60px] w-[60px] bg-blue-500 text-white px-2">+</button>
           <div  className={` bg-green-500 [#DC4005] p-10 mx-[30%] mt-2 rounded absolute  ${isOpen === true ? "block" :"hidden"}`}>
           <i  onClick={handlclose} class="fa-solid fa-x text-3xl
            text-red-600 ml-[385px] mt-0 ab"></i>
                {/* <i class="fa-solid fa-x"></i> */}
                {/* <form className="">
                    <input value={title} onChange={(event)=>{
settile(event.target.value)
                    }} type="text"   className="w-[290px] h-[50px] border-0" placeholder="enter title"/><br></br>
                    <input onChange={(e)=>{setimage(e.target.files[0]);}} type="file" placeholder="" className="mt-5 file:bg-yellow-200 
                    file:border-0 file:p-2 file:rounded"/>
                    <button onClick={handlePOST}  className="bg-white hover:bg-blue-200 mt-10 text-3xl px-8 rounded-md py-2">Post</button>
 
                    {/* <button  className={` bg-white hover:bg-blue-200 mt-10 ml-5 text-3xl px-8 rounded-md py-2`}>close</button>  */}
                    
                                  {/* </form> */} 
                                  <form>
       <input value={title} onChange={(event) =>{settile(event.target.value);}}className='h-[50px] w-[300px] ' type="text"  placeholder='Enter title'/>
         <br/>
    <input ref={imagRefence}  onChange={(e)=>{setimage(e.target.files[0]);}}
    className='mt-5 file:bg-purple-500 file:border-0 file:p-3 file:rounded' type="file"/>
    <br/>
     <button onClick={handlePOST} className='bg-white mt-10 px-10 text-3xl py-2 rounded-xl hover:bg-purple-600 '>Post</button>
    </form>
                </div>

                
            </div>
            {
        post.map((item) =>{
            return isOpen ===true? "":  <Filepost 
    title={item.title}
    image = {URL.createObjectURL(item.image)} />
        }
        )
    }
     
            </div>
)
    
}