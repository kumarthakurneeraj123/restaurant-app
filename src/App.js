import { useState } from 'react';

import classes from './App.module.css';

import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

import Header from './components/Layout/Header';
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler =()=>{
    setCartIsShown(true);
  }
  const hideCartHandler =()=>{
    setCartIsShown(false);
  }
  return (
    <CartProvider>
    <div className={classes.fragment}>
        {cartIsShown && <Cart onClose={hideCartHandler}/>}
        <Header onShowCart={showCartHandler}/>
        <main>
          <Meals />
        </main>
    </div>
    </CartProvider>
  );
}

export default App;
