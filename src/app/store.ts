import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../features/auth/auth-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['form/postNewLogin/fulfilled'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg'],
        // Ignore these paths in the state
        ignoredPaths: ['login'],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
