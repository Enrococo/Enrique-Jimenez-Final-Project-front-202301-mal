import { useDispatch } from 'react-redux';
import { useAppDispatch } from './hooks';

// Mocking react-redux hooks
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('useAppDispatch', () => {
  it('should return the result of useDispatch', () => {
    const dispatchMock = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(dispatchMock);
    const result = useAppDispatch();
    expect(result).toEqual(dispatchMock);
  });
});
