Calculator = function() {
    this.value = 0;
};

Calculator.prototype.add = function(number) {
    if (typeof(number) == "number") {
        this.value += number;
    } else {
        alert("Error!");
    }
};
