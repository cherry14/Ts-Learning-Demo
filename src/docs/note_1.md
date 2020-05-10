<!--
 * @Page: 
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-05-08 17:37:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-08 17:55:40
 -->
# 使用webpack搭建typescript环境
- 环境搭建
 #### 在自己的项目中运行
 ```js
   npm init
 ```
 #### 或
 ```js
   npm init -y
 ```
 #### 搭建目录
  ```js
   
    ├── dist              // 生产环境的js代码输出文件夹
    │   └── index.html   // html 页面
    ├── .babelrc          // babel 配置文件
    ├── package-lock.json
    ├── package.json
    ├── src
    │   └── typescript
    │       ├── main.ts         // typescript入口文件
    │       ├── .......         // 其他ts文件或模块
    ├── tsconfig.json        // typescript配置文件，IDE会读取
    ├── webpack.common.js    // wepack通用配置文件
    ├── webpack.dev.js       // webpack开发环境配置文件
    └── webpack.prod.js      // webpack生产环境配置文件

 ```

- 安装依赖 
 ```
 npm install --save-dev babel babel-loader babel-polyfill babel-preset-env ts-loader typescript uglifyjs-webpack-plugin webpack webpack-dev-server webpack-merge

 ```
- 文件填写
  #### > dist/index.html
  ```html
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Title</title>
    </head>
    <body>
    <!-- ... -->
    <!-- 引入js文件 -->
    <script src="bundle.min.js"></script>  
    </body>
    </html>


  ```
  #### > package.json
  ```json
   {
       "scripts": {
        // 启动开发环境
        "dev": "webpack-dev-server --client-log-level none --color --inline --hot --config webpack.dev.js",
        // 启动生产环境
        "build": "webpack --config webpack.prod.js --progress --color"
       },
       //.........
   }
  ```
  #### > tsconfig.json
  ```json
  {
    "compilerOptions": {
        "sourceMap": true,
        "allowJs": true,
        "module": "commonjs",
        "removeComments": true,
    // 可以使用 Promise, async, await等新语法
        "target": "es2017"
    }
  }

  ```
  #### > .babelrc
  ```json
   { "presets": [
    ["env", {
        "targets": {
        "browsers": ["last 2 versions", "safari >= 7"]
        }
    }]
    ] }
  ```
  #### > webpack.common.js
    ###### 必须添加 babel-polyfill， 否则生产环境转es5会出错
  ```js
   const path = require('path');
   module.exports = {
    entry: ['babel-polyfill', './src/typescript/main.ts'],
    resolve:
        {
        extensions: ['.ts', '.js', '.json']
        },
    }

  ```
   #### > webpack.common.js
    ```js
    const path = require('path');
    const merge = require('webpack-merge');
    // 引入通用webpack配置文件
    const common = require('./webpack.common.js');

    module.exports = merge(common, {
    module: {
        rules:
        [
            {
            test: /\.tsx?$/,
            loader: 'ts-loader'
            },
        ]
    },
    // 使用 source-map
    devtool: 'source-map',
    // 对 webpack-dev-server 进行配置
    devServer: {
        contentBase: './dist',
        // 设置localhost端口
        port: 9000,
        // 自动打开浏览器
        open: true,
    },
    plugins: [
    ],
    // 设置出口文件地址与文件名
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.min.js'
    },
    });

    ```
  #### > webpack.prod.js
  ```js
   const path = require('path');
    const merge = require('webpack-merge');
    // 引入通用webpack配置文件
    const common = require('./webpack.common.js');
    const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
    // 对js代码进行混淆压缩的插件
    const uglifyJSPlugin = new UglifyJSPlugin();

    // 对babel的配置，内容同.babelrc文件
    const babelOptions = {
    "presets": [
        ["env", {
        "targets": {
            "browsers": ["last 2 versions", "safari >= 7"]
        }
        }]
    ]
    }
    module.exports = merge(common, {
    module: {
        rules: [{
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
            {
            loader: 'babel-loader',
            options: babelOptions
            },
            {
            loader: 'ts-loader'
            }
        ]
        }]},
    devtool: 'cheap-module-source-map',
    plugins: [
        uglifyJSPlugin,
    ],
    // 设置出口文件地址与文件名
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.min.js'
    },
    })

  ```
- 运行项目
#### 开发
```
 npm run dev
```
#### 打包
```
npm run build
```

  

 