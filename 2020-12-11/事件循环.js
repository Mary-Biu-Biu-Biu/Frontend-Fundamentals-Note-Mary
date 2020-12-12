// // 3： setTimeout是异步任务，等同步任务执行完毕才会考虑
// setTimeout(function () {
//     console.log(1)
// }, 0)

// // 没有对象，没有触发
// Promise.resolve(function () {
//     console.log(2)
// })

// // 1: 创建的时候直接执行
// new Promise(function (resolve) {
//     console.log(3)
// })

// // 2：按顺序进行执行
// console.log(4)

// 上述代码的输出结果是什么？？？

//-----------------------------------------------------------------------------------------------------

// // 1：按顺序
// console.log('begin')

// setTimeout(() => {
//     // 3：同步执行完毕，没有其他微任务，来执行宏任务
//     console.log('setTimeout 1')

//     Promise.resolve() // Promise.resolve().then ：直接把 then 回调放入微任务队列
//         .then(() => {
//             // 5： resolve的回调函数
//             console.log('promise 1')
//             setTimeout(() => {
//                 console.log('setTimeout2') // 8. setTimeout2
//             })
//         })
//         .then(() => {
//             console.log('promise 2') // 7. promise 2  注意7比8要快，then 方法返回一个新的 Promise 对象
//         })

//     new Promise((resolve) => {
//         // 4：promise创建即执行
//         console.log('a')

//         // 5：按顺序开始执行resolve
//         resolve()
//     }).then(() => {
//         console.log('b') // 6. b
//     })
// }, 0)
// // 2： 按顺序
// console.log('end')

//--------------------------------------------------------------------------------
// let button = document.getElementById('button')

console.log('start')

setTimeout(() => console.log('Timeout external'))

function CB1() {
    setTimeout(() => {
        Promise.resolve().then(() => console.log('Promise inside timer'))
        console.log('Timeout 0')
    })
}
CB1()
function CB2() {
    console.log('Listener 1-1')

    setTimeout(() => console.log('Timeout 1'))

    Promise.resolve().then(() => {
        console.log('Promise 1')
        setTimeout(() => console.log('Timeout inside promise'))
    })
    console.log('Listener 1-2')
}

Promise.resolve().then(() => console.log('Promise external'))
CB2()
function CB3() {
    console.log('Listener 2-1')

    setTimeout(() => console.log('Timeout 2'))

    Promise.resolve().then(() => console.log('Promise 2'))
    console.log('Listener 2-2')
}
CB3()
console.log('end')
// Listener 1, Promise 1, Listener 2, Promise 2, Timeout 1, Timeout 2
