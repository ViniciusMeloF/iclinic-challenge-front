import React from "react";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";

import { DARK_SIDE_NAME, LIGHT_SIDE_NAME } from "../../utils";
import { renderWithRouter, mockFetchStrengthSide } from "../../test";

import Home from ".";

describe("HomePage", () => {
  let originalFetch;

  beforeEach(() => {
    originalFetch = global.fetch;
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it("should be able click start button and redirect to side dark", async () => {
    mockFetchStrengthSide({ name: DARK_SIDE_NAME });

    const history = createMemoryHistory();
    history.push = jest.fn();

    renderWithRouter(<Home />, "/", "/", history);

    expect(screen.queryByText("FRONTEND CHALLENGE")).toBeInTheDocument();

    const startButton = screen.queryByRole("button", { name: /S T A R T/i });
    expect(startButton).toBeInTheDocument();

    fireEvent.click(startButton);

    await waitFor(() => {
      expect(history.push).toHaveBeenCalledWith("/side/dark");
    });
  });

  it("should be able click start button and redirect to side light", async () => {
    mockFetchStrengthSide({ name: LIGHT_SIDE_NAME });

    const history = createMemoryHistory();
    history.push = jest.fn();

    renderWithRouter(<Home />, "/", "/", history);

    expect(screen.queryByText("FRONTEND CHALLENGE")).toBeInTheDocument();

    const startButton = screen.queryByRole("button", { name: /S T A R T/i });
    expect(startButton).toBeInTheDocument();

    fireEvent.click(startButton);

    await waitFor(() => {
      expect(history.push).toHaveBeenCalledWith("/side/light");
    });
  });
});
