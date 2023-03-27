import boardReducer, { BoardState, changePosition } from './boardSlice';

describe('Given a boardSlice it', () => {
  const initialState: BoardState = {
    modularPosition: [],
  };

  test('should handle initial state', () => {
    expect(boardReducer(undefined, { type: 'unknown' })).toEqual({
      modularPosition: [],
    });
  });
  test('should handle changeItem reducer', () => {
    const actual = boardReducer(initialState, changePosition([6, 7]));
    expect(actual.modularPosition).toEqual([[6, 7]]);
  });
});
