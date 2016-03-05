//allow function expression with parameter
var attack = (x,y) => x*y;
console.log(attack(5,3));

// function statement
function greet() {
	console.log('hi');
}
greet();

// function expression
var greetMe = function() {
	console.log('Hi Tony!');
}
greetMe();

//allow function expression
greetMe = () => console.log('hi Tony');
greetMe();

//allow function expression with parameter
var loading;
loading = name => console.log(`please hold on ${name} mins`);
loading('two');
