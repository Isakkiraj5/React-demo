import Button from "../button/button";
import Heading from "../parragraph/heading";
import { useReducer } from "react";
import Inputfield from "../textfeilds/textfields";

// let initialdata={
//     name1:"",
//     email:"",
//     password:""
// }
let initialvalue=10;
const reducer=(state,action)=>{
    if(action.type==="increment"){
        return action.payload
    }
    if(action.type==="decrement"){
        return action.payload
    }
}


const Reducer=()=>{
    const[state,dispatch]=useReducer(reducer,initialvalue)
    const incrementfunction=()=>{
        dispatch({type:"increment",payload:state+1})
    }
    const decrementfunction=()=>{
        dispatch({type:"decrement",payload:state-1})
    }
    return (
        <div>
            <div className="row justify-content-center mx-0  column_bg">
                <div className="col-6 p-5 ">
                    <div className="d-flex align-items-center justify-content-center">
                        <Heading heading="Counter App" />
                    </div>
                    <div>
                        <Heading class="heading" heading={state} />
                    </div>
                    <div>
                        <Button click={incrementfunction} btncls="Summit_btn mt-4 p-2" buttontext="INCREMENT" />
                        <Button click={decrementfunction} btncls="Summit_btn mt-4 p-2" buttontext="DECREMENT" />     
                      
                    </div>
                </div>
                <div className="col-6 p-5">
                <div>
                        <Inputfield inputclass="inputdata mt-4"  handleclick={(e)=>{singlefunction(e,name1)}} placeholder="Enter the To Do List" />
                    </div>
                    <div>
                        <Inputfield inputclass="inputdata mt-4"  handleclick={(e)=>{singlefunction(e,email)}} placeholder="Enter the To Do List" />
                    </div>
                    <div>
                        <Inputfield inputclass="inputdata mt-4"  handleclick={(e)=>{singlefunction(e,password)}} placeholder="Enter the To Do List" />
                    </div>
                </div>
             
            </div>
        </div>
    );
}
export default Reducer