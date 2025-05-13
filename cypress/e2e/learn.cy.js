describe('Learn Page', () => {
    beforeEach(() => {
        // Зайти на сторінку Learn
        cy.visit('http://localhost:3000/log');
    });

    it('should display the main title', () => {
        cy.contains('ОСНОВНІ ПОНЯТТЯ').should('be.visible');
    });

    it('should navigate to Theory page', () => {
        cy.get('a').contains('Теорія').click();
        cy.url().should('include', 'http://localhost:3000/theory1'); // Перевірка, що URL змінився
    });

    it('should navigate to Practice page', () => {
        cy.get('a').contains('Практика').click();
        cy.url().should('include', 'http://localhost:3000/pract1'); // Перевірка, що URL змінився
    });

    it('should log out the user', () => {
        // Передбачимо, що в тебе є кнопка для виходу
        cy.get('img[alt="out"]').click();
        // Перевірка, що перенаправило на сторінку входу
        cy.url().should('include', 'http://localhost:3000/log');
    });

    it('should show correct text when the user is not logged in', () => {
        // Симулюємо стан, коли користувача немає
        cy.logout(); // Припустимо, що в тебе є метод для виходу з акаунту в тестах
        cy.visit('http://localhost:3000/learn'); // Змінено на правильний маршрут
        cy.url().should('include', 'http://localhost:3000/log'); // Перевірка перенаправлення на сторінку входу
    });
});
