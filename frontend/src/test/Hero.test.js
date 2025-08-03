import React from "react";
import { render, screen } from '@testing-library/react';
import Hero from '../landing_page/home/Hero';

// Test Suite
describe('Hero Component', () => {
    test('renders hero image', () => {
        render(<Hero />);
        const heroImage = screen.getByAltText('Hero Image');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src', 'media/images/homeHero.png');
    });

    test('renders heading text', () => {
        render(<Hero />);
        const heading = screen.getByRole('heading', {name: /invest in everything/i});
        expect(heading).toBeInTheDocument();
    })

    test('renders paragraph', () => {
        render(<Hero />);
        const para = screen.getByText(/online platform to invest in stocks, derivatives, mutual funds and more/i);
        expect(para).toBeInTheDocument();
    })

    test('renders signup button', () => {
        render(<Hero />);
        const signupButton = screen.getByRole('button', {name: /signup now/i});
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass('btn-primary');
    });
});