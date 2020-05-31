/*
 * @Page: 接口
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-05-10 10:49:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-10 15:01:39
 */
// 普通类型
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

// 属性检测
interface Vegetable {
    color?: string,
    type: string,
    [prop: string]: any
}
const getVegetable = ({ color, type }: Vegetable) => {
    return `A ${color ? (color + '') : ''} ${type}`
}

// getVegetable({
//     color: 'red',
//     type: 'tomato',
//     size: 20,
// } as Vegetable)

const vegetableInfo = {
    color: 'red',
    type: 'tomato',
    size: 20,
};
getVegetable(vegetableInfo)


// 只读属性
interface Produtions {
    name: string
    readonly price: number
}

let produtionInfo: Produtions = {
    name: 'rice',
    price : 2.8
}
// produtionInfo.name = 'milk'  对
// produtionInfo.price = 3.5    错

interface ArrInter {
    0: number,
    readonly 1: string
}
let arr: ArrInter = [1, 'a']
// arr[0] = 2  对
// arr[1] = 'b' 错


// 接口函数
type AddFunc = (num1: number, num2: number) => number
const add: AddFunc = (n1, n2) => n1 + n2


// 规定属性类型
interface RoleDic {
    [id: number]: string
}
const role2: RoleDic = {
    // a: 'super_admin',  // 错
    // 1: 'admin',        // 对  
}

interface RoleDic {
    [name: string]: string
}
const role3: RoleDic = {
    // a: 'super_admin',  // 对
    // 1: 'admin',        // 对  
}

 
// 继承
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


// 混合

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



