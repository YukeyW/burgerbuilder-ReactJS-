import React from 'react';
import { Burger } from './style';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let tranformIngredient = Object.keys(props.ingredients)
        .map(igKey => {return[...Array(props.ingredients[igKey])].map((_, index) => {
            return <BurgerIngredient key={igKey+index} type={igKey}/>
        })}).reduce((array,  el) => {
            return array.concat(el)
        }, [])
    if (tranformIngredient.length === 0) {
        tranformIngredient = <p>Please start to add ingredients</p>
    }
    return (
        <Burger>
            <BurgerIngredient type='bread-top'/>
            { tranformIngredient }
            <BurgerIngredient type='bread-bottom'/>
        </Burger>
    )
}

export default burger;