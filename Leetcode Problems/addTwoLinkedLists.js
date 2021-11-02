/*
You are given two non-empty linked lists
 representing two non-negative integers. 
 The digits are stored in reverse order
  and each of their nodes contain a single digit. 
  Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain
 any leading zero, except the number 0 itself.

Example:
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)

Output: 7 -> 0 -> 8

Explanation: 342 + 465 = 807.
*/
//List Node
function ListNode(val) {
  this.val = val;
  this.next = null;
}
//Non-empty linked list
//two non -negative integers
const addTwoNumbers = (l1, l2) => {
  let p1 = l1,
    p2 = l2,
    num1 = 0,
    num2 = 0,
    carry = 0,
    solution = new ListNode(0),
    current = solution;

  while (p1 || p2) {
    num1 = p1 ? p1.val : 0;
    num2 = p2.val ? p2.val : 0;
    if (num1 + num2 + carry > 9) {
      //do
      current.next = new ListNode(num1 + num2 + carry - 10);
      current = current.next;
      carry = 1;
    } else {
      //else
      current.next = new ListNode(num1 + num2 + carry);
      current = current.next;
      carry = 0;
    }
    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
  }
  if (carry) current.next = new ListNode(carry);

  return solution.next;
};

var l1 = new ListNode(5);

var l12 = new ListNode(6);

var l13 = new ListNode(4);

l1.next = l12;
l12.next = l13;

var l2 = new ListNode(2);

var l22 = new ListNode(4);

var l23 = new ListNode(1);

l2.next = l22;
l22.next = l23;

console.log(l1, l2);

console.log("\n\n\n");
console.log(addTwoNumbers(l1, l2));
