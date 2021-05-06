declare global {
  interface Array<T> {
    mapNotNull<O>(transform: (element: T) => O | null | undefined): Array<O>;
  }

  interface ReadonlyArray<T> {
    mapNotNull<O>(transform: (element: T) => O | null | undefined): Array<O>;
  }
}

Array.prototype.mapNotNull = function<T, O>(this: T[], transform: (element: T) => O | null | undefined): O[] {
    return this.map(transform).filter((x): x is O => x != null);
};

export {};
