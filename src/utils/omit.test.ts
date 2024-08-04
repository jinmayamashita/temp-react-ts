import { omit } from "./omit";

describe("omit", () => {
	test("return an object with omitted properties if some properties are specified", () => {
		const obj = {
			name: "John",
			age: 30,
			city: undefined,
		};

		const result = omit(obj);

		expect(result).toStrictEqual({ name: "John", age: 30 });
	});

	test("return an object with all properties if no properties are specified", () => {
		const obj = {
			name: "John",
			age: 30,
			city: null,
		};

		const result = omit(obj);

		expect(result).toStrictEqual({
			name: "John",
			age: 30,
			city: null,
		});
	});

	test("return an empty object if all properties are undefined", () => {
		const obj = {
			name: undefined,
			age: undefined,
			city: undefined,
		};

		const result = omit(obj);

		expect(result).toStrictEqual({});
	});
});
