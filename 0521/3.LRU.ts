class ListNode {
  key: number;
  value: number;
  next: ListNode | null;
  prev: ListNode | null;
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

/**
 * 考察点 O(1) 查找 所以 map
 * 写入的时候 需要做到有序移除最后一个，map无序，所以需要采用有序的操作，对于js而言很容易想到数组，
 * 但是对于数组而言，remove这个操作需要index，但是index的获取是依赖于list长度的，所以排除了数组
 * 单项链表删除的时候 0(n)
 * 所以 就是双向链表
 */
class LRU {
  private hash: { [key: number]: ListNode };
  private dummyHead: ListNode;
  private dummyTail: ListNode;
  private count: number;
  constructor(private capacity: number) {
    this.hash = {}; // 哈希表
    this.count = 0; // 缓存数目
    this.dummyHead = new ListNode(0, 0); // 虚拟头结点
    this.dummyTail = new ListNode(0, 0); // 虚拟尾节点
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead; // 还未添加真实节点，将虚拟头尾节点相连
  }
  get(key: number) {
    let node = this.hash[key];
    if (node) return node.value;
    this.moveToHead(node);
    return -1;
  }

  put(key, value) {
    let node = this.hash[key];
    if (node == null) {
      if (this.count == this.capacity) {
        this.removeLRUItem();
      }
      let newNode = new ListNode(key, value);
      this.hash[key] = newNode;
      this.addToHead(newNode);
      this.count++;
    } else {
      node.value = value;
      this.moveToHead(node);
    }
  }

  private removeLRUItem() {
    let tail = this.popTail()!;
    delete this.hash[tail.key];
    this.count--;
  }

  private popTail() {
    let tail = this.dummyTail.prev!;
    this.removeFromList(tail);
    return tail;
  }

  private moveToHead(curNode: ListNode) {
    this.removeFromList(curNode);
    this.addToHead(curNode);
  }
  private removeFromList(curNode: ListNode) {
    let prev = curNode.prev!;
    let next = curNode.next!;
    prev.next = next;
    next.prev = prev;
  }
  private addToHead(node: ListNode) {
    node.prev = this.dummyHead;
    node.next = this.dummyHead.next;
    this.dummyHead.next!.prev = node;
    this.dummyHead.next = node;
  }
}
