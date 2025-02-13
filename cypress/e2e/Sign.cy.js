describe('Тести для компонента Sign', () => {
    beforeEach(() => {
        // Відкриваємо сторінку реєстрації перед кожним тестом
        cy.visit('http://localhost:3000/sign'); // Замініть на реальний шлях до вашої сторінки
    });

    it('перевіряє, що користувач може зареєструватися', () => {
        // Заповнюємо поля електронної пошти та пароля
        cy.get('input[placeholder="Електронна пошта"]').type('testuser@example.com');
        cy.get('input[placeholder="Пароль"]').type('TestPassword123');


    });

    it('помилка при невірних даних', () => {
    // Заповнюємо поля невірними даними
    cy.get('input[placeholder="Електронна пошта"]').type('invalid-email');
    cy.get('input[placeholder="Пароль"]').type('short');
    });
        it('перевіряє наявність логотипу та тексту на сторінці', () => {
            // Переконуємося, що логотип відображається
            cy.get('img[alt="Лого"]').should('exist');
            cy.get('img[alt="Новий логотип"]').should('exist');

            // Перевіряємо наявність тексту "Зареєструватися"
            cy.contains('Зареєструватися').should('exist');
            cy.contains('Зареєструйтесь, щоб ви могли отримати доступ до свого особистого облікового запису.').should('exist');

});
});
