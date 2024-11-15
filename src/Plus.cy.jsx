import React from 'react';
import { mount } from 'cypress/react';
import { MemoryRouter } from 'react-router-dom';
import { auth } from './firebase'; // Імпорт Firebase для налаштування авторизації
import Plus1 from './Plus1';

describe('<Plus1 />', () => {
    beforeEach(() => {
        // Скидання локального зберігання перед кожним тестом
        localStorage.clear();
    });

    it('renders access denied message if unauthorized', () => {
        mount(
            <MemoryRouter>
                <Plus1 />
            </MemoryRouter>
        );

        cy.contains('Ви не маєте прав доступу до цієї сторінки.').should('be.visible');
    });

    it('allows access if user is authorized', () => {
        // Підписка на аутентифікацію, щоб симулювати авторизованого користувача
        const mockUser = { uid: '9BmZeeNofHXK8yNKduUgPPeKJoZ2' };
        cy.stub(auth, 'onAuthStateChanged').callsFake((callback) => {
            callback(mockUser); // Симулюємо авторизованого користувача
            return () => {};
        });

        mount(
            <MemoryRouter>
                <Plus1 />
            </MemoryRouter>
        );

        cy.get('input[placeholder="Запитання"]').should('exist');
    });

    it('creates a question and shows success message', () => {
        // Симулюємо авторизованого користувача
        const mockUser = { uid: '9BmZeeNofHXK8yNKduUgPPeKJoZ2' };
        cy.stub(auth, 'onAuthStateChanged').callsFake((callback) => {
            callback(mockUser);
            return () => {};
        });

        mount(
            <MemoryRouter>
                <Plus1 />
            </MemoryRouter>
        );

        // Заповнення полів
        cy.get('input[placeholder="Запитання"]').type('Яке питання?');
        cy.get('input[placeholder="Варіант відповіді 1"]').type('Варіант 1');
        cy.get('input[placeholder="Правильна відповідь"]').type('Варіант 1');

        // Симуляція натискання кнопки "Створити"
        cy.get('button').contains('Створити').click();

        // Перевірка, що з'являється повідомлення про успіх
        cy.on('window:alert', (txt) => {
            expect(txt).to.contains('Запитання успішно створено!');
        });
    });

    it('handles input clearing after successful submission', () => {
        const mockUser = { uid: '9BmZeeNofHXK8yNKduUgPPeKJoZ2' };
        cy.stub(auth, 'onAuthStateChanged').callsFake((callback) => {
            callback(mockUser);
            return () => {};
        });

        mount(
            <MemoryRouter>
                <Plus1 />
            </MemoryRouter>
        );

        // Заповнення полів
        cy.get('input[placeholder="Запитання"]').type('Яке питання?');
        cy.get('input[placeholder="Варіант відповіді 1"]').type('Варіант 1');
        cy.get('input[placeholder="Правильна відповідь"]').type('Варіант 1');

        // Симуляція натискання кнопки "Створити"
        cy.get('button').contains('Створити').click();

        // Перевірка, що поля очищуються після успішного створення
        cy.get('input[placeholder="Запитання"]').should('have.value', '');
        cy.get('input[placeholder="Варіант відповіді 1"]').should('have.value', '');
        cy.get('input[placeholder="Правильна відповідь"]').should('have.value', '');
    });

    it('logs out user and shows alert', () => {
        const mockUser = { uid: '9BmZeeNofHXK8yNKduUgPPeKJoZ2' };
        cy.stub(auth, 'onAuthStateChanged').callsFake((callback) => {
            callback(mockUser);
            return () => {};
        });

        mount(
            <MemoryRouter>
                <Plus1 />
            </MemoryRouter>
        );

        cy.stub(window, 'alert'); // Заміна alert для перевірки повідомлень

        // Симуляція натискання кнопки "вийти"
        cy.get('img[alt="out"]').click();

        // Перевірка, що з'являється повідомлення про вихід
        cy.on('window:alert', (txt) => {
            expect(txt).to.contains('Ви вийшли з акаунту.');
        });
    });
});
