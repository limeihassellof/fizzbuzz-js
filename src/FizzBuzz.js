

const FizzBuzz = {
  eval(number) {
    if (typeof number === 'string') {
      return "Error";
    } else if (number % 15 == 0) {
      return 'FizzBuzz';
    } else if (number % 5 == 0) {
      return 'Buzz';
    } else if (number % 3 == 0) {
      return 'Fizz';
    } else {
      return number;
    }
  }
};

export default FizzBuzz;
