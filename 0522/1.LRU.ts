class Node {
  next: Node | null;
  prev: Node | null;
  key: number;
  value: number;
  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
export class LRU {
  private cache: Map<number, Node>;
  private size: number;
  private dummyHead: Node;
  private dummyTail: Node;

  constructor(private capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
    this.size = 0;
    this.dummyHead = new Node(0, 0);
    this.dummyTail = new Node(0, 0);
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
  }

  get(key: number) {
    if (this.cache.has(key)) {
      const curNode = this.cache.get(key)!;
      this.moveToHead(curNode);
      return curNode!.value;
    } else {
      return -1;
    }
  }

  put(key: number, value: number) {
    if (this.cache.has(key)) {
      console.log("key1 : ", key);
      const node = this.cache.get(key)!;
      node.value = value;
      this.moveToHead(node);
      return node.value;
    } else {
      if (this.size === this.capacity) {
        this.removeTailNode();
      }
      const newNode = new Node(key, value);
      this.cache.set(key, newNode);
      this.appendToHead(newNode);
      this.size++;
    }
  }
  private removeTailNode() {
    const tailNode = this.dummyTail.prev!;
    this.removeNode(tailNode);
    this.cache.delete(tailNode.key);
    this.size--;
  }

  private moveToHead(node: Node) {
    this.removeNode(node);
    this.appendToHead(node);
  }

  private removeNode(node: Node) {
    const prev = node.prev!;
    const next = node.next!;
    prev.next = next;
    next.prev = prev;
  }

  private appendToHead(node: Node) {
    const curHead = this.dummyHead.next!;
    node.prev = this.dummyHead;
    node.next = curHead;
    curHead.prev = node;
    this.dummyHead.next = node;
  }
}
