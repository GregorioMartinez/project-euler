/*
 * Special Pythagorean triplet
 * Problem 9
 * Published on 25 January 2002 at 06:00 pm [Server Time]
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

 * a^2 + b^2 = c^2
 * For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */

 var pythagorean = function(){
 	var a = 1,
 	b = 1;

 	for(; a < 500; a++){
 		for(; b < 500; b++){
 			c  = Math.sqrt((a * a) + (b * b));
			if (a + b + c == 1000) {
		 		return a*b*c;
		 	}

 		}
 		
 		b = 0;
 	}

 };

 console.log(pythagorean());