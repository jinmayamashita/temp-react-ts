import { render } from "@testing-library/react";
import HomePage from "./home-page";

describe("HomePage", () => {
  test("renders welcome message", () => {
    const { getByText } = render(<HomePage />);
    const welcomeMessage = getByText("Welcome to my website!");
    expect(welcomeMessage).toBeInTheDocument();
  });

  test("renders description", () => {
    const { getByText } = render(<HomePage />);
    const description = getByText(
      "Here you can find all sorts of interesting things."
    );
    expect(description).toBeInTheDocument();
  });

  test("renders count link", () => {
    const { getByText } = render(<HomePage />);
    const countLink = getByText("Count");
    expect(countLink).toBeInTheDocument();
    expect(countLink.getAttribute("href")).toBe("/count");
  });
});
