import React from 'react';
import { useUserContext } from '../../context/Context';

const Cart = () => {
  const { cart, removeFromCart } = useUserContext(); 

  
  const handleRemove = (productId) => {
    removeFromCart(productId); 
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center p-2 border-2 bg-blue-400">Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="mt-4">
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-4  pb-4">
                <div className="flex items-center">
                  <img src={item.image} alt={item.title} className="h-36 w-36 border-2 m-4 p-3 object-cover mr-4" />
                  <div>
                    <h2 className="text-xl font-semibold ">{item.title}</h2>
                    <p className="text-lg text-gray-500">{item.category}</p>
                    <p className="mt-2 text-2xl font-semibold">
                      ${item.price} x {item.quantity}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 hover:text-red-700 font-bold text-xl"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Cart Summary */}
          <div className="mt-4 border-t pt-4">
            <h2 className="text-2xl font-semibold">Cart Summary</h2>
            <p className="mt-2 font-semibold text-lg">
              Total Items: {cart.reduce((total, item) => total + item.quantity, 0)}
            </p>
            <p className="mt-2 text-xl font-bold border-2 p-4 bg-blue-400 mx-96">
              Total Price: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
            </p>
           
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
