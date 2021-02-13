// const stack = new Stack();

// for (let i = 1; i < 5; i++) {
//     stack.push(`Node: ${i}`)
// }
// stack.push([1, 2, 3, 4, 5, 6, 7]);
// console.log(stack);

// let p = stack.pop();
// console.log(stack);
// console.log(p);
// console.log(p.data, p.next);

// stack.push("1st Node");
// stack.push("2nd Node");
// // let pk = stack.peek();
// stack.push("3rd Node");
// // stack.pop();
// stack.push("4rd Node");
// console.log(stack);
// // console.log(pk, stack);




const queue = new Queue();
queue.enqueue('First in line');
console.log(queue);
queue.enqueue('Second in line');
console.log(queue);
queue.enqueue('Third in line');
console.log(queue);
queue.enqueue('Forth in line');
console.log(queue);
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue);