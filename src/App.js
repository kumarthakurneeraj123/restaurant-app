
import classes from './App.module.css';

import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

import Header from './components/Layout/Header';
function App() {
  return (
    <div className={classes.fragment}>
        <Cart />
        <Header/>
        <main>
          <Meals />
        </main>
    </div>
  );
}

export default App;
