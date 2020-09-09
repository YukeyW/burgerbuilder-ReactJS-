import React from 'react';
import { NavigationItems, NavigationItem } from './style';
import { NavLink } from 'react-router-dom';

const navigationItems = (props) => (
    <NavigationItems>
        <NavigationItem>
            <NavLink to='/' exact>Burger Builder</NavLink>
        </NavigationItem>
        <NavigationItem>
            <NavLink to='/orders'>Orders</NavLink>
        </NavigationItem>
    </NavigationItems>
);

export default navigationItems;