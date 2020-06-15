import React from 'react';
import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import HomeClient from './HomeClient';


describe ('HomeClient',() =>{
    it ('should render correctly', ()=>{
    const {container} = render (
        <MemoryRouter> 
          <HomeClient/>
        </MemoryRouter>
    );  
    expect (container.firstChild).toMatchSnapshot();
    });
});