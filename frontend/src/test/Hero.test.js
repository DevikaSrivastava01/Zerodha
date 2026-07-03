import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/support/Hero";

describe("Support Hero Component", () => {
  test("renders support portal text", () => {
    render(<Hero />);

    expect(screen.getByText("Support Portal")).toBeInTheDocument();
  });

  test("renders search input", () => {
    render(<Hero />);

    expect(
      screen.getByPlaceholderText("Eg. how do I activate F&O")
    ).toBeInTheDocument();
  });
});