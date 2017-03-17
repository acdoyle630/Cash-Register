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

function updateDisplay (num) {
	var grabDisplay = document.getElementById('display');
	grabDisplay.innerHTML += num;
	displayParent.appendChild(grabDisplay);
	newDis = Number(grabDisplay.innerHTML);
	console.log(newDis);
}



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
	console.log(calcTest.load(newDis));
});
