var exibePares = [];
function pares(x, y) {

  while (x <= y) {
    if (x % 2 === 0) {
		exibePares.push(x);
	 }
	 x++;
  }
};

pares(32, 321);
console.log(exibePares);