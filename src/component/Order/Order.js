import React from 'react';
import {Order, Span} from './style';

const order = (props) => {
    const ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push(
            {
                name: ingredientName,
                amount: props.ingredients[ingredientName]
            }
        );
    }

    const ingredientOutput = ingredients.map(ig => {
        return <Span key={ig.name}>
                    {ig.name} ({ig.amount})
            </Span>;
    })

    return (
        <Order>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
        </Order>
    )
}

export default order;