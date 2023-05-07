/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 *
 * Reference: https://projecteuler.net/problem=5
 */

function smallestMultiple(from: number, to: number): number {
	let allDivisible = false;

	for (let n = 1; n < Infinity; n++) {
		for (let i = from; i <= to; i++) {
			if (n % i !== 0) break;
			if (i === to) allDivisible = !allDivisible;
		}

		if (allDivisible) return n;
	}
}

console.log(smallestMultiple(1, 20));

