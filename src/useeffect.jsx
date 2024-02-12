import { useEffect } from "react";
import Button from "./textfeilds/button";
import Heading from "./textfeilds/heading";
import { useState } from "react";

const Mountmethod=()=>{
    const[count,setCount]=useState(0);

useEffect(()=>{
    setCount(count+1)
},[])


    return(
        <div>
        <div className="row  mx-0 mt-5 column_bg">
            <Heading heading="COUNT"/>
            <Heading heading={count}/>
            <Button btncls="Summit_btn mt-5" buttontext="Increment" />

            




            </div>
        </div>
    );
}

export default Mountmethod