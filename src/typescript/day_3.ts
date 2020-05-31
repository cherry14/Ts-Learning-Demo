/*
 * @Page: Symbol
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-05-12 16:00:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-12 16:15:57
 */
// Symbol属于es6基本数据类型,Symbol值是独一无二的
const s1 = Symbol()
const s2 = Symbol()
// console.log(s1 === s2)  //错，不可比较，在浏览器中永远返回false
const s3 = Symbol('li')
const s4 = Symbol('li')
// console.log(s3 === s4)  //错，传入相同参数产出值也是独一无二的
