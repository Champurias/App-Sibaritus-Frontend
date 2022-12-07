import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { experienceReducer } from "./features/experienceSlice/experienceSlice";
import { uiReducer } from "./features/Uislice/Uislice";
import { userReducer } from "./features/userSlice/userSlice";

export const store = configureStore({
  reducer: {
    uiModal: uiReducer,
    user: userReducer,
    experiences: experienceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
