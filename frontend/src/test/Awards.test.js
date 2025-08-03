import React from "react";
import { render, screen } from '@testing-library/react';
import Awards from "../landing_page/home/Awards";

describe('Awards Component', () => {
    test('renders Broker SVG image', () => {
        render(<Awards />);
        const brokerSVG = screen.getByAltText('Largest Broker');
        expect(brokerSVG).toBeInTheDocument();
        expect(brokerSVG).toHaveAttribute('src', 'media/images/largestBroker.svg');
    });

    test('renders heading', () => {
        render(<Awards />);
        const heading = screen.getByRole('heading', { name: /Largest stock broker in India/i });
        expect(heading).toBeInTheDocument();
    })

    test('renders para', () => {
        render(<Awards />);
        const para = screen.getByText(/retail order volumes in India/i);
        expect(para).toBeInTheDocument();
    })

    test('renders all investment list items', () => {
        render(<Awards />);
        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(6); // 3 in each column, total 6
    });

    test('renders Press Logo image', () => {
        render(<Awards />);
        const pressLogo = screen.getByAltText('Press Logo');
        expect(pressLogo).toBeInTheDocument();
        expect(pressLogo).toHaveAttribute('src', 'media/images/pressLogos.png');
    });

});