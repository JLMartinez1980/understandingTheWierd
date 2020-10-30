/*
October 27, 2020
*/

/* console.log =>
  //this || window (Global Object) => Window
    {window: Window, self: Window, document: document, name: "", location: Location, …}
*/

const a = 'Hello World';

const b = () => {
  console.log('called b!');
}

b();
console.log(a);

// returns => "called b" followed by 'Hello World'
// window => you can find a: "hellow World"  && b: function b()
// window.a || window.b


const c = 'Hello World';
console.log(c);

const d = () => {
  console.log('called b!');
}
d();
// => returns 'called b!' && undefined

e = () => {};
e();



console.log("__________________________________________________________________");

bravo = () => {
  let myVar; // => ran last, value is undefined
  console.log('myVar-1', myVar);
};

charlie = () => {
  let myVar = 2;
  console.log('myVar-2', myVar) // => ran second value is 2
  bravo();
};

let myVar = 1;  //=> ran first, value is one
console.log('myVar-3', myVar);
charlie();

/*
Execution Contex:
1. myVar = 1 is stored in memory; (Global)
2. charlie function is ran => new context => myVar = 2 (own variable environment);
      a. then function bravo is ran.
3.  thien bravo is ran and myVar is created with undefined
*/

//SCOPE CHAIN:

delta = () => {
  console.log('myWish', myWish);  // => === 1 (GLOBAL variables)
}

echo = () => {
  let myWish = 2;
  console.log('myWish-1', myWish); // => === 2
  b();
};

let myWish = 1;
console.log('myWish-2', myWish); // => === 1
delta();


console.log('__________________________________________')
waitThreeSeconds = () => {
  const ms = 3000 + new Date().getTime();

  while (new Date() < ms) {}
  console.log('finished function');
}

clickHandler = () => {
  console.log('click Event');
}

document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');
