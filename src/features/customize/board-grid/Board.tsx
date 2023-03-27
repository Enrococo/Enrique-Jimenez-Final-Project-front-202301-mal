import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { changePosition, selectPosition } from './boardSlice';
import { BoardSquare } from './BoardSquare';
import { ModularItemGrid } from './ModularItemGrid';
import {
  addItemUrl,
  selectModularItem,
  selectModularItemsUrl,
} from '../modular-item/modularItemSlice';

export const Board = () => {
  const position = useAppSelector(selectPosition);
  const dispatch = useAppDispatch();
  const itemsUrl = useAppSelector(selectModularItemsUrl);
  const currentItemUrl = useAppSelector(selectModularItem);

  const renderPiece = (
    x: number,
    y: number,
    itemPosition: number[][],
    imagesUrl: string[]
  ) => {
    for (let i = 0; i < itemPosition.length; i++) {
      if (x === itemPosition[i][0] && y === itemPosition[i][1]) {
        return <ModularItemGrid imgUrl={imagesUrl[i]} />;
      }
    }
  };

  const renderSquare = (
    i: number,
    knightPosition: number[][],
    imagesUrl: string[]
  ) => {
    const x = i % 6;
    const y = Math.floor(i / 6);

    return (
      <div
        aria-label={`${i}`}
        onClick={() => {
          dispatch(changePosition([x, y]));
          dispatch(addItemUrl(currentItemUrl));
        }}
        key={i}
        style={{ width: '16.666%', height: '16.666%' }}
      >
        <BoardSquare x={x} y={y}>
          {renderPiece(x, y, knightPosition, imagesUrl)}
        </BoardSquare>
      </div>
    );
  };

  const squares = [];
  for (let i = 0; i < 36; i++) {
    squares.push(renderSquare(i, position, itemsUrl));
  }

  return (
    <div
      id="board"
      style={{
        width: '80%',
        aspectRatio: '1/1',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {squares}
    </div>
  );
};
