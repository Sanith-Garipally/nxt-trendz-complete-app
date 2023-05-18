import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartTotal = cartList.reduce(
        (accuValue, currValue) =>
          accuValue + currValue.price * currValue.quantity,
        0,
      )
      const totalItems = cartList.length
      return totalItems > 0 ? (
        <div className="cs-container">
          <div className="cs-content-container">
            <h1 className="total-head">
              Order Total: <span className="total-span">Rs {cartTotal}/-</span>
            </h1>
            <p className="total-items">{totalItems} items in the cart</p>
            <button className="checkout-btn" type="button">
              checkout
            </button>
          </div>
        </div>
      ) : null
    }}
  </CartContext.Consumer>
)

export default CartSummary
