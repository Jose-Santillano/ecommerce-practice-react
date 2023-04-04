import React, { useContext } from 'react';

//CSS
import '../styles/components/Success.css';

//Context.
import AppContext from '../context/AppContext';

const Success = () => {

  const { state } = useContext(AppContext);

  const { orders } = state;

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Gracias por tu compra</h2>
        <span>Tu pedido llegará en 3 días a tu dirección:</span>
        <div className="Success-map">
          Google maps
        </div>
      </div>
    </div>
  );
}

export default Success;