describe('Theory1Page Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/theory1'); // Зайти на сторінку Theory1
    });

    it('має відображати головний заголовок', () => {
        cy.contains('Основні поняття').should('be.visible'); // Перевірка основного заголовка
    });

    it('має відображати вступ до Java', () => {
        cy.contains('Що таке Java?').should('be.visible'); // Перевірка заголовка про Java
        cy.contains('Java це об\'єктно-орієнтована мова програмування.').should('be.visible'); // Перевірка тексту про Java
    });


    it('має відображати розділ ключових слів', () => {
        cy.contains('Ключові слова в Java:').should('be.visible'); // Перевірка наявності секції ключових слів
    });
    it('повинен відображати заголовок і текст про примітивні типи даних Java', () => {
        cy.contains('Примітивні типи даних Java:');
        cy.contains('В Java існує всього 8 типів примітивних даних');
    });

    it('повинен відображати зображення', () => {
        cy.get('img[alt="word"]').should('be.visible');
        cy.get('img[alt="Новий логотип"]').should('be.visible');
    });

    it('повинен переходити на сторінку "Про нас"', () => {
        cy.contains('Про нас').click();
        cy.url().should('include', '/about');
    });

    it('повинен переходити на сторінку "Наш курс"', () => {
        cy.contains('Наш курс').click();
        cy.url().should('include', '/our');
    });

    it('повинен вийти з аккаунту', () => {
        cy.get('img[alt="out"]').click();
        cy.url().should('include', '/'); // Заміни на URL, куди має переходитись після виходу
    });
});
