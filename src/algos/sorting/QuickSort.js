export default class QuickSort {
  constructor(values) {
    this.values = values;
    this.sort(0, this.values.length - 1);
  }

  sort(l, r) {
    if (l >= r) return;

    let pivot = this.divide(l, r);
    this.sort(l, pivot - 1);
    this.sort(pivot + 1, r);
  }

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

  getValues() {
    return this.values;
  }
}
