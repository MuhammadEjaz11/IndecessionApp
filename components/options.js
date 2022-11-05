import React from "react"
import Option from "./option"

const Options = (props)=>{
    return (
        <div>
            <button onClick={props.removeAll}>Remove All</button>
            <h3>Options are here</h3>
            <h3>{props.option.map((option)=>{
                return (
                <p key={option}>{option} <button onClick={(_e)=>{props.removeItem(option)}}>Remove</button></p>
                )})}</h3>
            <Option/>
        </div>
    )
}

export default Options