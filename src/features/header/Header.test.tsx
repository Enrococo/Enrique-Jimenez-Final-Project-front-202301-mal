import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';
import userEvent from '@testing-library/user-event';

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
});
