<!--
 * @Page: 
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-05-12 11:20:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-12 15:58:19
 -->
 # 类继承
#### es5继承
```js
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

```
#### es6类继承
```js
// 子类的 _proto_指向父类本身
// 子类的prototype属性_proto_指向父类的prototype属性
// 实例_proto_属性的_proto_指向父类实例的_proto_
class Parent {
   constructor (name) {
       this.name = name
   } 
   getName () {
       return this.name
   }
}
class Child extends Parent {
    constructor (name, age) {
        super(name)
        this.age = age
    }
}
const c = new Child('lili', 13)
console.log(c) // {name:'lili', age: 13}
console.log(c.getName()) // lili
console.log(c instanceof Child)  // true
console.log(c instanceof Parent) // true
console.log(Child.getName()) // tr
console.log(Object.getPrototypeOf(Child) === Parent) // true
```


#### super()
- super()在普通方法中指向 -> 父类原型对象
```js
class Parent {
    constructor () {
        this.type = 'parent'
    }
    getName () {
        return this.type
    }
}
Parent.getType = () => {
    return 'is Parent'
}

class Child extends Parent {
    constructor () {
      super()
      console.log('constructor:' + super.getName())
    }
    getParentName () {
        console.log('getParentName:' + super.getName())
    }
    getParentType () {
        console.log('getParentName:' + super.getType())
    }
}
const c = new Child()
console.log(c.getParentName()) //对
console.log(c.getParentType()) //错，普通方法中super指向 -> 父类原型对象
```
- super()在静态方法中指向 -> 父类
```js
class Child extends Parent {
    constructor () {
      super()
      console.log('constructor:' + super.getName())
    }
    getParentName () {
        console.log('getParentName:' + super.getName())
    }
    static getParentType () {
        console.log('getParentName:' + super.getType())
    }
}
console.log(Child.getParentType()) //对，静态方法super中指向 -> 父类
```

#### this指向
- 在父类原型定义方法，方法中的this指向子类实例
```js
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
       // es5的构造函数是先创建子类this，然后再将父类方法添加到this上
       // es6的类是先从父类取到实例对象this,调用super()后再将子类实例方法加到this上,所以这里this在super()之后调用
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
```

#### 原生函数的继承
- 原生的构造函数在es5中没法继承，es6中的继承是这样的
```js
// 以继承Array为例
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
```

