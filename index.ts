/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all the numbers from 1 to 20?
 *
 * Reference: https://projecteuler.net/problem=5
 */

export default function smallestMultiple(from: number, to: number): number {
	let allDivisible = false;

	for (let dividend = 1; dividend < Infinity; dividend++) {
		for (let divisor = from; divisor <= to; divisor++) {
			if (dividend % divisor !== 0) break;
			if (divisor === to) allDivisible = !allDivisible;
		}

		if (allDivisible) return dividend;
	}
}