import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';
import { MemoryRouter } from 'react-router-dom';

describe('About Component', () => {
    test('renders the About heading', () => {
        render(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );

        const headingElement = screen.getByText(/ПРО НАС/i);
        expect(headingElement).toBeInTheDocument();
    });

    test('renders the main content about JAVA programming', () => {
        render(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );

        const contentElement = screen.getByText(/Сайт для вивчення мови програмування JAVA/i);
        expect(contentElement).toBeInTheDocument();
    });

    test('renders the theoretical base section', () => {
        render(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );

        const theoreticalBaseElement = screen.getByText(/Теоретична база/i);
        expect(theoreticalBaseElement).toBeInTheDocument();
    });

    test('contains a link to the sign up page', () => {
        render(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );

        const signUpLink = screen.getByText(/Зареєструватися/i);
        expect(signUpLink).toHaveAttribute('href', '/sign');
    });

    test('renders the footer with copyright information', () => {
        render(
            <MemoryRouter>
                <About />
            </MemoryRouter>
        );

        const footerText = screen.getByText(/Copyright Ideapeel Inc © 2024. All Right Reserved/i);
        expect(footerText).toBeInTheDocument();
    });
});
