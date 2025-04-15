import React from 'react';
import { render } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';

test('renders NotFoundPage correctly', () => {
  const { getByText } = render(<NotFoundPage />);
  const linkElement = getByText(/404 Not Found/i);
  expect(linkElement).toBeInTheDocument();
});