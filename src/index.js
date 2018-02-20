class Sorter {
    constructor() {
        this.count_add_elemen = 0;
        this.arr = [];
        this.compareFunction = Function('a, b', 'return a - b;');
    }

    add(element) {
       this.arr.push(element);
       this.count_add_elemen++;
    }

    at(index) {
        return this.arr[index];
    }

    get length() {
        return this.count_add_elemen;
    }

    toArray() {
        return this.arr;
    }

    sort(indices) {

        var buf_arr = [];

        for(var i = 0; i<indices.length; i++){
            buf_arr.push(this.arr[indices[i]]);
        };

        buf_arr.sort(this.compareFunction);

        indices =indices.sort(function (a, b) {
            return a - b;
        });

        for(var i = 0; i<buf_arr.length; i++){
            this.arr[indices[i]] = buf_arr[i];
        }
    }

    setComparator(compareFunction) {
        this.compareFunction = compareFunction;
    }
}

module.exports = Sorter;