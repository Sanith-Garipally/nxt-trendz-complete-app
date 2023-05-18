import Header from '../Header'
import CartListView from '../CartListView'
import CartSummary from '../CartSummary'
import CartContext from '../../context/CartContext'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, emptyCart} = value
      return (
        <>
          <Header />
          <div className="cart-container">
            <div className="cart-content-container">
              <div className="remove-all-container">
                <h1 className="cart-heading">My Cart</h1>
                {cartList.length > 1 && (
                  <button
                    onClick={emptyCart}
                    type="button"
                    className="remove-all-btn"
                  >
                    Remove All
                  </button>
                )}
              </div>
              <CartListView />
              <CartSummary />
            </div>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
