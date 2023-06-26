import {describe, test, expect} from "@jest/globals";
import smallestMultiple from "./index";

describe("Smallest number that is divisible from n1 to nth", () => {
	test("Get smallest number that is divisible from 1 to 10", () => {
		expect(smallestMultiple(1, 10)).toEqual(2520);
	});

	test("Get smallest number that is divisible from 1 to 100", () => {
		expect(smallestMultiple(1, 20)).toEqual(232792560);
	});
});