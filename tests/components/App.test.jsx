import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../src/App';
import { describe, expect, it } from 'vitest';

// Custom render function with MemoryRouter
const customRender = (ui, { initialEntries = ['/'] } = {}) => {
  return render(<MemoryRouter initialEntries={initialEntries}>{ui}</MemoryRouter>);
};

describe('App Routing', () => {
  it('should render Home component on the root path', () => {
    customRender(<App useRouter={false} />);

    const homeHeading = screen.getByRole('heading', { name: /home/i });
    expect(homeHeading).toHaveTextContent(/home/i);
  });

  it('should render About component on the /about path', async () => {
    customRender(<App useRouter={false} />, { initialEntries: ['/about'] });

    await waitFor(() => {
      expect(screen.getByRole('heading')).toHaveTextContent(/about/i);
    });
  });

  it('should render Contact component on the /contact path', async () => {
    customRender(<App useRouter={false} />, { initialEntries: ['/contact'] });

    await waitFor(() => {
      expect(screen.getByRole('heading')).toHaveTextContent(/contact/i);
    });
  });

  it('should render NotFound component on the /invalid path', async () => {
    customRender(<App useRouter={false} />, { initialEntries: ['/invalid'] });

    await waitFor(() => {
      expect(screen.getByRole('heading')).toHaveTextContent(/not found/i);
    });
  });
});
