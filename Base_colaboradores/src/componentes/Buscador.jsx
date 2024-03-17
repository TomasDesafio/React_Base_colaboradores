import React, { useState } from 'react';

function Buscador({ colaboradores, ListadoComponente }) { // Recibe ListadoComponente como prop
  const [busqueda, setBusqueda] = useState('');
  
  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  const resultados = colaboradores.filter((colaborador) =>
    colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    colaborador.correo.toLowerCase().includes(busqueda.toLowerCase()) ||
    colaborador.edad.toString().toLowerCase().includes(busqueda.toLowerCase()) ||
    colaborador.cargo.toLowerCase().includes(busqueda.toLowerCase()) ||
    colaborador.telefono.includes(busqueda)
  );

  return (
    <div>
      <h2>Buscar Colaboradores</h2>
      <input
        type="text"
        value={busqueda}
        onChange={handleChange}
        className="form-control mb-3"
        placeholder="Buscar..."
      />
      <ListadoComponente colaboradores={resultados.length > 0 ? resultados : colaboradores} /> {/* Utiliza ListadoComponente */}
    </div>
  );
}

export default Buscador;
