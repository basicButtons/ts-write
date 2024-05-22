import { LRU } from "./1.LRU";

const cache = new LRU(2);
cache.put(2, 1);
cache.put(1, 2);
cache.put(2, 3);
cache.put(4, 1);
console.log(cache.get(1));
console.log(cache.get(2));
