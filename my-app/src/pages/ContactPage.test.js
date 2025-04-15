import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactPage from '../ContactPage';

test('renders ContactPage component', () => {
    render(<ContactPage />);
    const linkElement = screen.getByText(/Contact Us/i);
    expect(linkElement).toBeInTheDocument();
});