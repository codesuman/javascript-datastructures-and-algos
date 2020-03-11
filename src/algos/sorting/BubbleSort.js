import SortingStrategy from "./SortingStrategy";

export default class BubbleSort extends SortingStrategy{
  /**
   * Its named BubbleSort cause in each iteration biggest element will be Bubbled up.
   *
   * First iteration : adjacent elements are compared & biggest element will be pushed
   * to one extreme. Then that element will be ignored in subsequent iterations, by using
   * Sliding Window technique.
   *
   * This is repeated for all elements except for the one last element.
   *
   * Time complexity : O(n-square)
   *
   * j <- n-1 to 1
   * i <- 0 to j-1 {
   *    if(a[i] > a[i+1]) swap(a[i], a[i+1]);
   * }
   */
  sort() {
    for (let j = this.values.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (this.values[i] > this.values[i + 1]) this.swap(i, i + 1);
      }
    }
  }

  swap(x, y) {
    const temp = this.values[x];
    this.values[x] = this.values[y];
    this.values[y] = temp;
  }
}
