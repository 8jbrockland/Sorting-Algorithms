const Sort = function(){

    function swap(list,a,b){
        let temp = list[a];
        list[a] = list[b];
        list[b]= temp;
        return list;
    }

    function bubble(list){
        var done = false;
        while (!done) {
            done = true;
            for (let i = 0; i<list.length-1; i++) {
                if (list[i] > list[i+1]) {
                    done = false;
                    list = swap(list,i,i+1);

                }
            }
        }
        return list;
    }

    function selection(list){
        for(let a=0;a<list.length-1;a++){

            let least = a;

            for(let b=a+1;b<list.length;b++){

                if(list[b]<list[least]){
                    least = b;
                }
            }

            if(least != a){
                list = swap(list,a,least);
            }
        }
        return list;
    }
    function insertion(list){

        for(let a=1; a<list.length;a++){

            let b =a;
            while(b>0 && list[b-1]>list[b]){
                list = swap(list,b,b-1);
                b--;
            }

        }
        return list;
    }

    function merge (arr) {
        if (arr.length === 1) {
            // return once we hit an array with a single item
            return arr
        }

        const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
        const left = arr.slice(0, middle) // items on the left side
        const right = arr.slice(middle) // items on the right side

        return mergeArrays(
            merge(left),
            merge(right)
        )
    }

    // compare the arrays item by item and return the concatenated result
    function mergeArrays (left, right) {
        let result = []
        let indexLeft = 0
        let indexRight = 0

        while (indexLeft < left.length && indexRight < right.length) {
            if (left[indexLeft] < right[indexRight]) {
                result.push(left[indexLeft])
                indexLeft++
            } else {
                result.push(right[indexRight])
                indexRight++
            }
        }

        return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
    }

    return {
        bubble,
        selection,
        insertion,
        merge
    }
};

module.exports = Sort;