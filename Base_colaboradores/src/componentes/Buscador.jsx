import React from 'react'

export default function Buscador({colaboradores,parametros}) {
    const [valor, setValor] = useState(""); 
    const  handleChange = (e) => {
        setValor(e.target.value)
    
        
    
        };
    return (
    <div>
        <input type="text" value={valor} onChange= {handleChange} className="form-control" />
    
    </div>
  )
}
