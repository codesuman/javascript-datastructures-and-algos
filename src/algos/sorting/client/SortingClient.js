export default class SortingClient{
    constructor(values){
        this.values = values;
    }

    setSortingStrategy(strategy){
        this.sortingStrategy = strategy;
        this.sortingStrategy.setValues(this.values);
    }

    sort(){
        if(this.sortingStrategy) this.sortingStrategy.sort();
        else new Error("Please select a Sorting Strategy before trying to sort.");
    }

    setValues(values){
        this.values = values;
    }

    getValues(){
        return this.values;
    }
}