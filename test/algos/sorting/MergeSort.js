import { expect } from "chai";
import MergeSort from "../../../src/algos/sorting/MergeSort";

describe("MergeSort ->", function() {
  let ms;
  let values;
  let sortedValues;

  before(function() {
    values = [50, 75, 25, 80, 100, 45, 60, 20, 10];

    sortedValues = [...values];
    sortedValues.sort((x, y) => x - y);

    ms = new MergeSort(values);
  });

  describe("#sort()", function() {
    it(`should return sorted values`, function() {
      expect(ms.getValues()).to.deep.equal(sortedValues);
    });
  });

  after(function() {
    ms = null;
    values = null;
    sortedValues = null;
  });
});
