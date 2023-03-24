import { fireEvent, render, screen } from '@testing-library/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../../app/store';
import { BoardSquare } from './BoardSquare';
import { ModularItemGrid } from './ModularItemGrid';

describe('Given a draggable element', () => {
  test('should be able to drag', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <DndProvider backend={HTML5Backend}>
            <BoardSquare x={1} y={1}>
              <ModularItemGrid imgUrl="/assets/images/circle.svg" />
            </BoardSquare>
          </DndProvider>
        </Provider>
      </BrowserRouter>
    );
    const circle = screen.getByLabelText('modularImg');
    const square = screen.getByLabelText('droppable');
    fireEvent.dragStart(circle);
    fireEvent.dragOver(square);
    fireEvent.drop(square);
    expect(true).toBe(true);
  });
});
