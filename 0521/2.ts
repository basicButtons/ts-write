/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const node1 = new ListNode(1, null);
const node2 = new ListNode(2, null);
const node3 = new ListNode(3, null);
const node4 = new ListNode(4, null);
const node5 = new ListNode(5, null);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;
  if (!head.next) return head;
  let cur: ListNode = head;
  let next: ListNode | null = head.next;
  head.next = null;
  while (next) {
    const temp: ListNode | null = next.next;
    next.next = cur;
    cur = next;
    next = temp;
  }
  return cur;
}
const res = reverseList(node1);
console.log(
  res,
  res?.next,
  res?.next?.next,
  res?.next?.next?.next,
  res?.next?.next?.next?.next?.next
);
