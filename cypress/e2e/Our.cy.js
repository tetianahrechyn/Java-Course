describe('Our Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/our'); // Перейдіть на сторінку з компонентом
    });

    it('має відображатися заголовок "НАШ КУРС"', () => {
        cy.contains('НАШ КУРС').should('be.visible');
    });

    it('має відображати опис курсу', () => {
        cy.contains('Ти можеш самостійно обирати теми для вивчення').should('be.visible');
        cy.contains('Java і закінчуючи інкапсуляцією').should('be.visible');
    });

    it('має відображати "Перейти до вивчення..." link', () => {
        cy.get('a').contains('Перейти до вивчення...').should('be.visible').click();
    });

    it('має відображати правильні дати курсів', () => {
        cy.contains('10 Березня 2024').should('be.visible');
        cy.contains('11 Березня 2024').should('be.visible');
        cy.contains('12 Березня 2024').should('be.visible');
    });

    it('має відображати теми курсу', () => {
        cy.contains('Основні поняття').should('be.visible');
        cy.contains('Основні оператори').should('be.visible');
        cy.contains('Умовні оператори').should('be.visible');
        cy.contains('Цикли').should('be.visible');
        cy.contains('Наслідування (Inheritance)').should('be.visible');
        cy.contains('Заміщення (Overriding) методу').should('be.visible');
    });
    it('слід перейти до сторінки навчання при натисканні "Перейти до вивчення..." link', () => {
        cy.contains('Перейти до вивчення...').first().click();
    });

    it('має відображати правильний вміст на сторінці навчання', () => {
        cy.contains('Перейти до вивчення...').first().click(); //
    });

    it('повинні правильно відтворювати всі елементи курсу', () => {
        // Перевірка наявності всіх зображень і тексту
        const expectedTitles = [
            'Поліморфізм (Polymorphism)',
            'Абстракція (Abstraction)',
            'Інкапсуляція (Encapsulation)',
        ];

        expectedTitles.forEach(title => {
            cy.contains(title).should('be.visible');
        });

        // Перевірка наявності зображень
        cy.get('img[alt="Нова т4"]').should('be.visible');
        cy.get('img[alt="Нова т2"]').should('be.visible');
        cy.get('img[alt="Нова т3"]').should('be.visible');
    });
});
