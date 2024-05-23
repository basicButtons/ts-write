type myPick<T, K extends keyof T> = {
  [P in K]?: T[P];
};

interface MyPick1<T, K extends keyof T> {
  K: T[K];
}
