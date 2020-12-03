function sum(x, y) {
    return x + y
}
const curry = (fn, currArgs = []) => {
    return function () {
        let args = Array.from(arguments)
        ;[].push.apply(args, currArgs)
        if (args.length < fn.length) {
            return curry.call(this, fn, ...args)
        }
        return fn.apply(this, args)
    }
}

console.log(curry(sum)(1)(7)(2)) // 17
