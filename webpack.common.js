/*
 * @Page: 
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-05-08 16:30:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-08 17:03:58
 */
const path = require('path');
module.exports = {
  entry: ['babel-polyfill', './src/typescript/main.ts'],
  resolve:
    {
      extensions: ['.ts', '.js', '.json']
    },
};
