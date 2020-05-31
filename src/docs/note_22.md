<!--
 * @Page: npm发包
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-05-24 17:20:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-24 20:30:25
--> 
# npm发包
#### 1.npm注册npm 账号
(https://www.npmjs.com/signup)[https://www.npmjs.com/signup]


#### 2.打开到自己项目目录下.

#### 3.登录，输入npm adduser（第一次发布用，以后用 npm login），按步骤输入正确的username/password/email
#### 4.查看自己的登录状态，npm whoami
#### 5.一定要使用npm源，查看自己npm源，不能用淘宝源，否则不支持发布。
#### 6.初始化npm项目
```
npm init
```
- 根据发的包进行填写：
```json
{
  "name": "wenger", // 你自己要发布的包名称， npm 下载也用此名字
  "version": "1.0.1", // 版本号，每次重新发布都需要更新版本号
  "description": "common tool library",  
  "main": "index.js", //程序的入口文件，默认是index.js.
  "license": "MIT",
  "private": false,
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["tool library"],  // 便于搜索npm 包
  "author": "meng010387@126.com",
  "devDependencies": {  
    "lodash": "^4.17.11",
    "validator": "^9.4.1"
  }  // 你要发的包，所依赖的开发环境下的包。
}
```
#### 7.发包
- 为保证是自己的npm号，可以重新登录一次
```
npm adduser
```
- 登录完成执行发包命令
```
npm publish
```

#### 8.删除包
- npm对删除包支持不太友好，因为你发布的包有可能已经有很多人在用了，如果你删除，可能会造成很大的影响。npm unpublish --force，只能支持删除24小时之内发布的项目，而且删除之后，在npm还是可以搜索到的，所以不建议删除

#### 9.包权限管理
- 查看模块拥有者 
```
npm owner ls <package_name> 
```
- 添加一个发布者 
```
npm owner add <user> <package_name> 
```
- 删除一个发布者 
```
npm owner rm <user> <package_name>
```


