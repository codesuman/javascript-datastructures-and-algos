import SortingStrategy from "./SortingStrategy";

export default class RadixSort extends SortingStrategy{
    getDigit(num, i){
        return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10;
    }

    mostDigits(){
        let maxDigits = 0;
        for (let i = 0; i < this.values.length; i++) {
            maxDigits = Math.max(maxDigits, this.digitCount(this.values[i]));
        }

        return maxDigits;
    }

    digitCount(num){
        if(num === 0) return 1;
        return Math.floor(Math.log10(Math.abs(num))) + 1; 
    }

    /**
     * Loop through the array for this.maxDigitLen times
     * In each iteration, i, get digit at i-th position - say 'k' then push that element to 'k'th bucket of the array.
     * Flatten the array and repeat the process
     */
    sort(){
        for(let i = 0; i < this.maxDigitLen; i++){
            let arr = Array.from({length: 10}, () => []);

            for(let j = 0; j < this.values.length; j++){
                const digit = this.getDigit(this.values[j], i);
                arr[digit].push(this.values[j]);
            }

            this.values = [].concat(...arr);
        }
    }

    setValues(values) {
        console.log('\x1b[36m%s\x1b[0m', 'setValues in RadixSort');
        
        super.setValues(values);
        this.maxDigitLen = this.mostDigits();
    }    
}