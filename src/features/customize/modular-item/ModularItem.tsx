import { useDrag } from 'react-dnd';
import { useAppSelector } from '../../../app/hooks';
import { ItemTypes } from '../grid-types';
import { selectModularItem } from './modularItemSlice';
import { ModularItemStyled } from './ModularItemStyled';

export const ModularItem = () => {
  const item = useAppSelector(selectModularItem);
  const [, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <ModularItemStyled ref={drag}>
      <img className="itemImg" src={item} alt="selected-module" />
    </ModularItemStyled>
  );
};
