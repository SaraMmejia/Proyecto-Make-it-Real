import React from 'react';
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import NewProduct from './NewProduct';


describe ('NewProduct',() =>{
    it ('should render correctly', ()=>{
    const {container} = render (
    <MemoryRouter>
        <NewProduct/>
    </MemoryRouter> 
    
    ); 
    expect (container.firstChild).toMatchSnapshot();
    });
});