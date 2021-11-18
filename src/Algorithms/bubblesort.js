import swapArr from "../Functions/helpers"
// make bubble sort

// save all steps of the array to an array
// bubbleSort([7,1,3,6])
// [7,1,3,6]
// [1,7,3,6]
// [1,3,6,7]

// return [[7,1,3,6], [1,7,3,6], [1,3,6,7]]

const bubbleSort = (arr) => {
    // loop each array data
    // [7,1,3,6]
    const steps = [[...arr]]
    for (let i = 0; i < arr.length; i++) {
        let swapped = false
        for (let j = i + 1; j < arr.length; j++) {
            // check if currentIndex data "7" is greater than next index data "1"
            // if it is, swap both items
            if (arr[i] > arr[j]) {
                swapArr(arr, i, j)
                swapped = true
            }
            steps.push([...arr])
            console.log(i, j, "[]", arr[i], arr[j])
            // if its not, continue.
        }
        if (!swapped) break;

    }
    return steps
}


export default bubbleSort