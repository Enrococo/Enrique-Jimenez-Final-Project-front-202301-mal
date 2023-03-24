import modularItemReducer, {
  addItemUrl,
  changeItem,
  ModularItemState,
} from './modularItemSlice';

describe('Given a modularItemSlice it', () => {
  const initialState: ModularItemState = {
    imgURL: '/assets/images/face.svg',
    imagesUrl: [],
  };

  test('should handle initial state', () => {
    expect(modularItemReducer(undefined, { type: 'unknown' })).toEqual({
      imgURL: '/assets/images/face.svg',
      imagesUrl: [],
    });
  });
  test('should handle changeItem reducer', () => {
    const actual = modularItemReducer(
      initialState,
      changeItem('assets/images/mock.svg')
    );
    expect(actual.imgURL).toEqual('assets/images/mock.svg');
  });
  test('should handle addItemsUrl', () => {
    const actual = modularItemReducer(
      initialState,
      addItemUrl('/assets/images/face.svg')
    );
    expect(actual.imagesUrl).toEqual(['/assets/images/face.svg']);
  });
});
