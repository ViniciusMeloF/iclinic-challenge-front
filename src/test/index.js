import { render } from "@testing-library/react";
import { MemoryRouter, Route, Router } from "react-router-dom";
import { createMemoryHistory } from "history";

export const renderWithRouter = (
  children,
  path,
  initialRoute,
  history = undefined
) => {
  const historyMock = history ? history : createMemoryHistory();
  const RouterMock = history ? Router : Route;

  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <RouterMock path={path} history={historyMock}>
        {children}
      </RouterMock>
    </MemoryRouter>
  );
};

export const mockFetchStrengthSide = (responseValue) => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(responseValue),
    })
  );
};
