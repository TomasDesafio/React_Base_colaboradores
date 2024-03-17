import React from 'react'
import { useState } from 'react'

const Formulario = ({agregarColaborador}) => {
    const [id, setID] = useState("");
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [cargo, setCargo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [edad, setEdad] = useState("");

      // Función al enviar el formulario
    const enviarFormulario = (e) => {
    e.preventDefault();
    const nuevoColaborador = {id,nombre,correo, edad, cargo, telefono};
     agregarColaborador(nuevoColaborador);
    setID('');
    setNombre('');
    setCorreo('');
    setCargo('');
    setTelefono('');
    setEdad('');


    };
      

  
    return (
    <div>
        <h2>Agregar Colaborador</h2>
        <form onSubmit={enviarFormulario}>
        <div className="form-group">
          <label>Id:</label>
          <input type="text" value={id} onChange={(e) => setID(e.target.value)} className="form-control" />
        </div>
        <div className="form-group">
          <label>Nombre:</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className="form-control" />
        </div>
        <div className="form-group">
          <label>Correo:</label>
          <input type="text" value={correo} onChange={(e) => setCorreo(e.target.value)} className="form-control" />
        </div>
        <div className="form-group">
          <label>Edad:</label>
          <input type="text" value={edad} onChange={(e) => setEdad(e.target.value)} className="form-control" />
        </div>
        <div className="form-group">
          <label>Cargo:</label>
          <input type="text" value={cargo} onChange={(e) => setCargo(e.target.value)} className="form-control" />
        </div>
        <div className="form-group">
          <label>Telefono:</label>
          <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} className="form-control" />
        </div>
        <br />
        <button type="submit" className='btn btn-primary' > Agregar colaborador </button>
        </form>


      
    </div>
  );
};

export default Formulario;