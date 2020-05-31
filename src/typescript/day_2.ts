/*
 * @Page: 
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-05-08 16:53:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-10 10:49:17
 */
// 布尔类型
let bool: boolean = false
bool = !(0)

// 数值类型
let num: number = 1234

// 数组类型
let arr1: number[] = [1, 3, 4]
let arr2: Array<number> = [2, 3, 4]
let arr3: Array<number | string> = [2, 3, 4, 'aaa']
let arr4: (string | number)[] = ['1', 2, 3]
let arr5: Array<void> = []
let arr6: Array<any> = [1, 2, 2, '5', 'aaa', true, { a: '12' }]


// 元祖类型(固定长度固定类型)
let tuple: string

// 枚举类型
enum Roles {
    admin = 12,
    customer = 1,
    user = 8
}
 console.log(Roles.admin)


// any类型
let value: any
value = 'abc'
value = 123
value = false

// void类型（非任何类型的类型）
const consoleText = (text: string): void => {
    console.log(text)
}
let v: void
v = undefined
// v = null (不能赋值为null, null会报错)


// null和undefine
let u: undefined
u = undefined
let n: null
n = null


// never类型
const errorFunc = (message: string): never => {
    throw new Error(message)
}

const infiniteFunc = (): never => {
    while (true) { }
}

let nerverValue = (() => {
    while (true) {}
})()
let numberValue: number = 123
// nerverValue = numberValue (错误：数值类型不可赋值给nerver类型)
// numberValue = nerverValue (正确：nerver类型可赋值给数值类型)



// object类型
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


// 类型断言
const getLength = (target: string | number): number => {
    if ((<string>target).length || (target as string).length == 0) {
        // number类型没有length属性，不加类型断言会报错
        // (<string>target) 和 (target as string) 两种写法都可以
        return (target as string).length
    } else {
        return target.toString().length
    }
}



