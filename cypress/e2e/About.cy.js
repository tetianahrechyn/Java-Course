describe('About Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/about'); // Перейти на сторінку "Про нас"
    });

    it('має відображатися правильний заголовок', () => {
        cy.contains('ПРО НАС').should('be.visible');
    });

    it('повинен відображати вступний текст', () => {
        cy.contains('Навчальний центр From Zero to Hero').should('be.visible');
        cy.contains('можливість змінити своє життя').should('be.visible');
    });

    it('має відображатися розділ теоретичної бази', () => {
        cy.contains('Теоретична база').should('be.visible');
    });

    it('має відображатися розділ практичних завдань', () => {
        cy.contains('Практичні завдання').should('be.visible');
        cy.contains('пропонуємо тести та інтерактивні завдання').should('be.visible');
    });

    it('має перейти на сторінку реєстрації', () => {
        cy.contains('Зареєструватися').click();
        cy.url().should('include', '/sign');
    });

    it('має відображатися правильний логотип', () => {
        cy.get('img[alt="Лого"]').should('exist');
    });
});
