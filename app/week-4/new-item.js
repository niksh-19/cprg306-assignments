"use client"

import { useState } from "react";


export default function NewItem(){

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity <= 20) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity >= 1) {
            setQuantity(quantity - 1);
        }
    }

    let btnDisabled = false;
        if (quantity<=1){
            btnDisabled = true;
        }

    let btn2Disabled = false;
        if (quantity >= 20){
            btn2Disabled = true;
        }

    return(
        <div className="flex flex-col items-center space-y-4 mt-4">
            <p className="font-semibold text-xl">Current Quantity: {quantity}</p>
            <div className="flex space-x-4">
             <button className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50" onClick={decrement} disabled={btnDisabled}>-</button>
             <button className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50" onClick={increment} disabled={btn2Disabled}>+</button>
            </div>
        </div>
    );

}