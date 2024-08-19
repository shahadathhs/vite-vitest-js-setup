import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import TestWithMockData from '../../src/components/TestWithMockData';

const mockData = [
  { id: 1, first_name: 'Fletcher', last_name: 'McVanamy', email: 'mmcvanamy0@e-recht24.de' },
  { id: 2, first_name: 'Clarice', last_name: 'Harrild', email: 'charrild1@dion.ne.jp' },
];

describe('TestWithMockData', () => {
  it('should render the component correctly', () => {
    render(<TestWithMockData data={mockData} />);
    const element = screen.getByRole('heading');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(/mock data/i);
  });

  it('should show the number of data', () => {
    render(<TestWithMockData data={mockData} />);
    const element = screen.getByText(/2 data/i);
    expect(element).toBeInTheDocument();
  });

  it('should show the data if empty array is not send', () => {
    render(<TestWithMockData data={mockData} />);
    const element = screen.getByText(/1 Fletcher, McVanamy, mmcvanamy0@e-recht24.de/i);
    expect(element).toBeInTheDocument();
  });

  it('should not show the data if empty array is send', () => {
    render(<TestWithMockData data={[]} />);
    const element = screen.queryByText(/1 Fletcher, McVanamy, mmcvanamy0@e-recht24.de/i);
    expect(element).not.toBeInTheDocument();
  });
});
