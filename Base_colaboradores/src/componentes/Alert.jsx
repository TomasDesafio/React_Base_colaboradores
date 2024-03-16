import React from 'react';

const Alert = ({ mensaje, tipo }) => {
  return (
    <div className={`alert ${tipo}`} role="alert">
      {mensaje}
    </div>
  );
};

export default Alert;