<!--
 * @Page: 高级类型
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-05-12 17:29:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-13 14:37:51
 -->
# 高级类型
#### 交叉类型（和,与）
```ts
const mergeFunc = <T, U>(arg1: T, arg2: U): T & U => {
    let res = {} as T & U
    res = Object.assign(arg1, arg2)
    return res
}
mergeFunc({ a: 'a' },{ b: 'b' })  //对
```
#### 联合类型(或)
```ts
const getLengthFunc = (content: string | number): number => {
    if (typeof content === 'string') { return content.length }
    else { return content.toString().length }
}
getLengthFunc('abc')  //对
getLengthFunc(122)  //对
```

#### 类型保护
```ts
const valueList = [123, 'abc']
const getRandomValue = () => {
    const num = Math.random() * 10
    if (num < 5) {
       return valueList[0] 
    } else {
       return valueList[1] 
    }
}
const item = getRandomValue()
// -------------以下方法会报错
if (item.length) {
    console.log(item.length)
} else {
    console.log(item.toFixed)
}

// ------------解决方法1：使用类型断言
if ((item as string).length) {
    console.log((item as string).length)
} else {
    console.log((item as number).toFixed())
}
// ---------------解决方法2：类型判断
if (typeof item === 'string') {
    console.log(item.length)
} else {
    console.log(item.toFixed())
}
// ---------------解决方法3：类型保护
// 类型保护只能是 string/number/boolean/symbol 中的一种
function isString(value: number | string): value is string {
    return typeof value === 'string'
}
if (isString(item).length) {
    console.log(item.length)
} else {
    console.log(item.toFixed())
}
//---------------解决方法4：instanceof检测
 class CreatebyOne {
     public age = 18
     constructor() {}
 }
  class CreatebyTwo {
    public name = 'dw'
    constructor() {}
 }
 function getRandomItem() {
     return Math.random() < 0.5 ? new CreatebyOne() : new CreatebyTwo()
 }
 const item1 = getRandomItem()
 if (item1 instanceof CreatebyOne) {
    console.log(item.length)
} else {
    console.log(item.toFixed())
}
//---------------解决方法5：undefined/null
let value5 = 12 || undefined

function getSplicedStr(num: number | null): string {
    function getRes(prefix: string) {
        // num!意为规定num不能为null
        return prefix + num!.toFixed().toString()
    }
    num = num || 0.1
    return getRes('li-')
}
console.log(getSplicedStr(3.33)) //li-3
console.log(getSplicedStr()) //li-0.1
```

#### 类型别名
- 直接赋值
```js
type TypeString = string
let str2: TypeString
```
- 用泛型赋值
```js
type PositionType<T> = { x: T, y: T}
const position1: PositionType<number> = {
    x: 1,
    y: 2
}
const position2: PositionType<string> = {
    x: 'acm',
    y: 'ssss'
}
```
- 用泛型接口规定别名
```js
type Childs<T> = {
    current: T,
    child? : Childs<T> // 只能在对象属性中引用类型别名自己
}
let ccc: Childs<string> = {
    current: 'first',
    child: {
        current: 'second',
        child: {
            current: 'third'
        }
    }
}
```

#### 字面量类型
- 字符串字面量
```js
type Derection = 'north' | 'east' | 'south' | 'west'
function getDirectInfo (direction: Derection) {
    return direction.substr(0, 1)
}
getDirectInfo('north')  // 对
getDirectInfo('east')  // 对
getDirectInfo('lili')  // 错
```
- 数字字面量
```js
type Age = 18
interface InfoInterfaces  {
    name: string,
    age: Age
}
const _info: InfoInterfaces = {
    name: 'lili',
    age: 18 // 这里age只能是18
}
```

#### 枚举成员类型
```js
/**
 * 可辨识联合两要素
 * 1. 具有普通得单例类型属性
 * 2.一个类型别名包含了哪些类型联合
 */

interface Square {
    kind: 'square',
    size: number
}
interface Rectangle {
    kind: 'Rectangle',
    width: number,
    height: number
}
interface Circle {
    kind: 'circle',
    radius: number
}
type Shape = Square | Rectangle | Circle
const getNever = (n: never): never => {
   throw Error('error' + n)
}
function getArea (s: Shape): number {
     switch (s.kind) {
         case 'square' : 
            return s.size * s.size 
            break;
         case 'Rectangle': 
            return s.height * s.width; 
            break;
         case 'circle': 
            return s.radius; 
            break;
     } 
}
```

