import { render, fireEvent } from "@testing-library/react";
import CountPage from "./count-page";

describe("CountPage", () => {
	test("renders count page with initial count value", () => {
		const { getByText } = render(<CountPage />);
		const countText = getByText("Count: 0");
		expect(countText).toBeInTheDocument();
	});

	test("increments count when button is clicked", () => {
		const { getByText } = render(<CountPage />);
		const incrementButton = getByText("Increment Count");
		fireEvent.click(incrementButton);
		const countText = getByText("Count: 1");
		expect(countText).toBeInTheDocument();
	});
});
