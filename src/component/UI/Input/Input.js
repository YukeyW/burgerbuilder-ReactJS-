import React from 'react';
import {Input, Label} from './style';

const input = (props) => {
    let inputElement = null;
    const inputClass = ['inputElement'];

    if (props.inValid && props.shouldValidate && props.touched) {
        inputClass.push('Invalid')
    }

    switch (props.elementType) {
        case('input'):
            inputElement = <input
                className={inputClass.join(' ')}
                {...props.elementConfig} 
                value={props.value} 
                onChange={props.change}/>;
            break;
        case('textarea'):
            inputElement = <textarea
                className={inputClass.join(' ')}
                {...props.elementConfig} 
                value={props.value}
                onChange={props.change}/>;
            break;
        case('select'):
            inputElement = (
                <select
                    className={inputClass.join(' ')}   
                    value={props.value}
                    onChange={props.change}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))};
                </select>
            );
            break;
        default:
            inputElement = <input 
                className={inputClass.join(' ')} 
                {...props.elementConfig}
                value={props.value}/>;
    }

    return (
        <Input>
            <Label>{props.label}</Label>
            {inputElement}
        </Input>
    );
};

export default input;