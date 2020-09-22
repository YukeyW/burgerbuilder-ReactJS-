import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { BurgerBuilder } from './BurgerBuilder';
import BuildControl from  '../../component/Burger/BuildControl/BuildControl';

configure({adapter: new Adapter()});

describe('<BurgerBuilder />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder onIngredients={()=>{}}/>);
    });

    it ('should  render <BurgerBuilder /> when receiving ingredients', () => {
        wrapper.setProps({ings: {salad:0}});
        expect(wrapper.find(BuildControl)).toHaveLength(1);
    })
})