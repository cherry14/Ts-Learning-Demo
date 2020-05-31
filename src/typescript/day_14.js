/*
 * @Page:ES6和node.js的模块 
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-05-12 17:29:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-15 20:12:42
 */
import { name as nameProp, age, sex } from './b'
// age = 6  // 错 import引入不可更改

import * as info from './b'
// *可以直接导入模块中导出的所有
console.log(info.age)  // 18


import FunctionName from './c'
import { default as FunctionName } from './c'
FunctionName()

// c.js中的导出b.js的引入
import { func } from './c'
func()
