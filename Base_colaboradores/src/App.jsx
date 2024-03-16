import { useState } from "react";
import "./App.css";
import { BaseColaboradores } from "./assets/BaseColaboradores";
import Listado from "./componentes/Listado";
import Formulario from "./componentes/Formulario";
function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('');

  const agregarColaborador = (nuevoColaborador) => {
    if (!nuevoColaborador.id || !nuevoColaborador.nombre || !nuevoColaborador.correo || !nuevoColaborador.edad || !nuevoColaborador.cargo || !nuevoColaborador.telefono) {
      setMensaje('Todos los campos son requeridos');
      setTipoMensaje('danger');
    } else {
      setColaboradores([...colaboradores, nuevoColaborador]);
      setMensaje('Colaborador agregado exitosamente');
      setTipoMensaje('success');
    }
    setTimeout(() => {
      setMensaje('');
    }, 3000);
  };

  return (
    <>
      <div>
        <Formulario agregarColaborador={agregarColaborador} />

        <Listado colaboradores={colaboradores} />
      </div>
    </>
  );
}

export default App;
