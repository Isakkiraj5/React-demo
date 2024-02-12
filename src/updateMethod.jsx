import { useEffect } from "react";
import Button from "./textfeilds/button";
import Heading from "./textfeilds/heading";
import { useState } from "react";

const Update=()=>{
    const[count,setCount]=useState(0);
    const[multicount,setMulticount]=useState();
    useEffect(()=>{
        setMulticount(count*2)
    },[count])
    const increase=()=>{
        setCount(count+1)
    }
    return(
    <div>
           <div className="row  mx-0 mt-5 column_bg">
        
            <Heading heading="COUNT"/>
            <Heading heading={count}/>
            <Heading heading={multicount}/>
            <Button btncls="Summit_btn mt-5" buttontext="Increment" click={increase}/>

       
            </div>
    </div>
);
}
export default Update