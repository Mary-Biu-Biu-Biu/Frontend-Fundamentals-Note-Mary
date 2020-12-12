function f1(a) {
    function f2() {
        console.log(a)
    }
    return f2
}
var fun = f1(1)
setTimeout(fun, 1000) //一秒之后打印出1

function changeSize(size) {
    return function () {
        document.body.style.fontSize = size + 'px'
    }
}

var size12 = changeSize(12)
var size14 = changeSize(20)
var size16 = changeSize(30)

document.getElementById('size-12').onclick = size12
document.getElementById('size-20').onclick = size14
document.getElementById('size-30').onclick = size16

function f1() {
    var sum = 0
    var obj = {
        inc: function () {
            sum++
            return sum
        },
    }
    return obj
}
let result = f1()
console.log(result.inc()) //1
console.log(result.inc()) //2
console.log(result.inc()) //3
var liList = ul.getElementsByTagName('li')
for (var i = 0; i < 6; i++) {
    liList[i].onclick = function () {
        alert(i) // 为什么 alert 出来的总是 6，而不是 0、1、2、3、4、5
    }
}

var liList = ul.getElementsByTagName('li')

for (var i = 0; i < 6; i++) {
    !(function (ii) {
        liList[ii].onclick = function () {
            alert(ii) // 0、1、2、3、4、5
        }
    })(i)
}

var list = document.getElementById('list')
var list = document.getElementById('list')
var li = list.children
for (var i = 0; i < li.length; i++) {
    ;(function (j) {
        li[j].onclick = function () {
            alert(j)
        }
    })(i) //把实参i赋值给形参j
}
