import SortingStrategy from "./SortingStrategy";

export default class MergeSort extends SortingStrategy{
  sort(){
    this.divide(0, this.values.length - 1);
  }

  /**
   *
   * MERGE SORT is completely based on RECURSIVELY dividing the given array -
   * by using left and right indices to find the partition index as mid of
   * left and right.
   *
   * When we RECURSIVELY DIVIDE the array in such fashion we will end up with
   * single array elements.
   *
   * Any given array with single element is SORTED. MergeSort exploits this feature.
   *
   * Now when MERGING, we compare element by element in two arrays and copy the
   * smaller element into the new auxilary / temp array.
   */
  divide(l, r) {
    if (l >= r) return;

    const mid = Math.floor((l + r) / 2);

    this.divide(l, mid);
    this.divide(mid + 1, r);
    this.merge(l, mid, r);
  }

  merge(l, m, r) {
    let i = l,
      j = m + 1,
      k = 0;
    const temp = [];

    while (i <= m && j <= r) {
      if (this.values[i] <= this.values[j]) {
        temp[k] = this.values[i];
        i++;
      } else {
        temp[k] = this.values[j];
        j++;
      }
      k++;
    }

    while (i <= m) {
      temp[k] = this.values[i];
      i++;
      k++;
    }

    while (j <= r) {
      temp[k] = this.values[j];
      j++;
      k++;
    }

    // Copy data from temp to this.values
    for (let z = 0; z < temp.length; z++) this.values[l + z] = temp[z];
  }
}
