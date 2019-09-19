
import {methods} from './utils.js';
class A {
  constructor() {
    this.name = 'the-last';
  }
  getName() {
    let age = 100;
    return `name: ${this.name} + age: ${age}`;
  }
  getNumber = () => {
    let number = 1;
    return `name: ${this.name} + number: ${number}`;
  }
}

var func = () =>{
  const con = 10;
  let   le  = 100;
  console.log(con + le);
}
func();
let met = methods;
met(20);

console.log(methods+'', typeof methods, methods(20));




