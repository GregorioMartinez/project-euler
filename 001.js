/* 
 * Multiples of 3 and 5
 * Problem 1
 * Published on 05 October 2001 at 06:00 pm [Server Time]
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

 * Find the sum of all the multiples of 3 or 5 below 1000.
 */


 var getMultiplesSum = function(){
 	"use strict";

	var ceiling = 1000,
		index   = 0,
		sum     = 0;

	while(index < ceiling){
		if (index % 3 === 0){
			sum += index;
		}
		else if(index % 5 === 0){
			sum += index;
		}
		index++;
	}

	return sum;
 };

 this.console.log(getMultiplesSum());