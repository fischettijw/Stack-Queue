const stack = new Stack();
stack.push("1st Node");
stack.push("2nd Node");
let pk = stack.peek();
stack.push("3rd Node");
stack.pop();
console.log(pk, stack);