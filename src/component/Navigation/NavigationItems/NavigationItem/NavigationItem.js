import React from 'react';
import { NavLink } from 'react-router-dom';
import {NavigationItem} from './style';

const navigationItem = (props) => (
    <NavigationItem>
        <NavLink to={props.link} exact={props.exact}>{props.children}</NavLink>
    </NavigationItem>
);

export default navigationItem;
