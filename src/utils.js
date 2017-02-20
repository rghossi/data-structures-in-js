export const isValid = function(element) {
	if (typeof element != 'number') 
		throw new TypeError("Wrong variable type. Expected (non negative) integer.");
	else if (element < 0) 
		throw new TypeError("Negative integers are not accepted!");
	else
		return true
}