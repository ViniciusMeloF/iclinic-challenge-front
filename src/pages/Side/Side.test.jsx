import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";

import { DARK_SIDE_NAME, LIGHT_SIDE_NAME } from "../../utils";
import { renderWithRouter } from "../../test";

import Side from ".";

describe("SidePageTest", () => {
  it("should be able render side force when dark", async () => {
    renderWithRouter(<Side />, "side/:force", "side/dark");

    // MASTER NAME
    expect(screen.queryByText(DARK_SIDE_NAME)).toBeInTheDocument();

    // IMAGE ALT NAME
    expect(screen.queryByAltText(DARK_SIDE_NAME)).toBeInTheDocument();

    // BACK BUTTON
    expect(screen.queryByText("back")).toBeInTheDocument();

    // CHOOSE BUTTON
    expect(
      screen.queryByRole("button", {
        name: "choose your path again, Padawan",
      })
    ).toBeInTheDocument();
  });

  it("should be able render side force when light", async () => {
    renderWithRouter(<Side />, "side/:force", "side/light");

    // MASTER NAME
    expect(screen.queryByText(LIGHT_SIDE_NAME)).toBeInTheDocument();

    // IMAGE ALT NAME
    expect(screen.queryByAltText(LIGHT_SIDE_NAME)).toBeInTheDocument();

    // BACK BUTTON
    expect(screen.queryByText("back")).toBeInTheDocument();

    // CHOOSE BUTTON
    expect(
      screen.queryByRole("button", {
        name: "choose your path again, Padawan",
      })
    ).toBeInTheDocument();
  });

  it("should be able click to back button and redirect to home page", () => {
    const history = createMemoryHistory();
    history.push = jest.fn();

    renderWithRouter(<Side />, "side/:force", "side/light", history);

    const backButton = screen.queryByText("back");
    fireEvent.click(backButton);

    expect(history.push).toHaveBeenCalledWith("/");
  });
});
