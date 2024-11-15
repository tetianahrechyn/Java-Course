import React from 'react';
import { mount } from 'cypress/react';
import { MemoryRouter } from 'react-router-dom';
import Theory1Page from './Theory1';

describe('Тести для перевірки теорії Java', () => {
    beforeEach(() => {
        mount(
            <MemoryRouter>
                <Theory1Page />
            </MemoryRouter>
        );
    });

    it('renders the link to "Про нас"', () => {
        cy.get('a').contains('Про нас').should('be.visible');
    });

    it('renders the link to "Наш курс"', () => {
        cy.get('a').contains('Наш курс').should('be.visible');
    });

    it('renders the header for Java data types', () => {
        cy.contains('Довідка по типами даних Java').should('be.visible');
    });

    it('renders the header for comments in Java', () => {
        cy.contains('Коментарі в Java').should('be.visible');
    });

    it('renders the header for the first Java program', () => {
        cy.contains('Перша програма на Java').should('be.visible');
    });

    it('renders the logo', () => {
        cy.get('img[alt="Лого"]').should('be.visible');
    });

    it('renders the logout button', () => {
        cy.get('img[alt="out"]').should('be.visible');
    });

    it('renders the copyright notice', () => {
        cy.contains('Copyright Ideapeel Inc © 2024. All Right Reserved').should('be.visible');
    });
    it('renders the main heading', () => {
        cy.contains('Основні поняття').should('be.visible');
    });

    it('renders the section "Що таке Java?"', () => {
        cy.contains('Що таке Java?').should('be.visible');
    });

    it('renders the description of Java', () => {
        cy.contains('Java це об\'єктно-орієнтована мова програмування.').should('be.visible');
    });

    it('renders the basic syntax section', () => {
        cy.contains('Базовий синтаксис Java:').should('be.visible');
    });

    it('renders the description of Object, Class, Methods', () => {
        cy.contains('Object - Об\'єкти мають стан та поведінку.').should('be.visible');
        cy.contains('Class - Клас можна назвати шаблоном/планом').should('be.visible');
        cy.contains('Methods - метод в основному описує поведінку.').should('be.visible');
    });

    it('renders the key points about Java programs', () => {
        cy.contains('Чутливість до регістру - Java чутлива до регістру').should('be.visible');
    });

    it('renders the identifiers section', () => {
        cy.contains('Java ідентифікатори:').should('be.visible');
    });

    it('renders the keywords section', () => {
        cy.contains('Ключові слова в Java:').should('be.visible');
    });

    it('renders the image with alt "word"', () => {
        cy.get('img[alt="word"]').should('be.visible');
    });

    it('renders the image with alt "bit"', () => {
        cy.get('img[alt="word"]').should('be.visible');
    });

    it('renders the primitive data types section', () => {
        cy.contains('Примітивні типи даних Java:').should('be.visible');
    });
});
