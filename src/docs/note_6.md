<!--
 * @Page: 泛型笔记
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-05-11 09:41:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-11 20:21:51
 -->
 # 泛型
#### 泛型变量
- 单个变量
```ts
// 泛型变量使用任意字母大写即可，单个泛型变量习惯性默认为T
const getArray = <T>(value: T, times: number = 5): T[] => {
    return new Array(times).fill(value)
}
//泛型可使用任意类型传参，不规定类型时，ts可自动识别
getArray(123, 4) //对
getArray<number>(123, 4) //对
getArray('abc', 4) //对
getArray<string>('abc', 4) //对
```
- 多个变量
```ts
const getArray = <T, U>(param1: T, param2: U, times: number): [T, U][] => {
    return new Array(times).fill([param1, param2])
}
getArray(1, 'a', 2) // 对
getArray('b', 2, 2) // 对
getArray(3, 2, 2) // 对
getArray('c', 'd', 2) // 对
getArray('c', 'd', 'e') // 错

```
- 接口形式定义泛型变量
```ts
type GetArray = <T>(arg: T, times: number) => T[]
let getArray: GetArray = (arg: any, times: number) => {
    return new Array(times).fill(arg)
}
```

#### 泛型约束
- 使用接口约束
```ts
interface ValueWithLength {
    length: number
}
const getArray = <T extends ValueWithLength>(arg: T, times: number): T[] => {
    return new Array(times).fill(arg)
}
getArray([1, 2], 3) //对
getArray('abc', 3) //对
getArray(123, 3) //错
getArray({length: 2}, 3) //对
```
- 使用类型参数进行约束
```ts
const getProps = <T, K extends keyof T>(object: T, propName: K) => {
    // keyof 可以理解为一个对象上所有属性名组成的数组
    return object[propName]
}
const objs = {
    a: 111,
    b: 222
}
getProps(objs, 'a') //对
getProps(objs, 'b') //对
getProps(objs, 'c') //错

```

