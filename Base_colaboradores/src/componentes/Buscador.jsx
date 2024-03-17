import React from 'react'
import { useState } from "react";

export default function Buscador({buscar}) {
    const [valor, setValor] = useState(""); 
    
    
    const  handleChange = (e) => {
        setValor(e.target.value)
        buscar(e.target.value)
    
        
    
        };
    return (
    <div>
        <input type="text" value={valor} onChange= {handleChange} className="form-control" />
    
    </div>
  )
}
