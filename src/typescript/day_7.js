/*
 * @Page: 类
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-05-11 15:49:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-12 10:54:39
 */
// class Point {
//     constructor (x, y) {
//         this.x = y
//         this.y = y
//     }
//     getPosition(){
//         return `(${this.x},${this.y})`
//     }
// }
// const p1 = new Point(1, 2)
// console.log(p1)
// console.log(p1.hasOwnProperty('x')) //ture
// console.log(p1.hasOwnProperty('getPosition'))  //true
// console.log(p1._proto_.hasOwnProperty('getPosition'))  //false



class Info {
    constructor (age) {
        this._age = age
    }
    set age (newAge) {
        console.log(newAge)
        this._age = newAge
    }
    get age () {
       return this._age
    }
}

const info = class {
    constructor (age) {
        this._age = age
    }
    set age (newAge) {
        console.log(newAge)
        this._age = newAge
    }
    get age () {
       return this._age
    } 
}

const testInfo = new Info()


// 静态方法
//只有静态方法没有静态属性，静态方法实例不可调用，只能用类自身调用
class Point {
    z = 0
    constructor (x, y) {
        this.x = x
        this.y = y
    }
    getPosition(){
        return `(${this.x},${this.y})`
    }
    static getClassName () {
        return Point.name
    }
}
const p = new Point(1, 2) //对
p.getPosition()       // 对
p.getClassName()      // 错
Point.getClassName()  // 对
console.log(new Point)        //{x: undefine, y: undefine, z: 0}

// 若需要调动静态属性, 使用类进行添加
Point.f = 5


// 私有方法
// 第一种
class Point {
    func1 () {

    }
    _func2 () {

    }
}
// 第二种
const _func2 = () => {}
class Point {
    func1 () {
      _func2.call(this)
    }
 
}
const p = new Point()
p._func2() // 错
_func2()   // 错，封装模块时候不可行
// 第三种
// a.js
const func1 = Symbol()
export default class Point {
    static [func1] () {
        
    }
}

// b.js
import Point from './a.js'
const p = new Point()
console.log(p) // 错，symbol可实现私有方法







