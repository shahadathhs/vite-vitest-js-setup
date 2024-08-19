import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import UserList from '../../src/components/UserList';

describe('UserList Component', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    vi.resetAllMocks();
  });

  it('renders loading state initially', () => {
    render(<UserList />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  it('renders user list after fetching data', async () => {
    const mockUsers = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ];

    // Mock the fetch API call using async/await
    vi.stubGlobal('fetch', vi.fn(async () => ({
      ok: true,
      json: async () => mockUsers,
    })));

    render(<UserList />);

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    });
  });

  it('renders "Failed to fetch users" error message when fetch fails', async () => {
    // Mock the fetch API call to simulate a non-200 response
    vi.stubGlobal('fetch', vi.fn(async () => ({
      ok: false,
      json: async () => ({}),
    })));

    render(<UserList />);

    await waitFor(() => {
      expect(screen.getByText(/failed to fetch users/i)).toBeInTheDocument();
    });
  });

  it('renders "An error occurred while fetching users" when a network error occurs', async () => {
    // Mock the fetch API call to simulate a network error
    vi.stubGlobal('fetch', vi.fn(async () => {
      throw new Error('Network error');
    }));

    render(<UserList />);

    await waitFor(() => {
      expect(screen.getByText(/an error occurred while fetching users/i)).toBeInTheDocument();
    });
  });
});
