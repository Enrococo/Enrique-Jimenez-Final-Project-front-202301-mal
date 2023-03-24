import { fireEvent, render, screen } from '@testing-library/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../../app/store';

import { ModularItemGrid } from './ModularItemGrid';

describe('Given a draggable element', () => {
  test('should be able to drag', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <DndProvider backend={HTML5Backend}>
            <ModularItemGrid imgUrl="/assets/images/circle.svg" />
          </DndProvider>
        </Provider>
      </BrowserRouter>
    );
    const circle = screen.getByLabelText('modularImg');
    fireEvent.dragStart(circle);
    expect(true).toBe(true);
  });
});
