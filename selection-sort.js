function selectionSort(array) {

    // step 1: loop from the beginning of the array to the second to last item
    for (let currentIndex = 0; currentIndex < array.length - 1; currentIndex++) {

        // step 2: save a copy of the currentIndex
        let minIndex = currentIndex;

        // step 3: loop through all indexes that proceed the currentIndex
        for (let i = currentIndex + 1; i < array.length; i++) {

            // step 4:  if the value of the index of the current loop is less than the value
            // of the item at minIndex, update minIndex with the new lowest value index 
            if (array[i] < array[minIndex]) {

                // update minIndex with the new lowest value index
                minIndex = i;
            }
        }
        // step 5: if minIndex has been updated, swap the values at minIndex and currentIndex
        if (minIndex != currentIndex) {
            let temp = array[currentIndex];
            array[currentIndex] = array[minIndex];
            array[minIndex] = temp;
        }
    }
    return array;
}

let array = [9, 7, 5, 3, 4, 2, 6, 1, 8]

console.log(selectionSort(array));
