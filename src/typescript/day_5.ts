/*
 * @Page:函数
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-05-10 15:27:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-10 17:11:28
 */
// 定义类型
function func(arg1: number, arg2: number): number {
    return arg1 + arg2
}
let fun:(x: number, y: number) => number
fun = (arg1: number, arg2: number): number => arg1 + arg2
let arg3 = 3
fun = (arg1: number, arg2: number): number => arg1 + arg2 + arg3

// 接口定义函数
type Add = (x: number, y: number) => number
let addFunc: Add
addFunc = (arg1: number, arg2: number) => arg1 + arg2


// 参数
// 可选参数
type AddFunction = (arg1: number, arg2: number, arg3?: number) => number
// let addFunction:AddFunction
// addFunction = (x: number, y: number) => x + y               // 对
// addFunction = (x: number, y: number, z: number) => x + y + z  //对

// 默认参数
let addFunction = (x: number, y: number = 3) => x + y
addFunction(1)  //对
addFunction(1, 2)  //对

// 剩余参数
const handleData = (arg1: number, ...args: number[]) => {
    args[4] = arg1
}
handleData(1, ...[2,3,4,5])


// 重载
// 只能用Function定义，不可用接口和别名
function handleFunc(x: string): string[]
function handleFunc(x: number): number[]
function handleFunc(x: any): any {
    if(typeof x === 'string') {
        return x.split('')
    }else {
        return x.toString().split('').map(item => Number(item))
    }
}
console.log(handleFunc('abc')) // ['a', 'b', 'c']
console.log(handleFunc('123')) // [1, 2, 3]







