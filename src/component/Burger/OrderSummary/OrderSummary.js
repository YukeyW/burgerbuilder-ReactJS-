import React from 'react';
import { Button } from './style';

const orderSummary = (props) => {
const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (<li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}
                    </span>: {props.ingredients[igKey]}
                    </li>
                );
            })
    return (
        <div>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button className='Danger' onClick={props.cancel}>Cancel</Button>
            <Button className='Success' onClick={props.clicked}>Continue</Button>
        </div>
    )
}

export default orderSummary;