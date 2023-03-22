import React from "react";
import { FilterValuesType } from "../App";

type PropsType = {
    name: FilterValuesType
    callBack: () => void
}


export const Button = (props: PropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}