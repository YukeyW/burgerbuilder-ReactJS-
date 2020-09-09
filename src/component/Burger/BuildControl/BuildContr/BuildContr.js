import React from 'react';
import { BuildContr, Button, Label } from './style';

const buildContr = (props) => (
    <BuildContr>
        <Label>{props.label}</Label>
        <Button className='Less' onClick={props.removed} disabled={props.disabled}>Less</Button>
        <Button className='More' onClick={props.added}>More</Button>
    </BuildContr>
);
   
export default buildContr;