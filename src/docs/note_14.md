<!--
 * @Page: ES6和node.js的模块
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-05-12 17:29:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-15 20:31:40
 -->
# ES6和node.js的模块
#### export
- export不单独导出值，导出命令结构
```js
// a.js
const name = 'lili'
const age = 18
const address = 'wuhan'
export { name, age, address }
// export name //错
```
- 导出方式比较
```js
// a.js
// 可以这样导出
export function func () {}
export class A {}

// 也可以这样导出
function func1 () {}
class B {}
const b = ''
export {
    func1 as Function,
    B as ClassB,
    b as StringB,
    b as string
}
```
- 别的模块引入内容并导出
```js
export { name as nameProp } from './b'
```
```js
export * from './b'
```

```js
export { name as defauly } from './b'
```


#### export defalt
- 第一种导出方式
```js
// c.js
export default func = () => {
    console.log('func')
}
```
- 第二种导出方式
```js
// c.js
function func(params) {
   console.log('func') 
}

export { func as default }
```

- 通过b.js引入并导出func
```js
// c.js
export { default as func } from './b'
```
- export defalut
```js
// c.js
export default 'lili'
```

#### import
```js
// b.js
export const name = "lili"
export const age = 18
export const sex = "0"
```
- import引入不可更改
```js
// index.js
import { name as nameProp, age, sex } from './b'
// age = 6   错
```
- *可以直接导入模块中导出的所有
```js
// index.js
import * as info from './b'
console.log(info.age)  // 18
```

- export default 导出的模块内容导入时名称可以不相同
```js
// index.js
import FunctionName from './c'
import { default as FunctionName } from './c'
FunctionName()
```
- c.js中的导出b.js的引入
```js
import { func } from './c'
func()
```

- 同时具有export与export default如何导入
```js
// d.js
export const name = "lili"
export const age = 18
export const sex = "0"
export default sex = "男"
```
```js
// index.js

```

