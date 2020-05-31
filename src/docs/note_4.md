<!--
 * @Page: 
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-05-10 10:38:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-10 15:21:05
 -->
# 接口
#### 普通类型
```ts
interface NameInfo {
    firstName: string,
    lastName: string
}
const getFullName = ({ firstName, lastName }: NameInfo): string => {
    return `${firstName} ${lastName}`
}
getFullName({
    firstName: '111',
    lastName: 'li'
})
```

#### 属性检测
- 可选填属性，在属性名后面添加问好
```ts
// 属性检测
interface Vegetable {
    color?: string,  // color属性为可选
    type: string,
}
const getVegetable = ({ color, type }: Vegetable) => {
    return `A ${color ? (color + '') : ''} ${type}`
}
```
- 新增属性
```ts
interface Vegetable {
    color?: string,
    type: string,
}
const getVegetable = ({ color, type }: Vegetable) => {
    return `A ${color ? (color + '') : ''} ${type}`
}
// 第一种：在属性中添加prop
interface Vegetable {
    color?: string,
    type: string,
    [prop: string]: any 
}
getVegetable({
    color: 'red',
    type: 'tomato',
    size: 20,
})
// 第二种：在调用中增加断言类型
getVegetable({
    color: 'red',
    type: 'tomato',
    size: 20,
} as Vegetable)
//第三种:使用第三方变量赋值
const vegetableInfo = {
    color: 'red',
    type: 'tomato',
    size: 20,
};
getVegetable(vegetableInfo)
```
- 只读属性
```ts
// 例1
interface Produtions {
    name: string
    readonly price: number  // 添加readonly为只读属性，值不可更改
}

let produtionInfo: Produtions = {
    name: 'rice',
    price : 2.8
}
produtionInfo.name = 'milk'  // 对
produtionInfo.price = 3.5    // 错

// 例2
interface ArrInter {
    0: number,
    readonly 1: string
}
let arr: ArrInter = [1, 'a']
arr[0] = 2   // 对
arr[1] = 'b' // 错
```

#### 接口函数
```ts
// 格式化之后函数名前的interface会变成type
type AddFunc = (num1: number, num2: number) => number
// 格式化之后函数自动转化成箭头函数
const add: AddFunc = (n1, n2) => n1 + n2
```

#### 限定属性类型
- 属性为number时候不可更改
```ts
interface RoleDic {
    [id: number]: string
}
const role2: RoleDic = {
    a: 'super_admin',  // 错
    1: 'admin',        // 对  
}
```
- 属性为string时可更改
```ts
// 对象中的key会自动转化成"key"模式，使用数字也可识别
interface RoleDic {
    [name: string]: string
}
const role3: RoleDic = {
    a: 'super_admin',  // 对
    1: 'admin',        // 对  
}
```

#### 继承
- 当继承父接口必填属性时，子接口继承后也为必填属性
```ts
interface Parent {
    sex: string
}
interface Child extends Parent {
    radius:number
}

const eg:Child = {
    sex: 'dd',  // 必写
    radius:22   // 必写
}

```

#### 混合类型
```ts
interface Counter {
   (): void,
   count: number
}
const getCounter = ():Counter => {
    const c = () => c.count++
    c.count = 1
    return c
}

const counter:Counter = getCounter()
counter() // 每执行一次 count属性的值+1
```
