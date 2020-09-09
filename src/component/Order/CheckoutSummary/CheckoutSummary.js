import React from 'react';
import Burger from '../../Burger/Burger';
import {Content, Button, Food} from './style';

const checkoutSummary = (props) => {
    return (
        <Content>
            <h1>We hope it tastes well!</h1>
            <Food>
                <Burger ingredients={props.ingredients}/>
            </Food>
            <Button className='Danger' onClick={props.checkoutCancelled}>Cancel</Button>
            <Button className='Success' onClick={props.checkoutContinued}>Continue</Button>
        </Content>
    )
}

export default checkoutSummary;