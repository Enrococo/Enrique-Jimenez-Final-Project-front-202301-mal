import { FC } from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../grid-types';

interface ModularItemGridProps {
  imgUrl: string;
}

export const ModularItemGrid: FC<ModularItemGridProps> = ({ imgUrl }) => {
  const [, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      aria-label="modularImg"
      ref={drag}
      style={{
        border: '1px solid var(--color-secondary)',
        width: '-moz-fit-content',
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
        background: 'var(--color-secondary-clear)',
      }}
    >
      <img src={imgUrl} style={{ width: '100%' }} alt="selected-module" />
    </div>
  );
};
