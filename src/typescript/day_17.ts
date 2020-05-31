/*
 * @Page:装饰器 
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-05-21 11:24:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-21 17:04:32
 */ 
// 基础
// 装饰器工厂的执行顺序是从前往后执行，装饰器的执行顺序是从后往前执行
function setName() {
    console.log('get setName')
    return (target) => {
        console.log('setName')
    }
}
function setAge() {
    console.log('get setAge')
    return (target) => {
        console.log('setAge')
    }
}
@setName()
@setAge()
class classDesc {
  // 执行顺序为 get setName - get setAge - setAge - setName
}

// 类装饰器
// let sign = null
// function setNamePorp(name: string) {
//   return (target: new() => any) => {
//       sign = target
//       console.log(target.name)
//   }
// }
// @setNamePorp('lili')
// class ClassDD {
//     constructor() {}
// }
// console.log(sign === ClassDD) // true
// console.log(sign === ClassDD.prototype.constructor) // true

// function addName(constructor: new() => any) {
//     constructor.prototype.name = "lili"
// }
// @addName
// class ClassDD {}
// interface ClassDD {
//     name: string
// }
// const d = new ClassDD()
// console.log(d.name) // lili


// function classDescorator<T extends { new(...args: any[]): {} }>(target: T){
//     return class extends target {
//         public newProperty = 'new property'
//         public hello = 'override'
//     }
// }
// @classDescorator
// class Greenter {
//     public property = 'property'
//     public hello: string
//     constructor(m: string) {
//         this.hello = m
//     }
// }
// console.log(new Greenter('world')) // { newProperty: 'new property', hello: 'override', property: 'property'}


// 方法装饰器
// 三个参数 configurable、writable、enumerable若装饰静态成员，参数代表类的构造函数；若装饰实例成员
interface ObjWithAnyKeys {
    [key: string]: any
}
let obj12: ObjWithAnyKeys = {}
Object.defineProperty(obj12, 'name', {
    value: 'lili',
    configurable: true,
    writable: true,
    enumerable: false
})
console.log(obj12.name)
obj12.name = 'test'
console.log(obj12.name)  // lili

// -------------------------
//  function enumerable(bool: boolean) {
//      return  (target: any, propertyName: string, descriptor: PropertyDecorator) => {
//          console.log(target)
//          descriptor.enumerable = bool
//      }
//  }
// class ClassFF {
//     constructor(public age: number) {}
//     @enumerable(false)
//     public getAge() {
//         return this.age
//     }
// }
// const classFF = new ClassFF(18)
// console.log(classFF) // { age: 18 }
// console.log(classFF.getAge()) // 18


// 访问器装饰器
 function enumerable(bool: boolean) {
     return  (target: any, propertyName: string, descriptor: PropertyDecorator) => {
         descriptor.enumerable = bool
     }
 }
class classGG {
    private _name: string
    constructor(name: string){
        this._name = name
    }
    @enumerable(false)
    get name() {
        return this._name
    }
    set name(name) {
        this._name = name
    }
}

// 属性装饰器
function printPropertyName(target: any, propertyName: string) {
    console.log(propertyName)
}
class ClassH {
    @printPropertyName
    public name: string
}


// 参数装饰器
function required(target: any, propertyName: string, index: number) {
   console.log(`修饰的是${propertyName}的第${index + 1}个参数`) 
}
class ClassII {
    public name: string = 'lili'
    public age: number = 18
    public getInfo(prefix: string, @required infoType:string): any {
        return prefix + '' + this[infoType]
    }
}
interface ClassII {
    [key: string]: string | number | Function
}
const classII = new ClassII()
classII.getInfo('hihi', 'age')
