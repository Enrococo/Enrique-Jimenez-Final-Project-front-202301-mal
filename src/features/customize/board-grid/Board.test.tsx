import { fireEvent, render, screen } from '@testing-library/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../../app/store';
import { Board } from './Board';

describe('GridModular', () => {
  test('should call changeItem when an image is clicked', async () => {
    const spy = jest.spyOn(store, 'dispatch');

    render(
      <BrowserRouter>
        <Provider store={store}>
          <DndProvider backend={HTML5Backend}>
            <Board />
          </DndProvider>
        </Provider>
      </BrowserRouter>
    );

    const boardSquare = screen.getByLabelText('0');
    await fireEvent.click(boardSquare);
    expect(spy).toHaveBeenCalled();
  });
});
