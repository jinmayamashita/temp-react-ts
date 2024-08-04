import { render, fireEvent } from "@testing-library/react";
import Button from "./button";

describe("Button", () => {
	test("renders button with correct text", () => {
		const onClick = vitest.fn();
		const text = "Click me";
		const { getByText } = render(<Button onClick={onClick} text={text} />);
		const button = getByText(text);
		expect(button).toBeInTheDocument();
	});

	test("calls onClick when button is clicked", () => {
		const onClick = vitest.fn();
		const text = "Click me";
		const { getByText } = render(<Button onClick={onClick} text={text} />);
		const button = getByText(text);
		fireEvent.click(button);
		expect(onClick).toHaveBeenCalledTimes(1);
	});
});
