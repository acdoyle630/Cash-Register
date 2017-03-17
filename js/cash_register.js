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

document.getElementById('one').addEventListener('click', function(){updateDisplay(1);
});
document.getElementById('two').addEventListener('click', function(){updateDisplay(2);
});
document.getElementById('three').addEventListener('click', function(){updateDisplay(3);
});
document.getElementById('four').addEventListener('click', function(){updateDisplay(4);
});
document.getElementById('five').addEventListener('click', function(){updateDisplay(5);
});
document.getElementById('six').addEventListener('click', function(){updateDisplay(6);
});
document.getElementById('seven').addEventListener('click', function(){updateDisplay(7);
});
document.getElementById('eight').addEventListener('click', function(){updateDisplay(8);
});
document.getElementById('nine').addEventListener('click', function(){updateDisplay(9);
});
document.getElementById('zero').addEventListener('click', function(){updateDisplay(0);
});


document.getElementById('plus').addEventListener('click', function(){
	calcTest.load(newDis);
	console.log("Total" + calcTest.getTotal());
	resetDisplay();
	console.log("memory" + calcTest.recallMemory());
	addButton('plus');
	console.log(buttonOrder);

} 
);

document.getElementById('equals').addEventListener('click', function(){
	if(buttonOrder[buttonOrder.length-1] === 'plus'){
		var total =calcTest.add(newDis);
		runningDisplay(total);
		console.log("total" + total);
		console.log("memory" + calcTest.recallMemory());
		console.log(newDis + 'display');
	} else {
		console.log('guck');
	}
});
