import { useReducer } from "react";
import Inputfield from "../textfeilds/textfields";
import Heading from "../parragraph/heading";

let initialvalue={
    name1:"",
    email:"",
    passwaord:"",
}

const reducer=(state,action)=>{
    if(action.type==='name1'){
        return{
            name1:action.payload
        }
    }
   else if(action.type==='email'){
        return{
            email:action.payload
        }
    }
    else if(action.type==='password'){
        return{
            password:action.payload
        }
    }
    else{
        return null;
    }
}

const  Userfunction=()=>{
    const onchangedata=(e,data)=>{
        if(data==='name1'){
            dispatch({type:'name1',payload:e.target.value})
        }
        else if(data==='email'){
            dispatch({type:'email',payload:e.target.value})
        }
        else if (data==='password')
        {
            dispatch({type:'password',payload:e.target.value})
        }
    }

    const[state,dispatch]=useReducer(reducer,initialvalue)
    return(
       <div>
        <div className="row justify-content-center mx-0 mt-5">
        <div className="col-5 p-5 column_bg">
        <Heading class="heading" heading="REDUCER"/>
        <div>
        <Inputfield inputclass="inputdata mt-4" placeholder="Enter your Name" handleclick={(e)=>onchangedata(e,'name1')} />
       
        <Heading heading={state.name1}/>

        </div>
        <div>
        <Inputfield inputclass="inputdata mt-4" placeholder="Enter your Email" handleclick={(e)=>onchangedata(e,'email')} />
        <Heading heading={state.email}/>
        </div>
        <div>
        <Inputfield inputclass="inputdata mt-4" placeholder="Enter your Password" handleclick={(e)=>onchangedata(e,'password')} />
        <Heading heading={state.password}/>
        </div>

       </div>
       </div>
       </div>
    );
}
export default Userfunction