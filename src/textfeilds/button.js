const Button=( props ) =>{
    return(
        <div>
            <button className={props.btncls} onClick={props.click}>{props.buttontext}</button>
        </div>
    )
}

export default Button