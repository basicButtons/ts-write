type MyExclude<T, K> = T extends K ? never : T;

interface callFn {
  (arg: string): number;
}

type newFn = new () => { some: string };

const call: callFn = () => {
  return 1;
};
