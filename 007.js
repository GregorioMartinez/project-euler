/*
 * 10001st prime
 * Problem 7
 * Published on 28 December 2001 at 06:00 pm [Server Time]
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * What is the 10 001st prime number?
 */

var findPrime = function(){
	"use strict";

	var ceiling   = 10001, 
		primes    = [];
		primes[0] = 2;


	for(var number = 2; primes.length < ceiling ; number++){
		
		for(var index = 0; index < primes.length; index++){

			if (number % primes[index] === 0){
				break;
			}

			if (index === primes.length - 1) {
				primes.push(number);
			}

		}

	}

	return primes[ceiling - 1];


};

console.log(findPrime());