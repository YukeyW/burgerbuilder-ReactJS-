import React from 'react';
import { Toolbar, Nav } from './style';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawToggle from '../SideDrawer/DrawToggle/DrawToggle';

const toolbar = (props) => (
    <Toolbar>
        <DrawToggle click={props.clickHandler}/>
        <Logo height='80%'/>
        <Nav>
            <NavigationItems />
        </Nav>
    </Toolbar>
)

export default toolbar;