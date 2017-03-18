var balance = 0;
var newDis;
var dotAllow = false;

function clear() {
	var clearDis = document.getElementById('display');
	clearDis.innerHTML = '';
	displayParent.appendChild(clearDis);
	console.log(newDis);
	console.log(typeof newDis);
}

function reset(){
	clear();
	newDis = 0;
	calcTest.clearMemory();
	dotAllow = false;
	buttonOrder = [];
	console.log(newDis);
	console.log(typeof newDis);
}

function showBalance(){
	var displayBal = document.getElementById('display');
	displayBal.innerHTML = balance.toFixed(2);
	displayParent.appendChild(displayBal);
	newDis = Number(balance);
	console.log(newDis);
	console.log(typeof newDis);
}

function withdraw(x) {
	if (x <= balance) {
		balance -= x;
		reset();
		console.log(newDis);
		console.log(typeof newDis);
	} else {
	alert('You broke as fuck! Current Balance: $' + balance.toFixed(2));
	console.log(newDis);
	console.log(typeof newDis);
	}
}

function runningDisplay(num) {
	var changeDisplay = document.getElementById('display');
	changeDisplay.innerHTML = num.toFixed(2);
	displayParent.appendChild(changeDisplay);
	newDis = Number(changeDisplay.innerHTML);
	console.log(newDis);
	console.log(typeof newDis);
}

function updateDisplay (num) {
	var grabDisplay = document.getElementById('display');
	grabDisplay.innerHTML += num;
	newDis = Number(grabDisplay.innerHTML);
	displayParent.appendChild(grabDisplay);
	console.log(newDis);
	console.log(typeof newDis);
}

function addDec (num) {
	var decGrab = document.getElementById('display');
	decGrab.innerHTML = newDis + "." + num;
	displayParent.appendChild(decGrab);
	newDis = Number(decGrab.innerHTML);
	console.log(newDis);
	console.log(typeof newDis);
}

function resetDisplay (){
	var zeroDisplay = document.getElementById('display');
	zeroDisplay.innerHTML = '';
	displayParent.appendChild(zeroDisplay);
	newDis = zeroDisplay.innerHTML;
	console.log(newDis);
	console.log(typeof newDis);
}

function addButton(str) {
	buttonOrder.push(str);
	console.log(newDis);
	console.log(typeof newDis);
}


var buttonOrder = [];

document.getElementById('one').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length - 1] !== 'equals' && buttonOrder[buttonOrder.length - 1] !== 'dot'){
	updateDisplay(1);
	console.log(newDis);
	console.log(typeof newDis);	
	}
	else if (dotAllow === false && buttonOrder[buttonOrder.length - 1] !== 'equals') {
	updateDisplay(1);
	console.log(newDis);
	console.log(typeof newDis);
	}
	else if(dotAllow === true){
		addDec(1);
		dotAllow = false;
		console.log(newDis);
		console.log(typeof newDis);
	}
});

document.getElementById('two').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length-1] !== 'equals' && buttonOrder[buttonOrder.length - 1] !== 'dot'){
	updateDisplay(2);
	console.log(newDis);
	console.log(typeof newDis);
	}
	else if (dotAllow === false && buttonOrder[buttonOrder.length - 1] !== 'equals') {
	updateDisplay(2);
	console.log(newDis);
	console.log(typeof newDis);
	}
	if(dotAllow === true){
		addDec(2);
		dotAllow = false;
		console.log(newDis);
		console.log(typeof newDis);
	}
});

document.getElementById('three').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length-1] !== 'equals' && buttonOrder[buttonOrder.length - 1] !== 'dot'){
	updateDisplay(3);
	console.log(newDis);
	console.log(typeof newDis);
	}
	else if (dotAllow === false && buttonOrder[buttonOrder.length - 1] !== 'equals') {
	updateDisplay(3);
	console.log(newDis);
	console.log(typeof newDis);
	}
	if(dotAllow === true){
		addDec(3);
		dotAllow = false;
		console.log(newDis);
		console.log(typeof newDis);
	}
});

document.getElementById('four').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length-1] !== 'equals' && buttonOrder[buttonOrder.length - 1] !== 'dot'){
	updateDisplay(4);
	console.log(newDis);
	console.log(typeof newDis);
	}
	else if (dotAllow === false && buttonOrder[buttonOrder.length - 1] !== 'equals') {
	updateDisplay(4);
	console.log(newDis);
	console.log(typeof newDis);
	}
	if(dotAllow === true){
		addDec(4);
		dotAllow = false;
		console.log(newDis);
		console.log(typeof newDis);
	}
});

document.getElementById('five').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length-1] !== 'equals' && buttonOrder[buttonOrder.length - 1] !== 'dot'){
	updateDisplay(5);
	console.log(newDis);
	console.log(typeof newDis);
	}
	else if (dotAllow === false && buttonOrder[buttonOrder.length - 1] !== 'equals') {
	updateDisplay(5);
	console.log(newDis);
	console.log(typeof newDis);

	}
	if(dotAllow === true){
		addDec(5);
		dotAllow = false;
		console.log(newDis);
		console.log(typeof newDis);

	}
});

document.getElementById('six').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length - 1] !== 'equals' && buttonOrder[buttonOrder.length - 1] !== 'dot'){
	updateDisplay(6);
	console.log(newDis);
		console.log(typeof newDis);
	}
	else if (dotAllow === false && buttonOrder[buttonOrder.length - 1] !== 'equals') {
	updateDisplay(6);
	console.log(newDis);
		console.log(typeof newDis);
	}
	if(dotAllow === true){
		addDec(6);
		dotAllow = false;
		console.log(newDis);
		console.log(typeof newDis);
	}
});

document.getElementById('seven').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length - 1] !== 'equals' && buttonOrder[buttonOrder.length - 1] !== 'dot'){
	updateDisplay(7);
	console.log(newDis);
		console.log(typeof newDis);
	}
	else if (dotAllow === false && buttonOrder[buttonOrder.length - 1] !== 'equals') {
	updateDisplay(7);
	console.log(newDis);
		console.log(typeof newDis);
	}
	if(dotAllow === true){
		addDec(7);
		dotAllow = false;
		console.log(newDis);
		console.log(typeof newDis);
	}
});

document.getElementById('eight').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length - 1] !== 'equals' && buttonOrder[buttonOrder.length - 1] !== 'dot'){
	updateDisplay(8);
	console.log(newDis);
		console.log(typeof newDis);
	}
	else if (dotAllow === false && buttonOrder[buttonOrder.length - 1] !== 'equals') {
	updateDisplay(8);
	console.log(newDis);
		console.log(typeof newDis);
	}
	if(dotAllow === true){
		addDec(8);
		dotAllow = false;
		console.log(newDis);
		console.log(typeof newDis);
	}
});

document.getElementById('nine').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length - 1] !== 'equals' && buttonOrder[buttonOrder.length - 1] !== 'dot'){
	updateDisplay(9);
	console.log(newDis);
		console.log(typeof newDis);
	}
	else if (dotAllow === false && buttonOrder[buttonOrder.length - 1] !== 'equals') {
	updateDisplay(9);
	console.log(newDis);
		console.log(typeof newDis);
	}
	if(dotAllow === true){
		addDec(9);
		dotAllow = false;
		console.log(newDis);
		console.log(typeof newDis);
	}
});

document.getElementById('zero').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length - 1] !== 'equals' && buttonOrder[buttonOrder.length - 1] !== 'dot'){
	updateDisplay(0);
	console.log(newDis);
		console.log(typeof newDis);
	}
	else if (dotAllow === false && buttonOrder[buttonOrder.length - 1] !== 'equals') {
	updateDisplay(0);
	console.log(newDis);
		console.log(typeof newDis);
	}
	if(dotAllow === true){
		addDec(0);
		dotAllow = false;
		console.log(newDis);
		console.log(typeof newDis);
	}
});

document.getElementById('dot').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length - 1] !== 'equals'){
	if(buttonOrder.indexOf('dot') === - 1){
		dotAllow = true;
		console.log(newDis);
		console.log(typeof newDis);
	} 
	addButton('dot');
	console.log(newDis);
		console.log(typeof newDis);
	}
});

document.getElementById('doubleZero').addEventListener('click', function(){
	dotAllow = !dotAllow;
		if (buttonOrder.indexOf('dot') === -1) {
		addDec('00');
		dotAllow = false;
		console.log(newDis);
		console.log(typeof newDis);
	}

});

document.getElementById('plus').addEventListener('click', function(){
	calcTest.load(newDis);
	resetDisplay();
	buttonOrder.splice(buttonOrder.indexOf('dot'),1);
	addButton('plus');
	console.log(newDis);
		console.log(typeof newDis);
	} 
);

document.getElementById('minus').addEventListener('click', function(){
	calcTest.load(newDis);
	resetDisplay();
	buttonOrder.splice(buttonOrder.indexOf('dot'),1);
	addButton('minus');
	console.log(newDis);
		console.log(typeof newDis);
	} 
);

document.getElementById('times').addEventListener('click', function(){
	calcTest.load(newDis);
	resetDisplay();
	buttonOrder.splice(buttonOrder.indexOf('dot'),1);
	addButton('times');
	console.log(newDis);
		console.log(typeof newDis);
	} 
);

document.getElementById('divide').addEventListener('click', function(){
	calcTest.load(newDis);
	resetDisplay();
	buttonOrder.splice(buttonOrder.indexOf('dot'),1);
	addButton('divide');
	console.log(newDis);
		console.log(typeof newDis);
	} 
);

document.getElementById('equals').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length - 1] === 'plus' || buttonOrder[buttonOrder.length - 1] === 'dot' && buttonOrder[buttonOrder.length - 2] === 'plus'){
		var total = calcTest.add(newDis);
		runningDisplay(total);
		addButton('equals');
		console.log(newDis);
		console.log(typeof newDis);
	} 
	if(buttonOrder[buttonOrder.length - 1] === 'minus' || buttonOrder[buttonOrder.length - 1] === 'dot' && buttonOrder[buttonOrder.length - 2] === 'minus') {
		var subTotal = calcTest.subtract(newDis);
		runningDisplay(subTotal);
		console.log(newDis);
		console.log(typeof newDis);
	}
	if(buttonOrder[buttonOrder.length-1] === 'times' || buttonOrder[buttonOrder.length - 1] === 'dot' && buttonOrder[buttonOrder.length - 2] === 'times') {
		var mulTotal = calcTest.multiply(newDis);
		runningDisplay(mulTotal);
		console.log(newDis);
		console.log(typeof newDis);
	}
	if(buttonOrder[buttonOrder.length - 1] === 'divide' || buttonOrder[buttonOrder.length - 1] === 'dot' && buttonOrder[buttonOrder.length - 2] === 'divide') {
		if(newDis !==0){
		var divTotal = calcTest.divide(newDis);
		runningDisplay(divTotal);
	} else {
		alert('cannot divide by zero');
	}
		console.log(newDis);
		console.log(typeof newDis);
	}
	buttonOrder = ['equals'];
});

document.getElementById('clear').addEventListener('click', function(){
	clear();
	buttonOrder.push('clear');
	console.log(newDis);
		console.log(typeof newDis);
});

document.getElementById('reset').addEventListener('click', function(){
	reset();
	newDis = 0;
	buttonOrder.push('reset');
	console.log(newDis);
		console.log(typeof newDis);
});

document.getElementById('deposit').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length - 2] !== 'balance' && Number(newDis) > 0){
	balance += Number(newDis);
	reset();
	buttonOrder.push('deposit');
	console.log(newDis);
		console.log(typeof newDis);
	}
});

document.getElementById('balance').addEventListener('click', function(){
	showBalance();
	buttonOrder.push('balance', 'equals');
	console.log(newDis);
		console.log(typeof newDis);
});

document.getElementById('withdraw').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length - 2] !== 'balance' && Number(newDis) > 0) {
	withdraw(Number(newDis));
	buttonOrder.push('withdraw');
	console.log(newDis);
		console.log(typeof newDis);
	}
});

