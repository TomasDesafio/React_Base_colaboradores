import React, { useState } from "react";
import "./App.css";
import { BaseColaboradores } from "./assets/BaseColaboradores";
import Listado from "./componentes/Listado";
import Formulario from "./componentes/Formulario";
import Alert from "./componentes/Alert";
import Buscador from "./componentes/Buscador";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    setColaboradores(nuevosColaboradores);
    setMensaje("Colaborador eliminado exitosamente");
    setTipoMensaje("success");
    setTimeout(() => {
      setMensaje("");
    }, 3000);
  };

  const agregarColaborador = (nuevoColaborador) => {
    if (
      nuevoColaborador.id === "" ||
      nuevoColaborador.nombre === "" ||
      nuevoColaborador.correo === "" ||
      nuevoColaborador.edad === "" ||
      nuevoColaborador.cargo === "" ||
      nuevoColaborador.telefono === ""
    ) {
      setMensaje("Todos los campos son requeridos");
      setTipoMensaje("danger");
    } else {
      setColaboradores([...colaboradores, nuevoColaborador]);
      setMensaje("Colaborador agregado exitosamente");
      setTipoMensaje("success");
    }
    setTimeout(() => {
      setMensaje("");
    }, 3000);
  };

  return (
    <div>
      <Buscador colaboradores={colaboradores} ListadoComponente={Listado} />

      {/* Alerta de éxito */}
      {mensaje && tipoMensaje === "success" && (
        <div className="alert alert-success" role="alert">
          {mensaje}
        </div>
      )}

      {/* Alerta de Advertencia */}
      {mensaje && tipoMensaje === "danger" && (
        <div className="alert alert-danger" role="alert">
          {mensaje}
        </div>
      )}
      

      <Formulario
        agregarColaborador={agregarColaborador}
        eliminarColaborador={eliminarColaborador}
      />

    </div>
  );
}

export default App;
