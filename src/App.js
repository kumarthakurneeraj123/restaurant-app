import React, {Fragment} from 'react';
import classes from './App.module.css';

import Meals from './components/Meals/Meals';

import Header from './components/Layout/Header';
function App() {
  return (
    <Fragment className={classes.fragment}>
        <Header/>
        <main>
          <Meals />
        </main>
    </Fragment>
  );
}

export default App;
