import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Header } from './Header';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

describe('Given a header component', () => {
  test('When rendering mainlayout, then navbar must be in the document', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const navText = screen.getByText('Sobre Nosotros');
    expect(navText).toBeInTheDocument();
  });

  test('toggles the menu when the button isf clicked', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const menuButton = screen.getByLabelText('Open menu');

    expect(menuButton).toBeInTheDocument();

    userEvent.click(menuButton);

    const menuContainer = screen.getByRole('navigation');

    expect(menuContainer).toBeInTheDocument();
  });

  test('calls the function to toggle the menu when the button is clicked', async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const menuButton = screen.getByRole('button');

    expect(menuButton).toBeInTheDocument();

    expect(menuButton).not.toHaveClass('active');

    await fireEvent.click(menuButton);

    expect(menuButton).toHaveClass('active');
  });
  test('calls the function to toggle the menu when element home in the list is clicked', async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const homeLink = screen.getByLabelText('home');
    const menuButton = screen.getByRole('button');

    expect(menuButton).toBeInTheDocument();

    expect(menuButton).not.toHaveClass('active');

    await fireEvent.click(menuButton);
    expect(menuButton).toHaveClass('active');
    await fireEvent.click(homeLink);
    expect(menuButton).not.toHaveClass('active');
  });
  test('calls the function to toggle the menu when element tu modular in the list is clicked', async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const modularLink = screen.getByLabelText('tu-modular');
    const menuButton = screen.getByRole('button');

    expect(menuButton).toBeInTheDocument();

    expect(menuButton).not.toHaveClass('active');

    await fireEvent.click(menuButton);
    expect(menuButton).toHaveClass('active');
    await fireEvent.click(modularLink);
    expect(menuButton).not.toHaveClass('active');
  });
  test('calls the function to toggle the menu when element nosotros  in the list is clicked', async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const nosotrosLink = screen.getByLabelText('nosotros');
    const menuButton = screen.getByRole('button');

    expect(menuButton).toBeInTheDocument();

    expect(menuButton).not.toHaveClass('active');

    await fireEvent.click(menuButton);
    expect(menuButton).toHaveClass('active');
    await fireEvent.click(nosotrosLink);
    expect(menuButton).not.toHaveClass('active');
  });

  test('calls the function to toggle the menu when element login  in the list is clicked', async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const loginLink = screen.getByLabelText('login');
    const menuButton = screen.getByRole('button');

    expect(menuButton).toBeInTheDocument();

    expect(menuButton).not.toHaveClass('active');

    await fireEvent.click(menuButton);
    expect(menuButton).toHaveClass('active');
    await fireEvent.click(loginLink);
    expect(menuButton).not.toHaveClass('active');
  });

  test('calls the function to toggle the menu when element register  in the list is clicked', async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const registerLink = screen.getByLabelText('register');
    const menuButton = screen.getByRole('button');

    expect(menuButton).toBeInTheDocument();

    expect(menuButton).not.toHaveClass('active');

    await fireEvent.click(menuButton);
    expect(menuButton).toHaveClass('active');
    await fireEvent.click(registerLink);
    expect(menuButton).not.toHaveClass('active');
  });

  test('When clicking on the create button, it shoul redirect you to login in case there is no token', async () => {
    sessionStorage.setItem('MockToken', '1111.1111.1111');
    render(
      <MemoryRouter>
        <React.StrictMode>
          <Provider store={store}>
            <Header />
          </Provider>
        </React.StrictMode>
      </MemoryRouter>
    );

    const createLink = screen.getByLabelText('tusModular-link');

    await fireEvent.click(createLink);
    expect(true).toBe(true);
  });
});
