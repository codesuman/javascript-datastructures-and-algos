export default class SortingStrategy{
    constructor(){
        new Error("SortingStrategy is an abstract class, instantiate its sub-classes");
    }

    sort(){
        new Error("SortingStrategy -> sort() has no implementation, invoke the sort of sub-classes");
    }

    setValues(values) {
        this.values = values;
    }
}