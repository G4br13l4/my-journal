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



  