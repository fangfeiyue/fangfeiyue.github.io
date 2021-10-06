(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{1091:function(t,s,e){"use strict";e.r(s);var n=e(28),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("打开终端，在终端输入以下命令并执行：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("npm install rollup rollup"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("plugin"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("typescript2 @rollup"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("plugin"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("node"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("resolve @rollup"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("plugin"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("replace  rollup"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("plugin"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("serve typescript "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),t._v("\n")])])]),e("p",[t._v("上述安装的包的简介：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("包名")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("功能")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("rollup")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("打包工具")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("rollup-plugin-typescript2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("解析ts插件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("@rollup/plugin-node-resolve")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("解析第三方模块")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("@rollup/plugin-replace")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("替换插件")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("rollup-plugin-serve")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("启动本地服务插件")])])])]),t._v(" "),e("p",[t._v("项目根目录创建rollup.config.js文件：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" path "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ts "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rollup-plugin-typescript2'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 解析ts")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" nodeResolve "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@rollup/plugin-node-resolve'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 识别node_modules包")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" replace "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@rollup/plugin-replace'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 替换环境变量")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" serve "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rollup-plugin-serve'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tsPlugin "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  tsconfig"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tsconfig.json'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  input"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/index.ts'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  output"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'VueReactivity'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    format"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'umd'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    file"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist/bundle.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    sourcemap"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("nodeResolve")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      extensions"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.ts'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    tsPlugin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'process.env.NODE_ENV'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'development'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("serve")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      open"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      openPage"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/public/index.html'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      port"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3002")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      contentBase"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("终端输入如下命令按回车键，初始化ts配置文件")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("npx tsc "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("init\n")])])]),e("p",[t._v("执行完上述命令后根目录会生成一个tsconfig.json文件，将"),e("code",[t._v('"module":"commonjs"')]),t._v("改为"),e("code",[t._v('"module":"ESNext"')]),t._v("。")]),t._v(" "),e("p",[t._v("tsconfig.json中具体代码如下：")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compilerOptions"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Visit https://aka.ms/tsconfig.json to read more about this file */")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Basic Options */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "incremental": true,                   /* Enable incremental compilation */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"target"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es5"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                          "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"module"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ESNext"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "lib": [],                             /* Specify library files to be included in the compilation. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "allowJs": true,                       /* Allow javascript files to be compiled. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "checkJs": true,                       /* Report errors in .js files. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \"jsx\": \"preserve\",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \"declaration\": true,                   /* Generates corresponding '.d.ts' file. */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \"declarationMap\": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \"sourceMap\": true,                     /* Generates corresponding '.map' file. */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "outFile": "./",                       /* Concatenate and emit output to single file. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "outDir": "./",                        /* Redirect output structure to the directory. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "composite": true,                     /* Enable project compilation */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "removeComments": true,                /* Do not emit comments to output. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "noEmit": true,                        /* Do not emit outputs. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \"importHelpers\": true,                 /* Import emit helpers from 'tslib'. */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \"downlevelIteration\": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \"isolatedModules\": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Strict Type-Checking Options */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"strict"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                           "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Enable all strict type-checking options. */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \"noImplicitAny\": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "strictNullChecks": true,              /* Enable strict null checks. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "strictFunctionTypes": true,           /* Enable strict checking of function types. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \"strictBindCallApply\": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \"noImplicitThis\": true,                /* Raise error on 'this' expressions with an implied 'any' type. */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */')]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Additional Checks */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "noUnusedLocals": true,                /* Report errors on unused locals. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "noUnusedParameters": true,            /* Report errors on unused parameters. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */')]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Module Resolution Options */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \"moduleResolution\": \"node\",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \"paths\": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "typeRoots": [],                       /* List of folders to include type definitions from. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "types": [],                           /* Type declaration files to be included in compilation. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"esModuleInterop"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */')]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Source Map Options */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \"inlineSources\": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Experimental Options */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */')]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Advanced Options */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"skipLibCheck"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Skip type checking of declaration files. */")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"forceConsistentCasingInFileNames"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Disallow inconsistently-cased references to the same file. */")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);