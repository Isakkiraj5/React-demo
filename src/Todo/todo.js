import Button from "../button/button";
import Inputfield from "../textfeilds/textfields";
import { useState } from "react";
import Heading from "../parragraph/heading";



const Todo=()=>{
    const [input, setInput] = useState("");
    const [array, setArray] = useState([]);
    
    const chnagefunc = (e) => {
      setInput(e.target.value);
    }
    
    const clickfunction = () => {
        if (input.trim() !== "") {
            setArray((prev) => {
                return [...prev, input];
            });
            setInput(""); 
        }
    };
    return (
        <div>
            <div className="row justify-content-center mx-0  column_bg">
                <div className="col-6 p-5 ">
                    <div className="d-flex align-items-center justify-content-center">
                        <Heading heading="TO DO" />
                    </div>
                    <div>
                        <Inputfield inputclass="inputdata mt-4" value={input} handleclick={chnagefunc} placeholder="Enter the To Do List" />
                    </div>
                    <div>
                        <Button click={clickfunction} btncls="Summit_btn mt-4 p-2" buttontext="ADD" />
                {
                    array && array.length>0 ?(
                        <div className="col-6 p-5 ">
                        {
                                 array && array.length > 0 && array.map((item,index) => {
                                    return ( 

                                         <li>{item}</li>
                                     );
         })}
                         </div>
                    ):<Heading class="heading" heading="Please Enter Todo data" />
                }        
                      
                    </div>
                </div>
             
            </div>
        </div>
    );
}

export default Todo