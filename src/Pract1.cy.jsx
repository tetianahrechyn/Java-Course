import React from 'react';
import { mount } from 'cypress/react';
import { MemoryRouter } from 'react-router-dom';
import { auth } from './firebase'; // Імпорт Firebase для налаштування авторизації
import Pact1 from './Pract1';
import { signOut } from 'firebase/auth';

describe('<Pact1 />', () => {
    beforeEach(() => {
        localStorage.clear(); // Скидання локального зберігання перед кожним тестом
    });

    it('logs out user and shows alert', () => {
        const mockUser = { uid: '9BmZeeNofHXK8yNKduUgPPeKJoZ2' };
        cy.stub(auth, 'onAuthStateChanged').callsFake((callback) => {
            callback(mockUser);
            return () => {};
        });

        mount(
            <MemoryRouter>
                <Pact1 />
            </MemoryRouter>
        );

        cy.stub(window, 'alert'); // Заміна alert для перевірки повідомлень

        // Симуляція натискання кнопки "вийти"
        cy.get('img[alt="out"]').click(); // Замість 'out' вставте alt вашого зображення

        // Перевірка, що з'являється повідомлення про вихід
        cy.on('window:alert', (txt) => {
            expect(txt).to.contains('Ви вийшли з акаунту.');
        });
    });

});
