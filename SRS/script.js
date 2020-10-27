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
console.log(f);
const f = 'Me';
console.log(f)

console.log("__________________________________________________________________")
