/*
 * @Page: 
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-05-15 17:06:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-15 17:24:39
 */ 
// export 不导出单独的值，导出命令语句
const name = 'lili'
const age = 18
const address = 'wuhan'
export { name, age, address }
// export name //错

export function func () {}
export class A {}

function func1 () {}
class B {}
const b = ''
export {
    func1 as Function,
    B as ClassB,
    b as StringB,
    b as string
}