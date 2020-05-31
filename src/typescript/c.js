/*
 * @Page: 
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-05-15 19:24:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-15 20:09:47
 */ 

// export default func = () => {
//     console.log('func')
// }

// 或者


function func(params) {
   console.log('func') 
}

export { func as default }


//通过b.js引入并导出func
export { default as func } from './b'

// export default后面可以直接导出值
export default 'lili'