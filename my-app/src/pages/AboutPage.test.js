import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutPage from '../AboutPage';

test('renders AboutPage component', () => {
    render(<AboutPage />);
    const headingElement = screen.getByText(/About Us/i);
    expect(headingElement).toBeInTheDocument();
});

test('checks specific logic in AboutPage', () => {
    render(<AboutPage />);
    const specificElement = screen.getByText(/Our mission is to/i);
    expect(specificElement).toBeInTheDocument();
});