import React from 'react';
import { BuildControl, Button } from './style';
import BuildContr from './BuildContr/BuildContr';

const controls = [
    {label:'Salad', type: 'salad'},
    {label:'Bacon', type: 'bacon'},
    {label:'Cheese', type: 'cheese'},
    {label:'Meat', type: 'meat'},
];

const buildControl = (props) => (
    <BuildControl>
        <p>Current Price:<strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildContr 
                key={ctrl.label} 
                label={ctrl.label} 
                added={()=>props.ingredientAdded(ctrl.type)}
                removed={()=>props.ingredientRemove(ctrl.type)}
                disabled={props.disabled[ctrl.type]}/>
        ))}
    <Button 
        disabled={!props.purchasable}
        onClick={props.ordered}>{props.isAuthenticate ? 'Order Now' : 'SIGN UP TO ORDER'}</Button>
    </BuildControl>
)

export default buildControl;