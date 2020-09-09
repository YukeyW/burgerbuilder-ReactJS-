import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import { Logo } from './style';

const logo = (props) => (
    <Logo height={props.height}>
        <img src={burgerLogo} alt="MyBurger" />
    </Logo>
)

export default logo;
