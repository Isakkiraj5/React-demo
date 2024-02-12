import Button from "./textfeilds/button";
import { useState } from "react";
import { useReducer } from "react";
import { Outlet } from "react-router-dom";
let initialvalue={
    colorcode:"#fff",
}


const reducer=(state,action)=>{
    if(action.type==="red"){
        return{
            colorcode:action.payload
        } 
    }
    else if(action.type==="blue"){
        return {
            colorcode:action.payload
        }
    }
   else if(action.type==="ornage"){
        return {
            colorcode:action.payload
        }
    }
    else if(action.type==="yellow"){
        return {
            colorcode:action.payload
        }
    }
    else{
        return{
            colorcode:"#fff"
        }
    }
  

}

const Statecolor = () => {
    const[state,dispatch]=useReducer(reducer,initialvalue)
    const [red, setRed] = useState();
    const [blue, setBlue] = useState();
    const [green, setGreen] = useState();
    const [yellow, setyellow] = useState();
    const [color, setColor] = useState();
    const clickfunc = (data) => {
        setColor(data)
        if (data === "red") {
            return setRed("#FF0000")
        }
       else if (data === "blue") {
            return setBlue("#0000FF")
        }
       else if (data === "green") {
            return setGreen("#00cc00")
        } else if (data === "yellow") {
            return setyellow("#FFFF00	")
        }
    }
    const clickfunc1 = (data) => {
        
        if (data === "red") {
        dispatch({type:"red",payload:"#FF0000"})
        }
       else if (data === "blue") {
            dispatch({type:"blue",payload:"#0000FF"})
        }
        else if (data === "yellow") {
            dispatch({type:"yellow",payload:"#FFFF00"})
        }

        else if (data==="orange"){
            dispatch({type:"ornage",payload:"#ffb347"})
        }
    }

let colorchange=color==="red"?red:color==="blue"?blue:color==="green"?green:color==="yellow"?yellow:'#fff';
    return (
        <div>
            <Outlet/>
        <div className="row justify-content-center align-items-center mx-0 mt-5  ">
            <div className="col-4 column_bg mx-4 " >
                <div className="background_box" style={{background:`${colorchange}`}}>

                </div>
                <div className="d-flex align-items-center justify-content-between my-2">
                    <Button btncls="btn_red" buttontext="red" click={() => clickfunc("red")} />
                    <Button btncls="btn_blue" buttontext="blue" click={() => clickfunc("blue")} />
                    <Button btncls="btn_green" buttontext="green" click={() => clickfunc("green")} />
                    <Button btncls="btn_yellow" buttontext="yellow" click={() => clickfunc("yellow")} />
                   


                </div>
            </div>
       
       
            <div className="col-4 column_bg"  >
                <div className="background_box" style={{background:`${state.colorcode}`}}>

                </div>
                <div className="d-flex align-items-center justify-content-between my-2">
                    <Button btncls="btn_red" buttontext="red" click={() => clickfunc1("red")} />
                    <Button btncls="btn_blue" buttontext="blue" click={() => clickfunc1("blue")} />
                    <Button btncls="btn_yellow" buttontext="yellow" click={() => clickfunc1("yellow")} />
                    <Button btncls="btn_orange" buttontext="orange" click={() => clickfunc1("orange")} />


                </div>
            </div>
        </div>
        </div>
        
    )

}


export default Statecolor