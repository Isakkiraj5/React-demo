import {  useContext } from "react";
import { newcontext } from "./contexthooks/context";
const Colordata=()=>{
    const {colorred}=useContext(newcontext)
    const {colorblue}=useContext(newcontext)
    const {colorgreen}=useContext(newcontext)
    const {colorYellow}=useContext(newcontext)
    const {colorGrey}=useContext(newcontext)
    const {colorFancy}=useContext(newcontext)
   console.log(colorred)
  return(
    <div className="row mx-0">
        <div className="background">red</div>
        <div className="flexdata">
    {
        colorred.map((item)=>{
            return(
                <div className="colorbox mx-1" style={{background:`${item}`}}>
                    {item}
                </div>
            )
            
        })
        
    }
    </div>
    <div className="row mx-0">
    <div className="background">Blue</div>
    <div className="flexdata">
      {
        colorblue.map((item)=>{
            return(
                <div className="colorbox mx-1" style={{background:`${item}`}}>
                   {item} 
                </div>
            )
            
        })
        
    }
    </div>
    </div>
    <div className="row mx-0 ">
    <div className="background">Green</div>
    <div className="flexdata">
      {
        colorgreen.map((item)=>{
            return(
                <div className="colorbox mx-1" style={{background:`${item}`}}>
                   {item} 
                </div>
            )
            
        })
        
    }
    </div>
    </div>
    <div className="row mx-0 ">
    <div className="background">Yellow</div>
    <div className="flexdata">
      {
        colorYellow.map((item)=>{
            return(
                <div className="colorbox mx-1" style={{background:`${item}`}}>
                   {item} 
                </div>
            )
            
        })
        
    }
    </div>
    </div>
    <div className="row mx-0 ">
    <div className="background">Grey</div>
    <div className="flexdata">
      {
        colorGrey.map((item)=>{
            return(
                <div className="colorbox mx-1" style={{background:`${item}`}}>
                   {item} 
                </div>
            )
            
        })
        
    }
    </div>
    </div>
    <div className="row mx-0 ">
    <div className="background">Fancy</div>
    <div className="flexdata">
      {
        colorFancy.map((item)=>{
            return(
                <div className="colorbox mx-1" style={{background:`${item}`}}>
                   {item} 
                </div>
            )
            
        })
        
    }
    </div>
    </div>
    </div>
    )
    
   
  
    
}
export default Colordata