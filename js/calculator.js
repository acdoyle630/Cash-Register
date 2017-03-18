var calculatorModule = (function() {
    var calculator = {};
    var memory = 0;
    var total=0;

    
    calculator.load = function (x) {
      if (typeof x !== 'number') {
        throw new Error ('wrong data type');
      }
      memory = x;
      total = 0;
      return memory;

    };
    calculator.getTotal = function () {
      return memory;
    };
    calculator.add = function(x) {
      if (typeof x !== 'number') {
        throw new Error ('wrong data type');
      }
      memory += x;
      return memory;
    };
    calculator.subtract = function (x) {
      if (typeof x !== 'number') {
        throw new Error ('wrong data type');
      }
      memory -= x;
      return memory;
    };
    calculator.multiply = function (x) {
      if (typeof x !== 'number') {
        throw new Error ('wrong datat type');
      }
      memory *= x;
      return memory;
    };
    calculator.divide = function (x) {
      if(typeof x !== 'number') {
        throw new Error ('wrong data type');
      }
      memory /= x;
      return memory;
    };
    calculator.recallMemory = function() {
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


