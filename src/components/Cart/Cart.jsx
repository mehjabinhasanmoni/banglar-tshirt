import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveFromCart}) => {
    let message;

    // if-else

    if(cart.length === 0){
        message = <p>Please add some product</p>
    }
    else{
        message = <div>
            <h3>Boro Loxxx </h3>
            <p><small>Thanks for giving your money</small></p>
        </div>
    }

    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue' : 'red'}>Order Summery : {cart.length}</h2>
            <p className={`bold bordered ${cart.length === 3 ? 'yellow' : 'purple'}`}>Something</p>
            {/* Ternary Operator */}

            {cart.length > 2 ? <span className='purple'>Aro Kino</span> : <span>Fokiraa</span>}
            {message}
            {
                cart.map(tshirt => <p key={tshirt._id}>
                    {tshirt.name} 
                    <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }
            {/* AND && */}
            {
                cart.length === 2 && <p>Double Bonanza!!!</p>
            }

            {/* OR  ||*/}
            {
                cart.length === 3 || <h3>3 ta hoilo na!! </h3>
            }
        </div>
    );
};

export default Cart;
/*
  * CONDITIONAL RENDERING
  * 1. Use if or  if else to set a variable that will contain an element, components
  * 2. Ternary operator ? 'for true' : 'for else'
  * 3. Logical && : (if the condition is true then the next thing will)
  * 4. Logical || : (if the condition is false then the next thing will)
  * 
  
  * CONDITIONAL CSS CLASS
  * 1. 
*/