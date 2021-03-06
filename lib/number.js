'use strict';

// FUNCTIONS //

var exp = Math.exp;


// CDF //

/**
* FUNCTION: cdf( x, mu, s )
*	Evaluates the cumulative distribution function (CDF) for a Logistic distribution with location parameter `mu` and scale parameter `s` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} mu - location parameter
* @param {Number} s - scale parameter
* @returns {Number} evaluated CDF
*/
function cdf( x, mu, s ) {
	var z = ( x - mu ) / s;
	return 1 / ( 1 + exp( -z ) );
} // end FUNCTION cdf()


// EXPORTS //

module.exports = cdf;
