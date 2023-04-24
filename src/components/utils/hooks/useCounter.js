import { useState } from "react"


const useCounter = (initial) => {
    
    const [counter, setCounter]= useState(initial)
    
    const sumar = () =>{
        setCounter(counter + 1)
    }

    const restar = () =>{
        setCounter(counter - 1)
    }
    
    const reiniciar = () =>{
        setCounter(0)
    }

    return { counter, sumar, restar, reiniciar }
}

export default useCounter