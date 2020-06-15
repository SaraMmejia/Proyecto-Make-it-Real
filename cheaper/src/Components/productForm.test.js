import React from 'react';
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import ProductForm from './productForm';


describe ('ProductForm',() =>{
    it ('should render correctly', ()=>{
    const {container} = render (
    <MemoryRouter>
        <ProductForm/>
    </MemoryRouter> 
    
    ); 
    expect (container.firstChild).toMatchSnapshot();
    });
});