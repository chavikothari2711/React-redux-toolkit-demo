import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

export const IceCreamView = () =>{
    const [value, setValue] = useState(1)
    const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream)
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of iceCreams: {numOfIceCream}</h2>
            <button onClick={()=> dispatch(ordered(1))}>Order iceCream</button>
            <input type='number' value={value} onChange={(e)=> setValue(e.target.value)} placeholder="Amount to restocked"/>
            <button onClick={()=> {dispatch(restocked(parseInt(value)));setValue(1)}}>Restocked iceCream</button>
        </div>
    )
}