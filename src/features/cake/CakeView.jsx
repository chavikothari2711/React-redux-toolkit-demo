import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

export const CakeView = () =>{
    const [value,setValue] = useState(1)
    const numOfCakes = useSelector((state)=> state.cake.numOfCakes)
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of cakes: {numOfCakes}</h2>
            <button onClick ={() => dispatch(ordered(1))}>Order cake</button>
            <input type='number' value={value} onChange={(e)=> setValue(e.target.value)} placeholder="Amount to restocked"/>
            <button onClick = {() => {dispatch(restocked(parseInt(value)));setValue(1)}}>Restocked Cake</button>
        </div>
    )
}