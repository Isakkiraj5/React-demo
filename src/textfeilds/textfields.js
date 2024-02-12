const Inputfield=(props)=>{
    return(
        <div>
           
            <input className={props.inputclass} placeholder={props.placeholder} value={props.value} onChange={props.handleclick}/>
        </div>
    )
}

export default Inputfield