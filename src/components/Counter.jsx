import "./Counter.css";
import { useState } from "react";

// export function Counter(props) {
//     const counterState = useState(props.initialValue);
//     const counter = counterState[0];
//     const setCounter = counterState[1];

//     const handleDecrease = () => {
//         setCounter((state) => --state);
//     }

//     const handleIncrease = () => {
//         setCounter((state) => ++state);
//     }

//     return (
//         <div>
//             <button className="counter" onClick={handleDecrease}>-</button>
//             <span>{counter}</span>
//             <button className="counter" onClick={handleIncrease}>+</button>
//         </div>
//     );
// }


// import "./Counter.css"
// import { useState } from "react";

export function Counter(props) {
    // 1. element niz vrijednost, 2. element funkcija
    const counterState = useState(props.initialValue);
    const counter = counterState[0];
    const setCounter = counterState[1];

    //umjetni event objekti, virtual dom, nema pravih eventova
    // const handleClick = () => {
    //setCounter(counter + 1);
    //daj mi funkciju koju ću pozvati s trenutnom vrijednosti svog statea
    //     setCounter((state) => state + 1);
    // }

    const increment = () => {
        setCounter((state) => state + 1);
    }

    const decrement = () => {
        setCounter((state) => state - 1);
    }

    return (
        <>
            <button className="counter" onClick={decrement}>-</button>
            <span>{counter}</span>
            <button className="counter" onClick={increment}>+</button>
        </>
    )
}