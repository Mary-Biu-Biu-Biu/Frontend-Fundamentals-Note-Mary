Promise.all2 = function (arr) {
    // 输入参数为空的处理
    if (arr.length === 0) {
        return Promise.resolve(arr)
    }

    // 最终返回一个单独的promise对象
    return new Promise((resolve, reject) => {
        // 存放参数中每个promise的resolve结果
        let result = []
        // 用于完成的promise数量计数
        let count = 0

        // 遍历传参中的每一个promise
        for (let i = 0; i < arr.length; i++) {
            let current = arr[i]
            // 如果是普通对象，直接添加
            if (!(current instanceof Promise)) {
                addIntoResult(i, current)
            }
            // 如果是promise，添加resolve以及reject的回调
            else {
                current.then(
                    (value) => {
                        addIntoResult(i, value)
                    },
                    (reason) => {
                        reject(reason)
                    }
                )
            }
        }

        // 添加对应的result，并更新计数器
        function addIntoResult(index, value) {
            result[index] = value
            // 检查是否已经完成所有的promise，是则可以resolve
            if (++count === arr.length) {
                resolve(result)
            }
        }
    })
}

const promise1 = Promise.resolve(3)
const promise2 = 42
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100)
})

var myMap = new Map()

myMap.set("1", promise1)
var myArray = [promise1, promise2, promise3]
myArray = [promise2]
let p = Promise.all2([]).then((values) => {
    console.log(values)
    console.log(p)
})
// expected output: Array [3, 42, "foo"]
console.log(p)
setTimeout(() => console.log(p), 100)

// // this will be counted as if the iterable passed is empty, so it gets fulfilled
// var p1 = Promise.all2([1, 2, 3])
// // this will be counted as if the iterable passed contains only the resolved promise with value "444", so it gets fulfilled
// var p2 = Promise.all2([1, 2, 3, Promise.resolve(444)])
// // this will be counted as if the iterable passed contains only the rejected promise with value "555", so it gets rejected
// var p3 = Promise.all2([1, 2, 3, Promise.reject(555)], 5, 6)

// using setTimeout we can execute code after the stack is empty
// setTimeout(function () {
//     console.log(p1)
//     console.log(p2)
//     console.log(p3)
// })
