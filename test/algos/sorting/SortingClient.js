import { expect } from "chai";
import SortingClient from "../../../src/algos/sorting/client/SortingClient";
import BubbleSort from "../../../src/algos/sorting/BubbleSort";
import SelectionSort from "../../../src/algos/sorting/SelectionSort";
import MergeSort from "../../../src/algos/sorting/MergeSort";
import QuickSort from "../../../src/algos/sorting/QuickSort";
import RadixSort from "../../../src/algos/sorting/RadixSort";

const COLOR = '\x1b[36m%s\x1b[0m';

describe("SortingClient ->", function() {
  let sortingClient;
  let values;
  let sortedValues;

  before(function() {
    values = [50, 75, 25, 80, 100, 45, 60, 20, 10];

    sortedValues = [...values];
    sortedValues.sort((x, y) => x - y);

    sortingClient = new SortingClient(values);
    console.log(COLOR, 'SortingClient is init : DONE');
    sortingClient.setSortingStrategy(new RadixSort());
    console.log(COLOR, 'SortingClient -> setSortingStrategy -> RadixSort : DONE');
  });

  describe("#sort()", function() {
    it(`should return sorted values`, function() {
      sortingClient.sort();
      expect(sortingClient.getValues()).to.deep.equal(sortedValues);
    });
  });

  after(function() {
    sortingClient = null;
    values = null;
    sortedValues = null;
  });
});
