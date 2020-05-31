/*
 * @Page: mixin混入
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-05-21 17:41:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-21 19:46:37
 */ 
// 对象混入
interface ObjectA {
    a: string
}
interface ObjectB {
    b: string
}
let Aa: ObjectA = {
    a: 'a'
}
let Bb: ObjectB = {
    b: 'b'
}
let AB = Object.assign(Aa, Bb)
console.log(AB) // { a: 'a', b: 'b' }

// 类混入
class ClassAa {
    public isA: boolean
    public funcA() {}
}
class ClassBb {
    public isB: boolean
    public funcB() {}
}
class ClassAB implements ClassAa, ClassBb {
    public isA: boolean = false
    public isB: boolean = false
    public funcA: () => void
    public funcB: () => void
    constructor() {}
}
function mixins(base: any, from: any[]) {
    from.forEach((fromItem) => {
        Object.getOwnPropertyNames(fromItem.prototype).forEach(key => {
            console.log(key)
            base.prototype[key] = fromItem
        })
    })
}
mixins(ClassAB, [ClassAa, ClassBb])
const ab = new ClassAB()
console.log(ab)  // {isA: false, isB: false, _proto:funcA f() funcB f()}
