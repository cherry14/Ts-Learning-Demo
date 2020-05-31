/*
 * @Page: 高级类型
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-05-13 14:59:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-15 15:27:46
 */
// this类型
// 在方法中return this 可以返回这个实例本身，实现链式迭代
 class Counters {
     constructor(public count: number = 0){}
     public add(value: number) {
         this.count += value
         return this
     }
     public substract(value: number) {
         this.count -= value
         return this
     }
 }
 let counter1 = new Counters(10)
 console.log(counter1.add(3).substract(2)) //11

 class PowCounter extends Counters {
     constructor(public count: number = 0) {
         super(count)
     }
     public pow(value: number) {
         this.count = this.count ** value
         return this
     }
 }
let powCounter = new PowCounter(2)
console.log(powCounter.pow(3).add(1).substract(3))

// keyof索引操作符
interface InfoInterfaceAdvanced {
    name: string,
    age: number
}
let infoProp: keyof InfoInterfaceAdvanced
// infoProp = 'name' // 对
// infoProp =  'age' // 对
// infoProp = 'sex' // 错，infoProp中只包含name和age

function getValue<T, K extends keyof T>(obj: T, names: K[]): T[K][]{
    return names.map(n => obj[n])
}
const objInfo = {
    name: 'lili',
    age: 18
}
let infoValues: Array<string | number> = getValue(objInfo, ['name', 'age'])
console.log(infoValues) // ['lili','18']

// []索引访问操作符
type NameTypes = InfoInterfaceAdvanced['name']
function getProperty<T, K extends keyof T>(o: T, n: K): T[K]{
    return o[n]
}
interface Objs<T> {
    [key: string]: T
}
const objs1: Objs<number> = {
    age: 18,
}
let keys: keyof Objs<number>['name']

interface Type {
    a: never;
    b: never;
    c: string;
    d: number;
    e: undefined;
    f: null;
    g: object
}
type Test = Type[keyof Type]


// readonly 只读属性 Partial 可选属性 Pick 从一个对象获取部分属性名组成对象  Record  试用于将对象中的每个属性传入其他场景
interface InfoOne1 {
    age: number
    name: string
    sex: string
}

type ReadonlyType<T> = {
    readonly [P in keyof T]: T[P]
}
type ReadonlyInfo1 = ReadonlyType<InfoOne1>
type RemoveReadOnly<T> = {
    // 去除readonly属性和可选属性
    -readonly [P in keyof T]-?: T[P]
}

const InfoTwo2 = {
    age: 18,
    name: 'lili',
    address: 'beijing'
}
function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>{
    const res: any = {}
    keys.map(key => {
        res[key] = obj[key]
    })
    return res
}
const nameAndAddress = pick(InfoTwo2, ['name','address'])
console.log(nameAndAddress) // {name: 'lili', address: 'beijing'}

function mapObject<K extends string | number, T, U>(obj: Record<K, T>, f: (x: T) => U){
    let res: any = {}
    for (const key in obj) {
        res[key] = f(obj[key])
    }
    return res
}
const names = { 0: 'hello', 1: 'world', 2: 'bye'}
const lengths = mapObject(names, s => s.length)
console.log(lengths) // { 0: 5, 1: 5, 2: 3 } 


// 映射类型
type Proxy<T> = {
    get(): T,
    set(value: T): void;
}
type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>
}
function proxify<T>(obj: T): Proxify<T> {
    const result = {} as Proxify<T>
    for (const key in obj) {
        result[key] = {
            get: () => obj[key],
            set: (value) => obj[key] = value
        }
    }
    return result
}

let props = {
    name: 'lili',
    age: 18
}
let proxyProps = proxify(props)
console.log(proxyProps)  // {name: "lili", age: 18}
const stringIndex = 'a'
const numberIndex = 1
const symbolIndex = Symbol()
type Objs2 = {
    [stringIndex]: string,
    [numberIndex]: number,
    [symbolIndex]: symbol
}
type keysType = keyof Objs2
type ReadonlyTypes<T> = {
    readonly [P in keyof T]: T[P]
}
let Objs3 = {
    aa: 'aa',
    1: 1,
    [symbolIndex]: Symbol()
}
// Objs3.bb = '21'  //错

type MapTopPromise<T> = {
    [K in keyof T]: Promise<T[K]>
}
type Tuple = [number, string, boolean]
type promiseTuple = MapTopPromise<Tuple>
let tuple1:promiseTuple = [
    new Promise((resolve, reject) => resolve(1)),
    new Promise((resolve, reject) => resolve('string')),
    new Promise((resolve, reject) => resolve(false)),
]


// unknow类型
// 任何类型都可以赋值给unknow类型
let value1: unknown
value1 = 'a'
value1 = 123

// 如果没有类型断言或基于控制流的类型细化时，unknow只能赋值给unknow类型和any类型
let value2:unknown
// let value3: string = value2  // 错
let value4: unknown
value2 = value4  // 对


// 如果没有类型断言或基于控制流的类型细化时，不能在他上面进行任何操作
let value5: unknown
// value5 += 1  //错

// 与任何类型组成的极交叉类型,最后都等于其他类型
type type1 = string & unknown  // string
type type2 = number & unknown  // number
type type3 = unknown & unknown // nuknown
type type4 = string[] & unknown // string[]

// 与任何类型组成的极联合类型,最后都等于unknown类型
type type5 = string | unknown  // unknown
type type6 = number | unknown  // unknown
type type7 = unknown | unknown // unknown
type type8 = string[] | unknown // unknown


// never类型是unknown类型的子类型
type type9 = never extends unknown ? true : false  // true

// 只能对unknown进行等或者不等操作， 不能进行其他操作
//  value5 === value6  // 对
//  value5 !== value6  // 对
//  value5 += value6   // 错

// unknown类型的值不能访问他的属性、作为函数调用和作为类创建实例
let value10: unknown
// value10.age  // 错
// value10() // 错
// new value10() // 错

// 试用映射类型时如果遍历的是unknown类型，则不会映射任何属性
type Types1<T> = {
    [P in keyof T]: number
}
type type11 = Types1<any>
type type12 = Types1<unknown>

// T extends U ? X : Y
type Types2<T> = T extends string ? string : number
let index: Types2<false>

type TypeName<T> = T extends any ? T : never
type Type3 = TypeName< string | number> 

type TypeName1<T> = 
    T extends string ? string : 
    T extends number ? number :
    T extends boolean ? boolean :
    T extends undefined ? undefined :
    T extends () => void ? () => void :
    object

type Type4 = TypeName1<() => void>  // 返回函数类型
type Type5 = TypeName1<string[]>  // 不符合条件返回object类型
type Type6 = TypeName1<(() => void) | string[]>  // 返回函数类型或者object类型

type Diff<T, U> = T extends U ? never : T
type Test2 = Diff<string | number | boolean, undefined | number>  // 返回string和boolean


// 条件类型与映射类型结合的例子
type Type7<T> = {
    [K in keyof T]: T[K] extends (() => void) ? K : never
}[keyof T]
interface Part {
    id: number;
    name: string;
    subparts: Part[];
    undatePart(newName: string): void
}
type Test1 = Type7<Part>  // 返回'string'


// 关键字方法
// infer 
type Type8<T> = T extends any[] ? T[number] : T
type Test3 = Type8<string[]> // 返回string类型
type Test4 = Type8<string> // 返回string类型

type Type9<T> = T extends Array<infer U> ? U : T
type Test5 = Type9<string[]> // 返回string类型
type Test6 = Type9<string>  // 返回string类型

// Exclude
type Type10 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>  // 返回'c'

// Extract<T, U>为选取T中可以赋值给U的类型c
type Type11 = Exclude<'a' | 'b' | 'c', 'c' | 'b'>  // 返回'c' | 'b'

// NonNullable
type Type12 = NonNullable<string | number | null | undefined>  // 返回<string | number>
 
// RetrunType<T>
type Type13 = ReturnType<() => string>  // 返回string
type Type14 = ReturnType<() => void>   // 返回void

// InstanceType<T>
class AClass {
    constructor() {}
}
type T1 = InstanceType<typeof AClass>  // 返回AClass
type T2 = InstanceType<any>           // 返回any
type T3 = InstanceType<never>         // 返回never

