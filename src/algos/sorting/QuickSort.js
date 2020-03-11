import SortingStrategy from "./SortingStrategy";

export default class QuickSort extends SortingStrategy{
  sort(l=0, r=this.values.length - 1) {
    if (l >= r) return;

    let pivot = this.divide(l, r);
    this.sort(l, pivot - 1);
    this.sort(pivot + 1, r);
  }

  /**
   *
   * QUICK SORT is completely based on RECURSIVELY finding a self-sufficient place 
   * for an element, called Pivot, in each iteration.
   * 
   * After that we recursively repeat the process to left & right side of the Pivot 
   * 
   * HOW TO FIND RIGHT PLACE FOR PIVOT ?
   *
   * To start with pick a random position for Pivot, say last index.
   * Iterate from start till last-but-one position.
   * 
   * In each step of iteration, compare current element with Pivot element. If current element is smaller then push it back,
   * so that after one complete iteration - we would have pushed all elements smaller than Pivot to left and
   * bigger than Pivot to right.
   * 
   * For pushing an element to back - we would need backtracking index - say Pillion. And current iteration index be Scout.
   * 
   * At the end of iteration - all elements till Pillion would be lesser than Pivot. So ++Pillion would be right place for 
   * Pivot. So increment Pillion index and swap Pillion element with Pivot.
   * 
   * Return Pillion index to the caller, so entire process can be recursively repeated to the left & right of Pillion index. 
   */
  divide(l, r) {
    let pil = l - 1;
    let piv = r;

    for (let sco = l; sco < piv; sco++)
      if (this.values[sco] < this.values[piv]) this.swap(++pil, sco);

    this.swap(++pil, piv);

    return pil;
  }

  swap(x, y) {
    if (x === y) return;
    const temp = this.values[x];
    this.values[x] = this.values[y];
    this.values[y] = temp;
  }
}
