import {Component} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }

  addCartItem = product => {
    this.setState(prevState => ({cartList: [...prevState.cartList, product]}))
  }

  deleteCartItem = id => {
    const {cartList} = this.state
    this.setState({
      cartList: cartList.filter(object => object.id !== id),
    })
  }

  emptyCart = () => {
    this.setState({
      cartList: [],
    })
  }

  changeItemQty = (id, changeType) => {
    const {cartList} = this.state
    const newCartList = cartList.map(object => {
      if (object.id === id) {
        if (changeType === 'decrement' && object.quantity > 1) {
          return {
            ...object,
            quantity: object.quantity - 1,
          }
        }
        if (changeType === 'increment') {
          return {
            ...object,
            quantity: object.quantity + 1,
          }
        }
      }
      return object
    })
    this.setState({
      cartList: newCartList,
    })
  }

  render() {
    const {cartList} = this.state

    return (
      <BrowserRouter>
        <CartContext.Provider
          value={{
            cartList,
            addCartItem: this.addCartItem,
            deleteCartItem: this.deleteCartItem,
            changeItemQty: this.changeItemQty,
            emptyCart: this.emptyCart,
          }}
        >
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/products" component={Products} />
            <ProtectedRoute
              exact
              path="/products/:id"
              component={ProductItemDetails}
            />
            <ProtectedRoute exact path="/cart" component={Cart} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </CartContext.Provider>
      </BrowserRouter>
    )
  }
}

export default App
