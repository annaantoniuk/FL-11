function isInteger(number) {
	if(number%1 === 0){
		return true;
	}else{
		return false;
	}
}
console.log(isInteger(94));
console.log(isInteger(94.7));