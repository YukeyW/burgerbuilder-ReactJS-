import React from 'react';
import { NavigationItems } from './style';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <NavigationItems>
        <NavigationItem link='/' exact>Burger Builder</NavigationItem>
        {props.isAuthenticate ? <NavigationItem link='/orders'>Orders</NavigationItem> : null}
        {!props.isAuthenticate ? <NavigationItem link='/Auth'>Authenticate</NavigationItem> : <NavigationItem link='/Logout'>Logout</NavigationItem>}
    </NavigationItems>
);

export default navigationItems;