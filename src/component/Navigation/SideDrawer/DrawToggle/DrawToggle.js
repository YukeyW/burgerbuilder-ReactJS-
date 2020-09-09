import React from 'react';
import { DrawerToggle } from './style';

const drawToggle = (props) => (
    <DrawerToggle onClick={props.click}>
        <div></div>
        <div></div>
        <div></div>
    </DrawerToggle>
);

export default drawToggle;