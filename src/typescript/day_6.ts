/*
 * @Page: 泛型
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-05-11 09:41:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-11 15:05:38
 */
// 泛型变量
// const getArray = <T>(value: T, times: number = 5): T[] => {
//     return new Array(times).fill(value)
// }

// getArray(123, 4) //对
// getArray<number>(123, 4) //对
// getArray('abc', 4) //对
// getArray<string>('abc', 4) //对

// const getArray = <T, U>(param1: T, param2: U, times: number): [T, U][] => {
//     return new Array(times).fill([param1, param2])
// }
// getArray(1, 'a', 2) // 对
// getArray('b', 2, 2) // 对
// getArray(3, 2, 2) // 对
// getArray('c', 'd', 2) // 对
// getArray('c', 'd', 'e') // 错
// getArray(1, 1, 1) // 错


// let getArray: <T>(arg: T, times: number) => T[]
// getArray = (arg: any, times: number) => {
//     return new Array(times).fill(arg)
// }
// getArray(123, 3).map(item => item.toFixed())

// 接口形式定义泛型变量
// type GetArray = <T>(arg: T, times: number) => T[]
// let getArray: GetArray = (arg: any, times: number) => {
//     return new Array(times).fill(arg)
// }

// 接口中使用泛型变量
interface GetArray<T> {
    (arg: T, times: number): T[],
    array: T[]
}




// 泛型约束
// 泛型变量继承接口类型
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

// 在约束中使用类型参数
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





