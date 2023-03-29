import { FC } from 'react';
import { useDrop } from 'react-dnd';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { changePosition } from './boardSlice';
import { ItemTypes } from '../grid-types';
import {
  addItemUrl,
  selectModularItem,
} from '../modular-item/modularItemSlice';
import { Square } from './Square';

interface BoardSquareProps {
  x: number;
  y: number;
  children: JSX.Element | undefined;
}

export const BoardSquare: FC<BoardSquareProps> = ({ x, y, children }) => {
  const dispatch = useAppDispatch();
  const currentItemUrl = useAppSelector(selectModularItem);

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.KNIGHT,
      drop: () => {
        dispatch(addItemUrl(currentItemUrl));
        dispatch(changePosition([x, y]));
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [x, y, currentItemUrl]
  );

  return (
    <div
      aria-label="droppable"
      ref={drop}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <Square>{children}</Square>
      {isOver && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow',
          }}
        />
      )}
    </div>
  );
};
