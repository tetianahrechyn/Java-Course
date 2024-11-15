import React from 'react';

import App from './App';
import {mount} from "cypress/react";
import {MemoryRouter} from "react-router-dom";


describe('<App />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<App />);
        // cy.myCustomMount(<App />);
    });


});
