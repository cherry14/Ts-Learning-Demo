<!--
 * @Page: tsconfig.json配置
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-05-24 09:26:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-24 16:57:28
--> 
# tsconfig.json配置
```json
{
    "compilerOptions": {
        "target": "es5",  // target用来指定编译之后的版本目标version: 'ES3' (default), 'ES5','ES2015','ES2016'.'ES2017'
        "module": "commonjs", // 用来指定要使用的模块标准: 'none','commonjs','and','system','umd','es2015'
        "lib": [
            "es6",
           "dom"
        ],  //lib指定要包含在编译中的库文件，这个我们在前面课程中讲过一点，如果要使用一i写es6的新语法，你需要引入ES6这个库
        "allowedJs": true, // 值为true或false， 用来指定事都编译js文件，默认是false，即不编译js文件
        "checkJs": true,   // 值为true或false，用来指定是否检查和报告JS文件中错误，默认是false
        "jsx": "preserve", // 指定jsx代码用于得开发环境:'presrve','react-native', or 'react'. */
        "declarationMap": true, // 值true或false，用来指定编译时是否为.d.ts文件生成.map文件
        "declaration": true, // 值为true或者false，用来指定事都在编译时候生成相应得.d.ts文件
        "souceMap": true, // 值为true或false，用来指定编译时是否生成.map文件
        "outFile": "./" , // 值为一个文件路径名，用于指定讲输出文件合并为一个文件，比如设置"./dist/main.js",则输出得文件为一个mian.js文件，但是注意，只有设置module的值为amd或和system才支持这个配置
        "outDir": "./", // 用来指定输入文件夹路径字符串，输出的文件都讲放置在这个文件夹
        "rootDir":"./" , //用来指定编译文件的根目录，编译器会在根目录查找入口文件，如果编译器发现以rootDir的值作为根目录查找入口文件并不会把所有文件加载进去的话会报错，但是不会停止编译
        "composite": true, //是否编译构建应用项目
        "removeComments": true, // 值为true或false，用于指定是否将编译后的文件中周注释删掉，设为true的话即删掉注释，默认为false
        "noEmit": true, //不生成编译文件，不常用这个配置
        "importHelpers": true, // 值为true或false，指定是否引入tslib里面的辅助函数，默认为false
        "downlevelIteration": true, // 当target为"ES5"或"ES3"时，为"for-of", spread 和 destructuring中的迭代器提供完全支持
        "isolatedMoules": true, // 的值为true或false，指定是否将每个文件作为单独的模块，默认为true

        "strict": true, // 值为true或false，用于指定是否启动所有类型检查，如果设为true则会同时开启下面这几个产品都为true, 默认为false
    "noImplicitAny": true, // 默认为false，如果没有为值设置明确类型，编译器默认为any类型，设置为true时。没有设置明确类型则会报错
    "strictNullChecks": true, // 值为true或false，为true时，null和undefined不能赋值给非这两种类型的值，反之亦然，除了any类型，例外: undefined可以赋值给void类型
    "strictFunctionTypes": true, //值为true或false， 用来指定是否使用函数参数双向协变检查，还记得我们讲类型
    "strictBindCallApply":true, // 值为true或者false， 设置为true会对bind apply call 绑定的方法的参数进行严格检测
    "strictPropertyInitialization": true, // 值为true或者false， 设为true后会检查类的非undefined属性是否已经在构造函数中初始化，如果开启这项，需要同时开启strictNUllchecks
    "noImplicitThis": true, // 当this表达式值为any时生成一个错误
    "alwaysStrict": true, // 始终以严格模式检测每个模块，并且在编译之后的js文件中加入"use strict"字符串，用来告诉浏览器该js为严格模式


    "noUnsedLocals": true,  // 值为true或false，用于检查是否有定义了但是没有使用变量，对于这一点的检测，使用ESlint可以在你书写代码的时候提示，你可以配合使用
    "noUnusedParameters": true, // 值为true或false，用于检查是否在函数中使用参数，也可与eslint配合使用
    "noImpolicitRetruns": true, // 值为true或false，检测函数中是否有返回值，设为true后，函数没有返回值会报错
    "noFallthroughCasesInSwitch": true, // 值为true或false，设置为true时，检查switch中是否有case没有使用break

    "moduleResolution":"node", // 用于选择模块解析策略，有"node"和“classic”两种类型，
    "baseUrl":".", // 用于设置解析非相对模块名称的基本目录，相对模块不会受baseURL的影响
    "paths": {
        "*": ["node_modules/@types","src/typings"]
    },   // paths用于设置模块名到基于baseUrl的路径映射
    "rootDirs": [
        "src/module",
        "src/core"
    ],  // 可以指定一个路径列表，在构建时编译器会将这个路径列表中的路径中的内容都放到一个而文件夹中
    "typeRoots": [], // 用来指定声明文件或文件夹的路径列表，如果指定了此项，则只有在这里列出的声明文件才会加载
    "types":[], // types用来指定需要包含的模块， 只有在这里列出的模块声明文件才会被加载进来
    "allowSyntheticDealutImports": true, // 用来指定允许从没有默认导出的模块导入
    "esModuleInterop": true, // 通过为导入内容创建命名空间，实现Commonjs和ES模块质检互操作性
    "preserveSymlinks": true, // 不把符号链接解析为其真实路径，具体可以了解下webpack和nodejs的symlink相关知识
    "sourceRoot": "", // 用于指定调试器应该找到TypeScript文件而不是源文件位置，这个值干会被写进.map文件里
    "mapRoot": "", // 用于指定调试器找到映射文件而非生成文件的位置，指定的map文件根路径，该选项会影响.map文件中的source属性
    "inlineSourceMap": true, // 值为true或false，指定是否将map文件的内容和js文件编译在一个同一个js文件中，如果设置为true，则map的内容会以//# sourceMappingURL = 然后接base64字符串的形式插入在js文件底部
    "inlineSources": true, // 指定是否进一步将.ts文件的内容也包含到输出文件中

    "experimentalDEcorators": true, // 值为true或false，用于指定是否启用实验性的装饰器特性
    "emitDEcratorMetadata": true, // 值为指定是否为装饰器提供元数据支持，关于元数据，也是ES6新标准，可以通过Reflect提供的静态方法获取元数据，如果需要使用Reflect的一些方法，需要引入ES2015.Reflect这个库
    },
    "files": [], // files可以配置一个数组列表，里面包含指定文件的相对或绝对路径，编译器在编译的时候只会编译包含在files中列出的文件，如果不指定，则取决于有没有设置include选项，如果没有include选项，则默认会编译根目录以及所有子目录中的文件，这里列出的路径必须是指定的文件，而不是某个文件夹，而且不能使用* ？ **/ 等通配符
    "include": [], // include也可以指定要编译的路径列表，但是和files的区别在于，这里路径可以生hi文件夹，也可以是文件，可以使用相对和绝对路径，而且可以使用通配符，比如"./src"即表示要编译src文件夹下的所有文件以及子文件夹的文件
    "exclude": [], // 与include相反，exclude表示要排除的，不编译的文件，也可以指定一个列表，规则和include一样，可以是文件可以是文件夹，可以是相对路径或绝对路径，咳哟i使用通配符
    "extends": "", // extends可以通过指定一个其他的tsconfig.json文件路径，来继承这个配置文件里的配置，继承来的文件配置会覆盖当前文件定义的配置。Ts在3.2版本开始，支持继承一个来自Node.js包的tsconfig.json文件
    "compileOnSave": true, // 值为true或false，设置为true时，在我们编辑了项目中文件保存的时候，编辑器会根据tsconfig.json的配置重新生成文件，不过这个要编译器支持
    "references": [], // 一个对象数组，指定要引用的项目

    

}

```