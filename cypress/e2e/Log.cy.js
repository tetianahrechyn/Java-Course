describe('Log In Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/log'); // Перейдіть на сторінку входу
    });

    it('повинні відображатися поля введення та кнопка входу', () => {
        cy.get('input[type="email"]').should('exist');
        cy.get('input[type="password"]').should('exist');
        cy.contains('Увійти').should('exist');
    });

    it('повинен успішно ввійти та переспрямувати', () => {
        const email = 'test@example.com'; // Введіть дійсну електронну пошту
        const password = 'password123'; // Введіть дійсний пароль

        cy.get('input[type="email"]').type(email);
        cy.get('input[type="password"]').type(password);
        cy.contains('Увійти').click();

    });

    it('має відображати повідомлення про помилку при невдалому вході', () => {
        const email = 'wrong@example.com'; // Невірна електронна пошта
        const password = 'wrongpassword'; // Невірний пароль

        cy.get('input[type="email"]').type(email);
        cy.get('input[type="password"]').type(password);
        cy.contains('Увійти').click();


    });
});
