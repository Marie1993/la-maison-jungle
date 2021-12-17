import { useState } from 'react';
import { renderIntoDocument } from 'react-dom/cjs/react-dom-test-utils.development';
import { Minus, Plus, Trash2 } from 'react-feather';
import '../styles/Cart.css';

function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true);
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );

  function deleteArticle(namePlant) {
    cart = cart.filter((item) => item.name !== namePlant);
    updateCart([...cart]);
  }

  function addOne(amount, name, price) {
    const cartFilteredCurrentPlant = cart.filter(
      (plant) => plant.name !== name
    );
    amount++;
    updateCart([...cartFilteredCurrentPlant, { name, price, amount }]);
    console.log('tri');
    cart = cart.sort();
  }

  return isOpen ? (
    <div className='lmj-cart'>
      <button
        className='lmj-cart-toggle-button'
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      <>
        {cart.length > 0 ? (
          <div>
            <h2>Panier</h2>
            <ul>
              {cart.map(({ name, price, amount }, index) => (
                <div key={`${name}-${index}`}>
                  {name} {price}€ x <Minus className='lmj-cart-button' />
                  {amount}
                  <Plus
                    className='lmj-cart-button'
                    onClick={() => addOne(amount, name, price)}
                  />
                  <Trash2
                    className='lmj-cart-trash'
                    onClick={() => deleteArticle(name)}
                  />
                </div>
              ))}
            </ul>
            <h3>Total :{total}€</h3>
            <button
              className='lmj-cart-button-empty'
              onClick={() => updateCart([])}
            >
              Vider le panier
            </button>
          </div>
        ) : (
          <div>Votre panier est vide</div>
        )}
      </>
    </div>
  ) : (
    <div className='lmj-cart-closed'>
      <button
        className='lmj-cart-toggle-button'
        onClick={() => setIsOpen(true)}
      >
        Ouvrir le Panier
      </button>
    </div>
  );
}

export default Cart;
