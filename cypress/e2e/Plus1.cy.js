describe('Plus1 Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/plus1'); // Відкриваємо сторінку Plus1
    });

    it('повинно відображатися повідомлення про заборону доступу для неавторизованих користувачів', () => {
        // Тут можна входити під користувачем з UID, що не має доступу
        // або просто не входити в систему
        cy.contains('Ви не маєте прав доступу до цієї сторінки.').should('be.visible');
    });

    it('має дозволити доступ для авторизованого користувача', () => {
        // Мокап входу користувача з правильним UID
        const mockUser = {
            uid: '9BmZeeNofHXK8yNKduUgPPeKJoZ2',
            email: 'user@example.com'
        };

    });

    it('має створити запитання', () => {
        // Мокап входу користувача з правильним UID
        const mockUser = {
            uid: '9BmZeeNofHXK8yNKduUgPPeKJoZ2',
            email: 'user@example.com'
        };



        });
    });

