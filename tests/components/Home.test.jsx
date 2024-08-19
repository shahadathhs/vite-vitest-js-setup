import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { ThemeProvider } from "../../src/providers/ThemeProvider";
import Home from "../../src/pages/Home";
import userEvent from "@testing-library/user-event";


describe('Home Page', () => {
  it('should render the home page with correct elements', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </MemoryRouter>
    );

    const heading = screen.getByRole('heading', { name: /home/i });
    expect(heading).toBeInTheDocument();
    const toggleButton = screen.getByRole('button', { name: /toggle theme/i });
    expect(toggleButton).toBeInTheDocument();
  });

  it('should toggle theme on button click', async() => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </MemoryRouter>
    );

    const toggleButton = screen.getByRole('button', { name: /toggle theme/i });
    await userEvent.click(toggleButton);
    expect(toggleButton).toHaveTextContent(/dark/i);

    await userEvent.click(toggleButton);
    expect(toggleButton).toHaveTextContent(/light/i);
  });
});
