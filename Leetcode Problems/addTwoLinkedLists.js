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
class ListNode {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(element) {
    // creates a new node
    var node = new ListNode(element);

    // to store current node
    var current;

    // if list is Empty add the
    // element and make it head
    if (this.head == null) this.head = node;
    else {
      current = this.head;

      // iterate to the end of the
      // list
      while (current.next) {
        current = current.next;
      }

      // add node
      current.next = node;
    }
    this.size++;
  }
}

var addTwoNumbers = (l1, l2) => {};
console.log();

var l1 = new ListNode();
l1.add(2);
l2.add(4);
l3.add(3);

var l1 = new ListNode();
l1.add(5);
l2.add(6);
l3.add(4);
