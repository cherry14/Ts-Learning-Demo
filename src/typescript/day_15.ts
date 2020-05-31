/*
 * @Page: 模块与命名空间
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-05-19 10:24:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-19 15:26:31
 */ 

 // 模块
// a.ts
export interface FunctionInterface {
    name: string;
    (arg: number): string
}
export class ClassC {
    constructor() {}
}
class ClassD {
    constructor() {}
}
export { classD } 
// 或
export { classD as classNamedD}
export * from './b'
export { name } from './b'
export { name as nameProp} from './b'

// b.ts

const name = 'lili'
const age = 18

// c.ts
export default 'ccc' // 可直接导出值，一个模块一个exprot default


// ts 中新增
// index.ts
import name = require('./d')

// d.ts
const name2 = 'name2'
export = name2


// 命名空间
// index.ts
var Validation;
(function (Validation) {
    Validation.isLetterReg = /^[a-zA-Z]+$/
    Validation.checkLetter = function (text) {
        return Validation.isLetterReg.test(text)
    };
})(Validation || (Validation = {}))
/// <reference path="space.ts" />

let isLetter = Validation.checkLetter('abc')
// space.ts
namespace Validation {
    const isLetterReg = /^[a-zA-Z]+$/
    export const isNumberReg = /^[0-9]+$/
    export const checkLetter = (text: any) => {
        return isLetterReg.test(text)
    }
}
