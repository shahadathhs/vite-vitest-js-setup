import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import FirstTest from '../../src/components/FirstTest';

describe('FirstTest', () => {
  it('should render the component correctly', () => {
    render(<FirstTest />);
    const element = screen.getByRole('heading');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(/first test/i);
  });
});
