import React from 'react';
import {render} from '@testing-library/react';
import ClientForm from './clientForm';


describe ('ClientForm',() =>{
    it ('should render correctly', ()=>{
    const {container} = render (<ClientForm/>); 
    expect (container.firstChild).toMatchSnapshot();
    });
});