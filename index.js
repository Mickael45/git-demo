import { multiplyTwoNumbers } from "./utils";

function addsTwoNumbersAndMultiplyByThree(a, b) {
  return multiplyTwoNumbers((a + b) * 3);
}

function addsTwoNumbersAndMultiplyByTen(a, b) {
    return multiplyTwoNumbers((a - b) * 10);
}