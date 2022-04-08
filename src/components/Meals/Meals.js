import React, {Fragment} from 'react';

import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

const Meals =(props)=>{
    return (
        <Fragment background='black'>
            <MealsSummary />
            <AvailableMeals />
        </Fragment>
    );
}
export default Meals;