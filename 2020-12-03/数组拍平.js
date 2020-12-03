function flatten(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) {
            result = [...result, ...flatten(arr[i])]
        } else {
            result.push(arr[i])
        }
    }
    return result
}

var arr = [1, [2, [3, 4, [5, 6], 7, [8]]]]
console.log(flatten(arr))
