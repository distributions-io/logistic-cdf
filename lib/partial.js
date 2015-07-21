'use strict';

// FUNCTIONS //


// PARTIAL //

/**
* FUNCTION: partial( mu, s )
*	Partially applies location parameter `mu` and scale parameter `s` and returns a function for evaluating the cumulative distribution function (CDF) for a Logistic distribution.
*
* @param {Number} mu - location parameter
* @param {Number} s - scale parameter
* @returns {Function} CDF
*/
function partial( mu, s ) {

	/**
	* FUNCTION: cdf( x )
	*	Evaluates the cumulative distribution function (CDF) for a Logistic distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated CDF
	*/
	return function cdf( x ) {

	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
