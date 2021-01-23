function fn() {}
let array = []
console.log(typeof fn)
console.log(typeof array)
console.log(fn instanceof Object)
console.log(typeof 0n)

let a = { test: 'test', test2: 'test2' }
console.log(a.toString())
let b = { test: 'test', test2: 'test2' }
console.log(a.valueOf())
console.log(a === b)

function test(a) {
    a.test = 'modified'
}
test(a)

console.log(a.valueOf())

let s1 = Symbol()
console.log(s1 instanceof Object)
let date = new Date()
console.log(date instanceof Object)

let o1 = { test: 'test' }
let o2 = o1
o1 = { test: 'asd' }
console.log(o2)
