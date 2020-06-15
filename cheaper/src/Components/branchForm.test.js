import React from 'react';
import { render } from '@testing-library/react'
import BranchForm from './branchForm';



describe ('BranchForm' , ()=> {
    it ('should render correctly', () => {
        const {container} = render (<BranchForm/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});                             