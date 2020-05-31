<!--
 * @Page: 声明合并
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-05-21 09:41:50
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-21 11:24:36
--> 
# 声明合并
#### 合并接口
- 非函数接口重名情况下，同名属性类型必须一致
```ts
interface InfoInter {
    name: string
}
interface InfoInter {
    age: number
    name: string // 对
    // name: number // 错
}
```
- 函数接口重名情况下，可用类型断言
```ts
interface InfoInterTwo {
    name: string
    getRes(input: string): number
}
interface InfoInterTwo {
    name: string
    getRes(input: number): number
}
let InfoData: InfoInterTwo
InfoData = {
    name:'lili',
    getRes(text: any): any {
       if (typeof text === 'string') { return text.length } 
       else { return String(text) }
    }
}
console.log(InfoData.getRes('123'))  // 3
```

#### 合并命名空间
```ts
namespace Validations {
    export const checkNumber = () => {}
}
namespace Validations {
    export const checkLetter = () => {}
}
// 等价于
namespace Validations {
    export const checkNumber = () => {}
    export const checkLetter = () => {}
}
```

#### 不同类型合并
- 同名命名空间和类的定义，类必须在命名空间前面
```ts
class ValidationsTwo {
    constructor() {}
    public checkType() {}
}
namespace ValidationsTwo {
    export const numberReg = /^[0-9]+$/
}
console.dir(ValidationsTwo.numberReg) // numberReg作为ValidationsTwo静态属性被输出
```
- 同名命名空间和函数的定义，函数在前
```ts
function countUp() {
    countUp.count++
}
namespace countUp {
    export let count = 0
}
console.log(countUp.count) // 0
countUp()
console.log(countUp.count) // 1
countUp()
console.log(countUp.count) // 2
```
- 同名命名空间和枚举的定义，枚举在前
```ts
enum Colors {
    red,
    green,
    blue,
}
namespace Colors {
    export const yellow = 3
}
console.log(Colors)  // { 0: 'red', 1: 'green', 2:'blue', blue : 2, green: 1, red: 0, yellow: 3 }
```