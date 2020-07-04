// Event Loop
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 500);
const baz = () => console.log("Third");

bar();
foo();
baz();

// Hoisting
console.log(test);

var test = "yoyoyo"; //undefined (NO ERROR!)

// console.log(otherTest);

// let otherTest = "show me"; // Reference Error!

// Scope
const name = "Dany";
const job = "Developer";

const getMoreInfos = () => {
  const hobby = "coding";

  // Works because when the variable is not found in this scope it looks up the scope chain
  // so in this case the global(node)/windows(browser) scope
  console.log(`${name} is ${job} and loves ${hobby}`);
};

getMoreInfos();

// Error because hobby is defined inside a function and its not possible to go to a inner scope in the scope chain
// console.log(`${name} loves ${hobby}`);

// Block Scope (Block = Curly Brackets)
const coding = () => {
  const currentTask = "Understand Scope in JS";
  console.log(currentTask);

  if (true) {
    const currentTask = "Write some statements";
    console.log(currentTask);
  }
};

coding();

// Closures
const first = () => {
  const name = "Dany";
  const second = () => {
    console.log(name);
  };
  return second;
};

// The function only ran ONCE but remembers the references to the variables
// So the child scope has ALWAYS access to the parent scope
const myName = first();
myName();
