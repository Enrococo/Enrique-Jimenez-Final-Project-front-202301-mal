import { render, screen } from '@testing-library/react';
import { carpetMock } from '../../mocks/carpet-mock';
import { Card } from './Card';

describe('Given a card component', () => {
  const carpet = carpetMock;
  test('When the card is rendered, it should have a character on it', () => {
    render(<Card modular={carpet} />);
    expect(screen.getByText('Stairs&Stars')).toBeInTheDocument();
  });
});
