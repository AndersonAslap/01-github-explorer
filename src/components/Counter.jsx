import { useState } from "react";

export function Counter() {

    const [counter, setCounter] = useState(0);
    const [isDisable, setIsDisable] = useState(true);

    function handleIncrement() {
        setCounter(counter + 1);
        setIsDisable(false);
    }

    function handleDecrement() {

        if (counter == 1) 
            setIsDisable(true);

        setCounter(counter - 1);
        
    }

    return (
        <div>
            <h2>{counter}</h2>
            
            <button onClick={handleIncrement}>Plus +1</button>
            &nbsp;
            <button onClick={handleDecrement} disabled={isDisable}>Minus -1</button>
        </div>
    );
}