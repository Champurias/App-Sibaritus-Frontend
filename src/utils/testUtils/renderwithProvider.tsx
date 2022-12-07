import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import { render, RenderOptions } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { DefaultTheme } from "styled-components";
import { RootState, store } from "../../redux/store";
import { InitialEntry } from "@remix-run/router";
import { uiReducer } from "../../redux/features/Uislice/Uislice";
import { experienceReducer } from "../../redux/features/experienceSlice/experienceSlice";
import { userReducer } from "../../redux/features/userSlice/userSlice";

interface ExtendedRenderOptions extends RenderOptions {
  preloadedState?: PreloadedState<RootState>;
  store?: typeof store;
  initialEntries?: InitialEntry[];
  theme?: DefaultTheme;
}

interface ExtendedPropsWithChildren extends PropsWithChildren {
  initialEntries?: InitialEntry[];
}

const Router = ({
  children,
  initialEntries,
}: ExtendedPropsWithChildren): JSX.Element => {
  return initialEntries ? (
    <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
  ) : (
    <BrowserRouter>{children}</BrowserRouter>
  );
};

const renderWithProviders = (
  ui: React.ReactElement,
  {
    initialEntries,
    preloadedState,
    store = configureStore({
      reducer: {
        uiModal: uiReducer,
        experiences: experienceReducer,
        user: userReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return (
      <Router initialEntries={initialEntries}>
        <Provider store={store}>{children}</Provider>
      </Router>
    );
  };
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export default renderWithProviders;
