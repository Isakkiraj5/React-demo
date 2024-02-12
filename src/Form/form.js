import Button from "../button/button";
import Inputfield from "../textfeilds/textfields";
import Heading from "../parragraph/heading";
import { useState } from "react";

const Form = () => {
    const[name1,setName1]=useState();
    const[mail,setMail]=useState();
    const[num,setNum]=useState();
    const singlefunction=(e,data)=>{
      
        data === name1 ? setName1(e.target.value) : data === mail ? setMail(e.target.value) : data === num && setNum(e.target.value);
    
    }

   
   
    // const handleclickfun1=(e)=>{
    //     setName1(e.target.value)
    // }
    // const handleclickfun2=(e)=>{
    //     setMail(e.target.value)
    // }
    // const handleclickfun3=(e)=>{
    //     setNum(e.target.value)
    // }

    return (
        <div>
            <div className="row justify-content-center mx-0 mt-5">
                <div className="col-5 p-5 column_bg">
                    <div className="d-flex align-items-center justify-content-center">
                        <Heading heading="FORM" />
                    </div>
                    <div>
                        <Inputfield inputclass="inputdata mt-4" handleclick={(e)=>singlefunction(e,name1)} placeholder="Enter your name" />
                    </div>
                    <Heading heading={name1} />
                    <div>
                        <Inputfield inputclass="inputdata mt-4" handleclick={(e)=>singlefunction(e,mail)} placeholder="Enter your Mail" />
                    </div>
                    <Heading heading={mail} />
                    <div>
                        <Inputfield inputclass="inputdata mt-4" handleclick={(e)=>singlefunction(e,mail)} placeholder="Enter your number" />
                    </div>
                    <Heading heading={num} />
                    <div>
                        <Button  btncls="Summit_btn mt-5" buttontext="Summit" />
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form