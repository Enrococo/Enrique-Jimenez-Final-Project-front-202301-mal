import boardReducer, { BoardState, changePosition } from './boardSlice';

describe('Given a boardSlice it', () => {
  const initialState: BoardState = {
    knightPosition: [],
  };

  test('should handle initial state', () => {
    expect(boardReducer(undefined, { type: 'unknown' })).toEqual({
      knightPosition: [],
    });
  });
  test('should handle changeItem reducer', () => {
    const actual = boardReducer(initialState, changePosition([6, 7]));
    expect(actual.knightPosition).toEqual([[6, 7]]);
  });
});
