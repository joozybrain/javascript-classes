/* #### 3. Bonus: Model a SimpleCalculator
- For this bonus exercise, don't use `assertEquals`. Instead, `console.log` to see the output of your methods and manually check whether it matches your expected values
- create a file named `SimpleCalculator`
- in it, create a class named `SimpleCalculator`, with the following property in the constructor:
    - `value` (this will be the starting value). If no argument is supplied during instantiation, value should default to 0
- Implement (i.e. write code for) the following methods.
    - `calculator.add(n)`
    - `calculator.subtract(n)`
    - `calculator.multiply(n)`
    - `calculator.divide(n)`
- Implementation logic for each method: 
    - take in **one** argument (`n`)
    - use `n` to update the value of `this.value`
    - return `this` so that we can chain methods (example: `calculator.add(12).multiply(2).divide(2)`) */

class SimpleCalculator {
    constructor(value) {
        if (value === undefined) {
            this.value = 0;
        }
    }

    add(n) {
        this.value = this.value + n;
        return this;
    }

    substract(n) {
        this.value = this.value - n;
        return this;
    }

    multiply(n) {
        this.value = this.value * n;
        return this;
    }

    divide(n) {
        this.value = this.value / n;
        return this;
    }
}

var calculator = new SimpleCalculator();

console.log(calculator.add(2).substract(1).multiply(100).divide(2));