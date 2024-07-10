export const syntaxExample = `
    (function () {
      // …
    })();

    (() => {
      // …
    })();

    (async () => {
      // …
    })();
  `;

export const normalDeclarationExample = `
  (function () {
    // …
  });
`;

export const arrowFunctionExample = `
  (() => {
    // …
  });
`;

export const functionInVariableExample = `
  let show = function () {
    console.log('Anonymous function');
  };

  let show = () => console.log('Anonymous function');
`;

export const functionAsArgumentExample = `
  setTimeout(function() {
    console.log('Execute later after 1 second')
  }, 1000);
`;

export const functionWithArgumentExample = `
  let area = function(length, breadth){
    return length * breadth 
  }
  let x = area(10,5); 
`;

export const arrowFunctionLikeExpressionExample = `
  let age = prompt('What is your age?', 18);

  let welcome = (age < 18) ?
    () => alert('Hello!') : 
    () => alert('Greetings!');

  welcome();
`;

export const multilineArrowFunctionExample = `
  let sum = (a, b) => {
    let result = a + b;
    return result;
  }
`;

export const arrowFunctionInClassExample = `
  class Animal {
    constructor(name, numOfLegs) {
      this.name = name;
      this.numOfLegs = numOfLegs;
    }

    sayName = () => {
      console.log('My name is ', this.name);
    }
  }

  const Dog = new Animal('Bingo', 4);

  Dog.sayName();
  // My name is Bingo
`;

export const arrowFunctionInVariableExample = `
  const printHello = () => {
    console.log('hello');
  }
`;

export const callFunctionBeforeInitializationExample = `
  printName();

  const printName = () => {
    console.log('Hi name');
  }

  // ReferenceError Cannot access 'printName' before initialization
`;

export const functionAsValueExample = `
  const sayHello = function() {
    console.log('hello');
  };

  sayHello();
`;

export const functionAsArgumntExample = `
  function callFunction(func) {
    func();
  };

  callFunction(sayHello);
`;

export const returnFunctionExample = `
  function createGreetingFunction(name) {
    return function() {
      console.log('Hello ' + name);
    }
  };

  const sayHelloToJohn = createGreetingFunction('John');
  sayHelloToJohn();
`;

export const functionExpressionExample = `
  const sayHello = function() {
    console.log('hello world!');
  };

  sayHello();
`;

export const hightOrderFunctionExample = `
  const numbers = [34, 23, 56];

  const doubled = numbers.map(function (number) {
    return number * 2;
  })

  console.log(doubled);
`;

export const functionAsObjectPropertyExample = `
  const person = {
    name: 'John',
    sayHello {
      console.log('Hello my name is ' + this.name);
    },
  };

  person.sayHello();
`;

export const functionAsClassMethodExample = `
  class Person {
    constructor(name) {
      this.name = name;
    }

    sayHello() {
      console.log('Hello my name is ' + this.name);
    },
  };

  const person = new Person('David');
  person.sayHello();
`;

  