import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../../../../index';

describe('Button Rendering', () => {
  it('renders correctly', () => {
    render(<Button data-testid="button">Click Me</Button>);
    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();
  });
});