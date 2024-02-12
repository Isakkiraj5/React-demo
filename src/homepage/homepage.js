import Button from "../button/button";
import Inputfield from "../textfeilds/textfields";
import Heading from "../parragraph/heading";
import { useState } from "react";

const Loginform=()=>{
    const [password,setPassword]=useState("");
    const [count,setCount]=useState("100");
const handleclickfun=(e)=>{
console.log(e.target.value)
}

const handleclickfun1=(e)=>{
    console.log(e.target.value)
    setPassword(e.target.value)
    }

    const clickfunc=()=>{
        alert("button click")
    }

    const clickfunc11=()=>{
        setCount(count-1)
    }

    return(
        
        <div>
            <div className="row justify-content-center mx-0 mt-5">
            <div className="col-4">
            <div className="d-flex justify-content-center bg-primary division" >
           {count}
           </div>
           <div>
           <Button click={clickfunc11} btncls="Summit_btn mt-5" buttontext="decrement"/>
           </div>
           </div>
            <div className="col-4 p-5 column_bg">
            <div className="d-flex align-items-center justify-content-center">
            <Heading heading="LOGIN FORM"/> 
            </div>
            <div>
            <Inputfield className="inputdata mt-4" handleclick={handleclickfun} placeholder="Enter your Mail"/>
            </div>
            <div>
            <Inputfield className="inputdata mt-4" handleclick={handleclickfun1} placeholder="Enter your Password"/>
            </div>
            <div>
            <Button click={clickfunc} btncls="Summit_btn mt-5" buttontext="Summit"/>
            <Heading heading={password}/> 
            </div>
        </div>
        </div>
        </div>
    );
}


export default Loginform