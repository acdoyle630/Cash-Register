var calculatorModule = (function() {
    var calculator = {};
    var memory = 0;
    var total=0;

    
    calculator.load = function (x) {
      if (typeof x !== 'number') {
        throw new Error ('wrong data type');
      }
     // x = x.toString();
      total = x;
      //var elem = document.getElementById('display');
      //total = Number(total);
      //elem.innerHTML = total;
      return total;

    };
    calculator.getTotal = function () {
      //var elem = document.getElementById('display');
      //elem.innerHTML = total;
      return total;
    };
    calculator.add = function(x) {
      if (typeof x !== 'number') {
        throw new Error ('wrong data type');
      }
      total += x;
      return total;
    };
    calculator.subtract = function (x) {
      if (typeof x !== 'number') {
        throw new Error ('wrong data type');
      }
      total -= x;
      return total;
    };
    calculator.multiply = function (x) {
      if (typeof x !== 'number') {
        throw new Error ('wrong datat type');
      }
      total *= x;
      return total;
    };
    calculator.divide = function (x) {
      if(typeof x !== 'number') {
        throw new Error ('wrong data type');
      }
      total /= x;
      return total;
    };
    calculator.recallMemory = function() {
      memory = memory;
      return memory;
    };
    calculator.saveMemory = function() {
      memory = total;
      total = 0;
      calculator.getTotal();
      return memory;
    };
    calculator.clearMemory = function () {
      memory = 0;
      return memory;
    };
    calculator.next = function(num) {
    	return num;
    };

    

    return calculator;




});

var calcTest = calculatorModule();


