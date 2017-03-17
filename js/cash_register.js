var registerModule = (function() {
	var total = 0;
	var balance = 0;
	//var runDisplay = document.getElementById(display);

	function display() {
		return calcTest.getTotal();
	}
	function getBalance() {
		return balance;
	}
	function depositCash() {
		balance+=total;
		total=0;
		return balance;
	}
	function withdrawCash (){
		balance-=total;
		total = 0;
		return balance;
	}
	return {
		display,
		getBalance,
		depositCash,
		withdrawCash,
	};

});



var regTest = registerModule();

var newDis;

var dotAllow = false;


 function runningDisplay(num) {
	var changeDisplay = document.getElementById('display');
	changeDisplay.innerHTML = num;
	displayParent.appendChild(changeDisplay);
	newDis = Number(changeDisplay.innerHTML);
}

function updateDisplay (num) {
	var grabDisplay = document.getElementById('display');
	grabDisplay.innerHTML += num;
	displayParent.appendChild(grabDisplay);
	newDis = Number(grabDisplay.innerHTML);
	console.log(newDis);
}

function addDec (num) {
	var decGrab = document.getElementById('display');
	decGrab.innerHTML = newDis + "." + num;
	//decDis = newDis + "." + num;
	displayParent.appendChild(decGrab);
	newDis = Number(decGrab.innerHTML);
	console.log(newDis);

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

var buttonOrder= [];

document.getElementById('one').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length-1] !== 'equals' && buttonOrder[buttonOrder.length-1] !== 'dot'){
	updateDisplay(1);
	}
	if(dotAllow === true){
		addDec(1);
		dotAllow = false;
		console.log(dotAllow);
		console.log(buttonOrder);
	}
});
document.getElementById('two').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length-1] !== 'equals' && buttonOrder[buttonOrder.length-1] !== 'dot'){
	updateDisplay(2);
	}
	if(dotAllow === true){
		addDec(2);
		dotAllow = false;
		console.log(dotAllow);
		console.log(buttonOrder);
	}

});
document.getElementById('three').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length-1] !== 'equals' && buttonOrder[buttonOrder.length-1] !== 'dot'){
	updateDisplay(3);
	}
	if(dotAllow === true){
		addDec(3);
		dotAllow = false;
		console.log(dotAllow);
		console.log(buttonOrder);
	}
});
document.getElementById('four').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length-1] !== 'equals' && buttonOrder[buttonOrder.length-1] !== 'dot'){
	updateDisplay(4);
	}
	if(dotAllow === true){
		addDec(4);
		dotAllow = false;
		console.log(dotAllow);
		console.log(buttonOrder);
	}
});
document.getElementById('five').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length-1] !== 'equals' && buttonOrder[buttonOrder.length-1] !== 'dot'){
	updateDisplay(5);
	}
	if(dotAllow === true){
		addDec(5);
		dotAllow = false;
		console.log(dotAllow);
		console.log(buttonOrder);
	}
});
document.getElementById('six').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length-1] !== 'equals' && buttonOrder[buttonOrder.length-1] !== 'dot'){
	updateDisplay(6);
	}
	if(dotAllow === true){
		addDec(6);
		dotAllow = false;
		console.log(dotAllow);
		console.log(buttonOrder);
	}
});
document.getElementById('seven').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length-1] !== 'equals' && buttonOrder[buttonOrder.length-1] !== 'dot'){
	updateDisplay(7);
	}
	if(dotAllow === true){
		addDec(7);
		dotAllow = false;
		console.log(dotAllow);
		console.log(buttonOrder);
	}
});
document.getElementById('eight').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length-1] !== 'equals' && buttonOrder[buttonOrder.length-1] !== 'dot'){
	updateDisplay(8);
	}
	if(dotAllow === true){
		addDec(8);
		dotAllow = false;
		console.log(dotAllow);
		console.log(buttonOrder);
	}
});
document.getElementById('nine').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length-1] !== 'equals' && buttonOrder[buttonOrder.length-1] !== 'dot'){
	updateDisplay(9);
	}
	if(dotAllow === true){
		addDec(9);
		dotAllow = false;
		console.log(dotAllow);
		console.log(buttonOrder);
	}
});
document.getElementById('zero').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length-1] !== 'equals' && buttonOrder[buttonOrder.length-1] !== 'dot'){
	updateDisplay(0);
	}
	if(dotAllow === true){
		addDec(0);
		dotAllow = false;
		console.log(dotAllow);
		console.log(buttonOrder);
	}
});
document.getElementById('dot').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length-1] !== 'equals'){
	console.log(buttonOrder.indexOf('dot'));
	if(buttonOrder.indexOf('dot') === -1){
		dotAllow = true;
	}
	addButton('dot');
	console.log(buttonOrder);
}});


document.getElementById('plus').addEventListener('click', function(){
	calcTest.load(newDis);
	console.log("Total" + calcTest.getTotal());
	resetDisplay();
	console.log("memory" + calcTest.recallMemory());
	addButton('plus');
	console.log(buttonOrder);

} 
);

document.getElementById('minus').addEventListener('click', function(){
	calcTest.load(newDis);
	console.log("Total" + calcTest.getTotal());
	resetDisplay();
	console.log("memory" + calcTest.recallMemory());
	addButton('minus');
	console.log(buttonOrder);

} 
);


document.getElementById('times').addEventListener('click', function(){
	calcTest.load(newDis);
	console.log("Total" + calcTest.getTotal());
	resetDisplay();
	console.log("memory" + calcTest.recallMemory());
	addButton('times');
	console.log(buttonOrder);

} 
);

document.getElementById('divide').addEventListener('click', function(){
	calcTest.load(newDis);
	console.log("Total" + calcTest.getTotal());
	resetDisplay();
	console.log("memory" + calcTest.recallMemory());
	addButton('divide');
	console.log(buttonOrder);

} 
);





document.getElementById('equals').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length-1] === 'plus' || buttonOrder[buttonOrder.length-1] === 'dot' && buttonOrder[buttonOrder.length-2] === 'plus'){
		var total =calcTest.add(newDis);
		runningDisplay(total);
		addButton('equals');
		console.log(buttonOrder);
		console.log("total" + total);
		console.log("memory" + calcTest.recallMemory());
		console.log(newDis + 'display');
	} 
	if(buttonOrder[buttonOrder.length-1] === 'minus' || buttonOrder[buttonOrder.length-1] === 'dot' && buttonOrder[buttonOrder.length-2] === 'minus') {
		var subTotal = calcTest.subtract(newDis);
		runningDisplay(subTotal);
		console.log("total" + subTotal);
		console.log('memory' +subTotal);
		console.log('dispaly' + newDis);
	}
	if(buttonOrder[buttonOrder.length-1] === 'times' || buttonOrder[buttonOrder.length-1] === 'dot' && buttonOrder[buttonOrder.length-2] === 'times') {
		var mulTotal = calcTest.multiply(newDis);
		runningDisplay(mulTotal);
		console.log("total" + mulTotal);
		console.log('memory' +mulTotal);
		console.log('dispaly' + newDis);
	}
	if(buttonOrder[buttonOrder.length-1] === 'divide' || buttonOrder[buttonOrder.length-1] === 'dot' && buttonOrder[buttonOrder.length-2] === 'divide') {
		var divTotal = calcTest.divide(newDis);
		runningDisplay(divTotal);
		console.log("total" + divTotal);
		console.log('memory' +divTotal);
		console.log('dispaly' + newDis);
	}
	buttonOrder=[];
});
