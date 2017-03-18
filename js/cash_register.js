var balance = 0;
var newDis;
var dotAllow = false;
var display = document.getElementById('display');

function clear() {
	var clearDis = document.getElementById('display');
	clearDis.innerHTML = '';
	displayParent.appendChild(clearDis);
}

function reset(){
	clear();
	newDis = 0;
	calcTest.clearMemory();
	dotAllow = false;
	buttonOrder = [];
}

function showBalance(){
	var displayBal = document.getElementById('display');
	displayBal.innerHTML = balance.toFixed(2);
	displayParent.appendChild(displayBal);
	newDis = Number(balance);
}

function withdraw(x) {
	if (x <= balance) {
		balance -= x;
		reset();
	} else {
	alert('You broke as fuck! Current Balance: $' + balance.toFixed(2));
	}
}

function runningDisplay(num) {
	var changeDisplay = document.getElementById('display');
	changeDisplay.innerHTML = num.toFixed(2);
	displayParent.appendChild(changeDisplay);
	newDis = Number(changeDisplay.innerHTML);
}

function updateDisplay (num) {
	var grabDisplay = document.getElementById('display');
	grabDisplay.innerHTML += num;
	newDis = Number(grabDisplay.innerHTML);
	displayParent.appendChild(grabDisplay);
}

function addDec (num) {
	var decGrab = document.getElementById('display');
	decGrab.innerHTML = newDis + "." + num;
	displayParent.appendChild(decGrab);
	newDis = Number(decGrab.innerHTML);
}

function resetDisplay (){
	var zeroDisplay = document.getElementById('display');
	zeroDisplay.innerHTML = '';
	displayParent.appendChild(zeroDisplay);
	newDis = zeroDisplay.innerHTML;
}

function addButton(str) {
	buttonOrder.push(str);
}

var buttonOrder = [];

document.getElementById('one').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length - 1] !== 'equals' && buttonOrder[buttonOrder.length - 1] !== 'dot'){
	updateDisplay(1);	
	}
	else if (dotAllow === false && buttonOrder[buttonOrder.length - 1] !== 'equals') {
	updateDisplay(1);
	}
	else if(dotAllow === true){
		addDec(1);
		dotAllow = false;
	}
});

document.getElementById('two').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length-1] !== 'equals' && buttonOrder[buttonOrder.length - 1] !== 'dot'){
	updateDisplay(2);
	}
	else if (dotAllow === false && buttonOrder[buttonOrder.length - 1] !== 'equals') {
	updateDisplay(2);
	}
	if(dotAllow === true){
		addDec(2);
		dotAllow = false;
	}
});

document.getElementById('three').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length-1] !== 'equals' && buttonOrder[buttonOrder.length - 1] !== 'dot'){
	updateDisplay(3);
	}
	else if (dotAllow === false && buttonOrder[buttonOrder.length - 1] !== 'equals') {
	updateDisplay(3);
	}
	if(dotAllow === true){
		addDec(3);
		dotAllow = false;
	}
});

document.getElementById('four').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length-1] !== 'equals' && buttonOrder[buttonOrder.length - 1] !== 'dot'){
	updateDisplay(4);
	}
	else if (dotAllow === false && buttonOrder[buttonOrder.length - 1] !== 'equals') {
	updateDisplay(4);
	}
	if(dotAllow === true){
		addDec(4);
		dotAllow = false;
	}
});

document.getElementById('five').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length-1] !== 'equals' && buttonOrder[buttonOrder.length - 1] !== 'dot'){
	updateDisplay(5);
	}
	else if (dotAllow === false && buttonOrder[buttonOrder.length - 1] !== 'equals') {
	updateDisplay(5);
	}
	if(dotAllow === true){
		addDec(5);
		dotAllow = false;
	}
});

document.getElementById('six').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length - 1] !== 'equals' && buttonOrder[buttonOrder.length - 1] !== 'dot'){
	updateDisplay(6);
	}
	else if (dotAllow === false && buttonOrder[buttonOrder.length - 1] !== 'equals') {
	updateDisplay(6);
	}
	if(dotAllow === true){
		addDec(6);
		dotAllow = false;
	}
});

document.getElementById('seven').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length - 1] !== 'equals' && buttonOrder[buttonOrder.length - 1] !== 'dot'){
	updateDisplay(7);
	}
	else if (dotAllow === false && buttonOrder[buttonOrder.length - 1] !== 'equals') {
	updateDisplay(7);
	}
	if(dotAllow === true){
		addDec(7);
		dotAllow = false;
	}
});

document.getElementById('eight').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length - 1] !== 'equals' && buttonOrder[buttonOrder.length - 1] !== 'dot'){
	updateDisplay(8);
	}
	else if (dotAllow === false && buttonOrder[buttonOrder.length - 1] !== 'equals') {
	updateDisplay(8);
	}
	if(dotAllow === true){
		addDec(8);
		dotAllow = false;
	}
});

document.getElementById('nine').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length - 1] !== 'equals' && buttonOrder[buttonOrder.length - 1] !== 'dot'){
	updateDisplay(9);
	}
	else if (dotAllow === false && buttonOrder[buttonOrder.length - 1] !== 'equals') {
	updateDisplay(9);
	}
	if(dotAllow === true){
		addDec(9);
		dotAllow = false;
	}
});

document.getElementById('zero').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length - 1] !== 'equals' && buttonOrder[buttonOrder.length - 1] !== 'dot'){
	updateDisplay(0);
	}
	else if (dotAllow === false && buttonOrder[buttonOrder.length - 1] !== 'equals') {
	updateDisplay(0);
	}
	if(dotAllow === true){
		addDec(0);
		dotAllow = false;
	}
});

document.getElementById('dot').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length - 1] !== 'equals'){
	if(buttonOrder.indexOf('dot') === - 1){
		dotAllow = true;
	} 
	addButton('dot');
	}
});

document.getElementById('doubleZero').addEventListener('click', function(){
	dotAllow = !dotAllow;
		if (buttonOrder.indexOf('dot') === -1) {
		addDec('00');
		dotAllow = false;
	}
});

document.getElementById('plus').addEventListener('click', function(){
	calcTest.load(newDis);
	resetDisplay();
	buttonOrder.splice(buttonOrder.indexOf('dot'),1);
	addButton('plus');
	} 
);

document.getElementById('minus').addEventListener('click', function(){
	calcTest.load(newDis);
	resetDisplay();
	buttonOrder.splice(buttonOrder.indexOf('dot'),1);
	addButton('minus');
	} 
);

document.getElementById('times').addEventListener('click', function(){
	calcTest.load(newDis);
	resetDisplay();
	buttonOrder.splice(buttonOrder.indexOf('dot'),1);
	addButton('times');
	} 
);

document.getElementById('divide').addEventListener('click', function(){
	calcTest.load(newDis);
	resetDisplay();
	buttonOrder.splice(buttonOrder.indexOf('dot'),1);
	addButton('divide');
	} 
);

document.getElementById('equals').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length - 1] === 'plus' || buttonOrder[buttonOrder.length - 1] === 'dot' && buttonOrder[buttonOrder.length - 2] === 'plus'){
		var total = calcTest.add(newDis);
		runningDisplay(total);
		addButton('equals');
		} 
	if(buttonOrder[buttonOrder.length - 1] === 'minus' || buttonOrder[buttonOrder.length - 1] === 'dot' && buttonOrder[buttonOrder.length - 2] === 'minus') {
		var subTotal = calcTest.subtract(newDis);
		runningDisplay(subTotal);
	}
	if(buttonOrder[buttonOrder.length-1] === 'times' || buttonOrder[buttonOrder.length - 1] === 'dot' && buttonOrder[buttonOrder.length - 2] === 'times') {
		var mulTotal = calcTest.multiply(newDis);
		runningDisplay(mulTotal);
	}
	if(buttonOrder[buttonOrder.length - 1] === 'divide' || buttonOrder[buttonOrder.length - 1] === 'dot' && buttonOrder[buttonOrder.length - 2] === 'divide') {
		if(newDis !==0){
		var divTotal = calcTest.divide(newDis);
		runningDisplay(divTotal);
	} else {
		alert('cannot divide by zero');
	}
	}
	buttonOrder = ['equals'];
});

document.getElementById('clear').addEventListener('click', function(){
	clear();
	buttonOrder.push('clear');
});

document.getElementById('reset').addEventListener('click', function(){
	reset();
	newDis = 0;
	buttonOrder.push('reset');
});

document.getElementById('deposit').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length - 2] !== 'balance' && Number(newDis) > 0){
	balance += Number(newDis);
	reset();
	buttonOrder.push('deposit');
	}
});

document.getElementById('balance').addEventListener('click', function(){
	showBalance();
	buttonOrder.push('balance', 'equals');
});

document.getElementById('withdraw').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length - 2] !== 'balance' && Number(newDis) > 0) {
	withdraw(Number(newDis));
	buttonOrder.push('withdraw');
	}
});

