import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../HomePage';

test('renders HomePage component', () => {
    render(<HomePage />);
    const headingElement = screen.getByText(/welcome to the homepage/i);
    expect(headingElement).toBeInTheDocument();
});

test('checks functionality of a button', () => {
    render(<HomePage />);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
    buttonElement.click();
    const resultElement = screen.getByText(/button clicked/i);
    expect(resultElement).toBeInTheDocument();
});