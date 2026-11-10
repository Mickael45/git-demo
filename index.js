import { addTwoNumbers, multiplyTwoNumbers } from "./utils";

export function addsTwoNumbersAndMultiplyByThree(a, b) {
  return multiplyTwoNumbers(addTwoNumbers(a, b), 3);
}

export function addsTwoNumbersAndMultiplyByTen(a, b) {
  return multiplyTwoNumbers(addTwoNumbers(a, b), 10);
}
