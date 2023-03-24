import { useAppDispatch } from '../../../app/hooks';
import { changeItem } from '../modular-item/modularItemSlice';
import { GridModularStyled } from './GridModularStyled';

export const GridModular = () => {
  const dispatch = useAppDispatch();
  return (
    <GridModularStyled>
      <img
        onClick={() => dispatch(changeItem('/assets/images/circle.svg'))}
        className="modular-item"
        src="/assets/images/circle.svg"
        alt="circle-modular"
      />
      <img
        onClick={() => dispatch(changeItem('/assets/images/face.svg'))}
        className="modular-item"
        src="/assets/images/face.svg"
        alt="face-modular"
      />
      <img
        onClick={() => dispatch(changeItem('/assets/images/flower.svg'))}
        className="modular-item"
        src="/assets/images/flower.svg"
        alt="flower-modular"
      />
      <img
        onClick={() => dispatch(changeItem('/assets/images/pot.svg'))}
        className="modular-item"
        src="/assets/images/pot.svg"
        alt="pot-modular"
      />
      <img
        onClick={() => dispatch(changeItem('/assets/images/romboid.svg'))}
        className="modular-item"
        src="/assets/images/romboid.svg"
        alt="romboid-modular"
      />
      <img
        onClick={() => dispatch(changeItem('/assets/images/totem.svg'))}
        className="modular-item"
        src="/assets/images/totem.svg"
        alt="totem-modular"
      />
      <img
        onClick={() => dispatch(changeItem('/assets/images/u.svg'))}
        className="modular-item"
        src="/assets/images/u.svg"
        alt="u-modular"
      />
      <img
        onClick={() => dispatch(changeItem('/assets/images/piramid.svg'))}
        className="modular-item"
        src="/assets/images/piramid.svg"
        alt="piramid-modular"
      />
    </GridModularStyled>
  );
};
