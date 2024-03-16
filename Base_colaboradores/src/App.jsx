import { useState } from 'react'
import './App.css'
import { BaseColaboradores } from './assets/BaseColaboradores'
import Listado from './componentes/Listado'
import Formulario from './componentes/Formulario'
function App() {
  
  const [colaboradores,setColaboradores]=useState(BaseColaboradores)
  console.log (colaboradores) 

  return (
    <>
    
      <div>
        <Listado colaboradores={colaboradores}  />
        <Formulario/>
      </div>
      
    </>
  )
}

export default App
