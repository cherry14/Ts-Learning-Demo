/*
 * @Page: 类基础
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-05-12 11:19:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-12 15:38:18
 */
// es5继承
function Food () {
  this.type = 'food'
}
Food.prototype.getType = function () {
    return this.type
}
function Vegetables (name) {
    this.name = name
}
Vegetables.prototype = new Food()
const tomato = new Vegetables('tomato')
console.log(tomato.getType())

// es6类继承
// class Parent {
//    constructor (name) {
//        this.name = name
//    } 
//    getName () {
//        return this.name
//    }
// }
// class Child extends Parent {
//     constructor (name, age) {
//         super(name)
//         this.age = age
//     }
// }
// const c = new Child('lili', 13)
// console.log(c) // {name:'lili', age: 13}
// console.log(c.getName()) // lili
// console.log(c instanceof Child)  // true
// console.log(c instanceof Parent) // true
// console.log(Child.getName()) // tr
// console.log(Object.getPrototypeOf(Child) === Parent) // true

// super()
// super在普通方法中指向 -> 父类原型对象
// super在静态方法中指向 -> 父类

// class Parent {
//     constructor () {
//         this.type = 'parent'
//     }
//     getName () {
//         return this.type
//     }
// }
// Parent.getType = () => {
//     return 'is Parent'
// }

// class Child extends Parent {
//     constructor () {
//       super()
//       console.log('constructor:' + super.getName())
//     }
//     getParentName () {
//         console.log('getParentName:' + super.getName())
//     }
//     getParentType () {
//         console.log('getParentName:' + super.getType())
//     }
// }
// const c = new Child()
// console.log(c.getParentName()) //对
// console.log(c.getParentType()) //错，普通方法中super指向 -> 父类原型对象

// class Child extends Parent {
//     constructor () {
//       super()
//       console.log('constructor:' + super.getName())
//     }
//     getParentName () {
//         console.log('getParentName:' + super.getName())
//     }
//     static getParentType () {
//         console.log('getParentName:' + super.getType())
//     }
// }
// console.log(Child.getParentType()) //对，静态方法super中指向 -> 父类


// 在父类原型定义方法，方法中的this指向子类实例
class Parent {
  constructor(){
      this.name = 'parentName' 
  }
  print () {
     console.log(this.name)
  }
}
class Child extends Parent {
    constructor () {
       super()
       this.name = 'childName' 
    }
    childPrint () {
        //此时super指向父类原型对象
        super.print()
    }
}
const c = new Child()
console.log(c.childPrint()) // childName


// 子类的 _proto_指向父类本身
// 子类的prototype属性_proto_指向父类的prototype属性
// 实例_proto_属性的_proto_指向父类实例的_proto_

// Boolean
// Number
// String
// Array
// Date
// Function
// RegExp
// Error
// Object

// 原生的构造函数在es5中没法继承，es6中的继承是这样的（Array为例）
class CustomArray extends Aarry {
    constructor (...args) {
        super(...args)
    }
}
const arr = new CustomArray(3)
console.log(arr) // [empty * 3]
console.log(arr.fill('+'))  // ['+', '+', '+']
const arr1 = new CustomArray(3, 4, 5)
console.log(arr1) // [3, 4, 5]
console.log(arr1.join('_'))  // +_+_+


// es5的构造函数是先创建子类this，然后再将父类方法添加到this上
// es6的类是先从父类取到实例对象this,调用super()后再将子类实例方法加到this上