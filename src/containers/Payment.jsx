import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

//Botón paypal
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

//CSS.
import '../styles/components/Payment.css';

//Context.
import AppContext from '../context/AppContext';

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);

  const { cart, buyer } = state;

  const navigate = useNavigate();

  const handlePaymentSuccess = (data) => {
    console.log(data);
    const newOrder = {
      buyer,
      product: cart,
      payment: data
    }
    addNewOrder(newOrder);
    navigate('/checkout/success');
  }
  
  const initialOptions = {
    "client-id": "test",
    currency: "USD",
    intent: "capture",
  }
  
  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {
          cart.map(item => (
            <div className="Payment-item" key={item.title}>
              <div className="Payment-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
            </div>
          )) 
        }
        <div className="Payment-button">
          <PayPalScriptProvider
            options={initialOptions}
          >
            <PayPalButtons
              style={{ layout: "vertical" }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: handleSumTotal(),
                      },
                    },
                  ],
                })
              }}
              onCancel={data => console.log(data)}
              onApprove={data => handlePaymentSuccess(data)}
              onError={data => console.log(data)}
            />
          </PayPalScriptProvider>
        </div>
      </div>
      <div />
    </div>
  )
}

export default Payment;