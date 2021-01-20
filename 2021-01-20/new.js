function Base() {
    this.id = '123'
    return { test: 'test' }
}

let base = new Base()
console.log(base)

let base2 = {}
base2.__proto__ = Base.prototype
let result = Base.call(base2)
if (result instanceof Object) {
    base2 = result
}
console.log(base2)
