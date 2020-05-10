<!--
 * @Page: 
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-05-08 19:08:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-10 10:11:15
 -->
# 数据类型

#### 布尔类型
- 可直接赋值也可转化赋值
```ts
 let bool:boolean = false
 bool = !(0)
```

#### 数值类型
- 整数浮点数均可
```ts
 let num:number = 1234
 num = 100.333
```

#### 数组类型
- 单类型数组（以数值类型为例子）
```ts
let arr1:number[] = [1, 3, 4]
let arr2:Array<number> = [2, 3, 4]
```
- 多类型数组(以数值类型和字符串类型为例子)
```ts
let arr3:Array<number | string> = [2, 3, 4, 'aaa']
let arr4:(string | number)[] = ['1', 2, 3]
```
- 任意类型数组
```ts
 let arr6:Array<any> = [1, 2, 2, '5', 'aaa', true, { a: '12'}]
```
- 无类型数组(数组中不能传任何类型的值)
```ts
let arr5:Array<void> = []  //只能赋值空数组
```

#### 元祖类型
- 固定长度和类型的数组
```ts
let tuple: [string, number, boolean]
tuple = ['string', 111, true]  //对
tuple = ['string', 111]        //错
tuple = ['string', true, 111]  //错
```

#### 枚举类型
- 普通类型
```ts
enum Roles {
    admin,
    customer,
    user
}
console.log(Roles.admin)  // 0
console.log(Roles.customer) // 1
console.log(Roles.user)  // 2
```
- 赋值类型
```ts
enum Roles {
    admin = 1,
    customer,
    user
}
console.log(Roles.admin)  // 1
console.log(Roles.customer) // 2
console.log(Roles.user)  // 3


enum Roles {
    admin = 12,
    customer = 1,
    user = 8
}
console.log(Roles.admin)  // 12
console.log(Roles.customer) // 1
console.log(Roles.user)  // 8
```

#### any类型
- 当变量为any类型，各种类型赋值均可
```ts
let value: any
value = 'abc'
value = 123
value = false
```
#### void类型（非任何类型的类型）
- 变量为void
```ts
let v: void
v = undefined
// v = null (不能赋值为null, null会报错)
```
- 函数无返回值时候需要设置为void
```ts
const consoleText = (text: string): void => {
    console.log(text)
}
```

#### null和undefine
```ts
let u: undefined
u = undefined
let n: null
n = null
```

#### never类型
- 函数
```ts
//当函数返回一个错误值时
const errorFunc = (message: string): never => {
    throw new Error(message)
}
//当函数无限循环时
const infiniteFunc = (): never => {
    while(true){}
}

```
- 赋值
```ts
let nerverValue = (() => {
    while(true){}
})()
let numberValue:number = 123
// nerverValue = numberValue (错误：数值类型不可赋值给nerver类型)
// numberValue = nerverValue (正确：nerver类型可赋值给数值类型)
```

#### object类型
```ts
let obj1 = {
    name: "zhang"
}
let obj2 = obj1
obj2.name = "li"
console.log(obj1.name) // li

 function getObject(obj: Object): void {
     console.log(obj)
 }
 getObject(obj2)
```

#### 断言类型
```ts
const getLength = (target: string | number): number => {
    if((<string>target).length || (target as string).length == 0){
        //number类型没有length属性，不加类型断言会报错
        // (<string>target) 和 (target as string) 两种写法都可以
        return (target as string).length
    }else{
        return target.toString().length
    }
}
```



