const stack = new Stack();

for (let i = 1; i < 5; i++) {
    stack.push(`Node: ${i}`)
}
console.log(stack);

let p = stack.pop();
console.log(stack);
console.log(p);
console.log(p.data, p.next);

// stack.push("1st Node");
// stack.push("2nd Node");
// // let pk = stack.peek();
// stack.push("3rd Node");
// // stack.pop();
// stack.push("4rd Node");
// console.log(stack);
// // console.log(pk, stack);