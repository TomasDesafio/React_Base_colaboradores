import { useState } from "react";
import "./App.css";
import { BaseColaboradores } from "./assets/BaseColaboradores";
import Listado from "./componentes/Listado";
import Formulario from "./componentes/Formulario";
import Alert from "./componentes/Alert";
import Buscador from "./componentes/Buscador";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('');

  const agregarColaborador = (nuevoColaborador) => {
    if (nuevoColaborador.id=="" || nuevoColaborador.nombre=="" || nuevoColaborador.correo=="" || nuevoColaborador.edad=="" || nuevoColaborador.cargo=="" || nuevoColaborador.telefono=="") {
      setMensaje('Todos los campos son requeridos');
      setTipoMensaje('danger');
    } else {
      setColaboradores([...colaboradores, nuevoColaborador]);
      setMensaje('Colaborador agregado exitosamente');
      setTipoMensaje('success');
      console.log(colaboradores)
    }
    setTimeout(() => {
      setMensaje('');
    }, 3000);
  };

  return (
    <>
      <div>
      <Buscador colaboradores={colaboradores} parametros={parametros} />  
      {mensaje && <Alert mensaje={mensaje} tipo={tipoMensaje} />}
        <Formulario agregarColaborador={agregarColaborador} />
        

        <Listado colaboradores={colaboradores} />
      </div>
    </>
  );
}

export default App;
