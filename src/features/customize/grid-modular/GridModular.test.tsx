import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../../app/store';
import { GridModular } from './GridModular';

describe('GridModular', () => {
  test('should call changeItem when an image is clicked', async () => {
    const spy = jest.spyOn(store, 'dispatch');

    render(
      <BrowserRouter>
        <Provider store={store}>
          <GridModular />
        </Provider>
      </BrowserRouter>
    );

    const circle = screen.getByAltText('circle-modular');
    await fireEvent.click(circle);
    expect(spy).toHaveBeenCalledWith({
      payload: '/assets/images/circle.svg',
      type: 'modularItem/changeItem',
    });

    const face = screen.getByAltText('face-modular');
    await fireEvent.click(face);
    expect(spy).toHaveBeenCalledWith({
      payload: '/assets/images/face.svg',
      type: 'modularItem/changeItem',
    });

    const flower = screen.getByAltText('flower-modular');
    await fireEvent.click(flower);
    expect(spy).toHaveBeenCalledWith({
      payload: '/assets/images/flower.svg',
      type: 'modularItem/changeItem',
    });
    const pot = screen.getByAltText('pot-modular');
    await fireEvent.click(pot);
    expect(spy).toHaveBeenCalledWith({
      payload: '/assets/images/pot.svg',
      type: 'modularItem/changeItem',
    });
    const romboid = screen.getByAltText('romboid-modular');
    await fireEvent.click(romboid);
    expect(spy).toHaveBeenCalledWith({
      payload: '/assets/images/romboid.svg',
      type: 'modularItem/changeItem',
    });

    const totem = screen.getByAltText('totem-modular');
    await fireEvent.click(totem);
    expect(spy).toHaveBeenCalledWith({
      payload: '/assets/images/totem.svg',
      type: 'modularItem/changeItem',
    });
    const u = screen.getByAltText('u-modular');
    await fireEvent.click(u);
    expect(spy).toHaveBeenCalledWith({
      payload: '/assets/images/u.svg',
      type: 'modularItem/changeItem',
    });
    const piramid = screen.getByAltText('piramid-modular');
    await fireEvent.click(piramid);
    expect(spy).toHaveBeenCalledWith({
      payload: '/assets/images/piramid.svg',
      type: 'modularItem/changeItem',
    });
  });
});
