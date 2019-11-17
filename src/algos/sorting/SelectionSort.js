export default class SelectionSort {
  constructor(values) {
    this.values = values;
    this.sort();
  }

  /**
   * This is exact opposite of BubbleSort, here in each iteration smallest element will
   * be pushed to one extreme & it will be ignore in the subsequent iterations.
   *
   * 2-pointer approach :
   * i <- 0 to n-2
   * j <- i+1 to n-1
   *
   * min <- i
   *
   * First iteration : Element at j-th position will be compared to element at min. If j-th
   * position element is smaller than 'min' will be made to point to it.
   * Whole objective is, at the end of each iteration 'min' should be pointing to smallest
   * element of that iteration.
   */
  // [50, 45, 60, 20, 10];

  sort() {
    for (let i = 0; i < this.values.length - 1; i++) {
      let min = i;
      for (let j = i + 1; j < this.values.length; j++) {
        if (this.values[j] < this.values[min]) min = j;
      }

      this.swap(i, min);
    }
  }

  swap(x, y) {
    if (x === y) return;
    const temp = this.values[x];
    this.values[x] = this.values[y];
    this.values[y] = temp;
  }

  getValues() {
    return this.values;
  }
}
