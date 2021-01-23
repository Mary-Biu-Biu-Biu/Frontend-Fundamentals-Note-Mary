// 会返回一个没有传参的子函数
// 在子函数中可以执行父函数的传参
function fn(a) {
    return () => console.log(a)
}
function fn2(a, b) {
    console.log(a + b)
}
setTimeout(fn(1), 10) //一秒之后打印出1
setTimeout(fn2, 10, 100000000, 10000)

function f1() {
    let n = 100
    function f2() {
        n = n + 100 // f2内部没有n，向上一层在f1中查找到n
        console.log(n)
    }
    return f2
}
var temp = f1() // temp本质 = f2
temp() // 200 // 本质=f2()
temp() // 300 // 本质=再次f2()，这时候再次对n进行修改。这时获取到的n是200了。
