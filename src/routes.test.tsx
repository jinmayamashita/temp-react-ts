import { act, render, screen } from "@testing-library/react";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import Routes from "./routes";

describe("Routes", () => {
	test("renders HomePage when path is /", () => {
		const { hook, history } = memoryLocation({ path: "/", record: true });

		render(
			<Router hook={hook}>
				<Routes />
			</Router>,
		);

		history.push("/");

		expect(screen.getByTestId("home-page")).toBeInTheDocument();
	});

	test("renders CountPage when path is /count", async () => {
		const { hook, history, navigate } = memoryLocation({
			path: "/",
			record: true,
		});

		render(
			<Router hook={hook}>
				<Routes />
			</Router>,
		);

		expect(history).toStrictEqual(["/"]);

		await act(async () => navigate("/count"));

		expect(history).toStrictEqual(["/", "/count"]);
		expect(screen.getByTestId("count-page")).toBeInTheDocument();
	});

	test("renders 404 page when path is not found", async () => {
		const { hook, navigate } = memoryLocation({ path: "/", record: true });

		render(
			<Router hook={hook}>
				<Routes />
			</Router>,
		);

		await act(async () => navigate("/invalid-path"));

		expect(screen.getByText("404, Not Found")).toBeInTheDocument();
	});
});
