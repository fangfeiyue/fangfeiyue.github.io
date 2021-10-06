(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{1227:function(s,t,a){"use strict";a.r(t);var n=a(28),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"用-create-react-app-初始化项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#用-create-react-app-初始化项目"}},[s._v("#")]),s._v(" 用 Create React App 初始化项目")]),s._v(" "),n("p",[s._v("初始化一个typescript项目")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("npx create-react-app jira --template typescript\n")])])]),n("p",[s._v("启动项目")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" start\n")])])]),n("p",[s._v("部分特殊文件作用的说明：")]),s._v(" "),n("p",[s._v("src/react-app-env.d.ts // 引入预先定义好的typescript类型")]),s._v(" "),n("p",[s._v("src/reportWebVitals.ts // 埋点上报")]),s._v(" "),n("p",[s._v("src/setupTests.ts // 配置单元测试")]),s._v(" "),n("p",[s._v("public/manifest.json // 用来配置pwa")]),s._v(" "),n("p",[s._v("public/manifest.json // 配置搜索引擎爬虫，哪些文件不被搜索引擎抓取")]),s._v(" "),n("h2",{attrs:{id:"配置-eslint、-prettier-和-commitlint-规范工程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置-eslint、-prettier-和-commitlint-规范工程"}},[s._v("#")]),s._v(" 配置 eslint、 prettier 和 commitlint 规范工程")]),s._v(" "),n("p",[s._v("配置tsconfig.json")]),s._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"baseUrl"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("p",[s._v("在配置baseUrl之前我们引入文件是使用下面这种../../之类的")]),s._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" ajax "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../../utils/ajax'")]),s._v("\n")])])]),n("p",[s._v("配置之后")]),s._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" ajax "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utils/ajax'")]),s._v("\n")])])]),n("p",[s._v("这样方便了很多。")]),s._v(" "),n("h3",{attrs:{id:"prettier"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prettier"}},[s._v("#")]),s._v(" Prettier")]),s._v(" "),n("p",[s._v("在团队编写代码的时候每个人可能有每个人的风格，每个人用的IDE可能不同，即便用的相同的IDE配置可能也不同。所以导致代码风格不尽相同。比如下面这种挨揍的代码格式，就会让人发疯👊：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(695),alt:""}})]),s._v(" "),n("p",[s._v("我们可以使用Prettier来统一代码风格，提高开发效率。废话不多说，来看看怎么使用Prettier。"),n("a",{attrs:{href:"https://prettier.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Prettier官方文档"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("安装")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --save-dev --save-exact prettier\n")])])]),n("p",[s._v("创建一个配置文件")]),s._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("echo "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prettierrc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json\n")])])]),n("p",[s._v("创建 .prettierignore 文件，用于指定哪些文件不需要被格式化")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Ignore artifacts:")]),s._v("\nbuild\ncoverage\n")])])]),n("p",[s._v("在终端执行如下命令：")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("npx prettier --write "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])])]),n("p",[s._v("发现上面混乱的代码被格式化了")]),s._v(" "),n("p",[n("img",{attrs:{src:a(696),alt:""}})]),s._v(" "),n("p",[s._v("上面的这种格式看着不那个找揍了😀")]),s._v(" "),n("p",[s._v("但是让每个人都去时不时的执行上面这个命令显然可操作性太差。有没有什么办法可以让它自动执行呢？我们可以使用\n"),n("a",{attrs:{href:"https://prettier.io/docs/en/precommit.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Pre-commit Hook"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("在终端执行如下命令：")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("npx mrm lint-staged\n")])])]),n("p",[s._v("package.json文件中会新增如下代码")]),s._v(" "),n("div",{staticClass:"language-json extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("br"),n("br"),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"main"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"test"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo \\"Error: no test specified\\" && exit 1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"prepare"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"husky install"')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"keywords"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"author"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"license"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ISC"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"devDependencies"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"husky"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^6.0.0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"lint-staged"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^10.5.4"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"prettier"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2.2.1"')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"lint-staged"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"*.{js,css,md}"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"prettier --write"')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("p",[s._v("这样当我们每次执行commit的时候，代码就会被自动格式化。")]),s._v(" "),n("p",[s._v("假设我们在项目中使用了eslint，我们需要安装eslint-config-prettier，这是因为prettier和eslint可能会有冲突。")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --save-dev eslint-config-prettier\n")])])]),n("p",[s._v("然后在package.json文件中修改eslint的配置项，extends数组最后添加prettier")]),s._v(" "),n("div",{staticClass:"language-json extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[s._v(" ")]),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"eslintConfig"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"extends"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"react-app"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"react-app/jest"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"prettier"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("p",[s._v("这里先推荐一篇好文章"),n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/81764012?from_voters_page=true",target:"_blank",rel:"noopener noreferrer"}},[s._v("Prettier看这一篇就行了"),n("OutboundLink")],1)]),s._v(" "),n("h3",{attrs:{id:"commitlint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#commitlint"}},[s._v("#")]),s._v(" commitlint")]),s._v(" "),n("p",[s._v("安装")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --save-dev @commitlint/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("config-conventional,cli"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("p",[s._v("在终端执行如下命令")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"module.exports = {extends: ['@commitlint/config-conventional']}\"")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" commitlint.config.js\n")])])]),n("p",[s._v("然后在终端再执行如下命令（在上面Prettier配置基础上需要执行的命令）")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Add hook")]),s._v("\nnpx husky "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" .husky/commit-msg "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'npx --no-install commitlint --edit \""),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\"'")]),s._v("\n")])])]),n("p",[s._v("单独使用commitlint时需要执行的命令：")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Install Husky v6")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" husky --save-dev\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# or")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" husky --dev\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Activate hooks")]),s._v("\nnpx husky "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# or")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" husky "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Add hook")]),s._v("\nnpx husky "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" .husky/commit-msg "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'npx --no-install commitlint --edit \""),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\"'")]),s._v("\n")])])]),n("p",[s._v("此时当我们再提交代码时就需要遵循一定的格式才行，随意提交会提交失败。")]),s._v(" "),n("p",[s._v("要遵循的格式（冒号后面要加空格）：")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" ci -m "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("type"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("optional scope"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("description"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),n("p",[s._v("type ：用于表明我们这次提交的改动类型，是新增了功能还是修改了测试代码又或者是更新了文档")]),s._v(" "),n("p",[s._v("optional scope：一个可选的修改范围。用于标识此次提交主要涉及到代码中哪个模块。")]),s._v(" "),n("p",[s._v("description：描述此次提交的主要内容")]),s._v(" "),n("p",[s._v("示例：")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" ci -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'chore: 配置commitlint'")]),s._v("\n")])])]),n("p",[s._v("type的取值如下：")]),s._v(" "),n("ul",[n("li",[s._v("build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交")]),s._v(" "),n("li",[s._v("ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交")]),s._v(" "),n("li",[s._v("docs：文档更新")]),s._v(" "),n("li",[s._v("feat：新增功能")]),s._v(" "),n("li",[s._v("fix：bug 修复")]),s._v(" "),n("li",[s._v("perf：性能优化")]),s._v(" "),n("li",[s._v("refactor：重构代码(既没有新增功能，也没有修复 bug)")]),s._v(" "),n("li",[s._v("style：不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)")]),s._v(" "),n("li",[s._v("test：新增测试用例或是更新现有测试")]),s._v(" "),n("li",[s._v("revert：回滚某个更早之前的提交")]),s._v(" "),n("li",[s._v("chore：不属于以上类型的其他类型(日常事务)")])]),s._v(" "),n("h2",{attrs:{id:"对比常见-mock-方案-配置-json-server"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#对比常见-mock-方案-配置-json-server"}},[s._v("#")]),s._v(" 对比常见 Mock 方案 配置 JSON SERVER")]),s._v(" "),n("p",[s._v("在真实开发环境中，前端和后端是并行开发的，这样可以极大提高开发效率，节省成本，所以前期是没有后端接口可用的。")]),s._v(" "),n("p",[s._v("这个时候前端需要的数据需要自己Mock，这里对比下常见的Mock方案，以便开发的时候选择更合适的方案。")]),s._v(" "),n("h3",{attrs:{id:"代码入侵"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码入侵"}},[s._v("#")]),s._v(" 代码入侵")]),s._v(" "),n("p",[s._v("直接在代码中写死Mock数据，或者请求本地的JSON文件")]),s._v(" "),n("p",[s._v("优点：无")]),s._v(" "),n("p",[s._v("缺点：")]),s._v(" "),n("ol",[n("li",[s._v("与其他方案比mock效果不好")]),s._v(" "),n("li",[s._v("与真实环境的server环境切换麻烦")])]),s._v(" "),n("h3",{attrs:{id:"请求拦截"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#请求拦截"}},[s._v("#")]),s._v(" 请求拦截")]),s._v(" "),n("p",[s._v("如Mock.js原理是重写httprequest的属性")]),s._v(" "),n("p",[s._v("优点：")]),s._v(" "),n("ol",[n("li",[s._v("与前端代码分离")]),s._v(" "),n("li",[s._v("可生成随机数据")])]),s._v(" "),n("p",[s._v("缺点：")]),s._v(" "),n("ol",[n("li",[s._v("数据都是动态生成的假数据，无法真实模拟增删改查的情况")]),s._v(" "),n("li",[s._v("只支持ajax，不支持fetch")])]),s._v(" "),n("h3",{attrs:{id:"接口管理工具"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#接口管理工具"}},[s._v("#")]),s._v(" 接口管理工具")]),s._v(" "),n("p",[s._v("代表：rap、swagger、moco、yapi")]),s._v(" "),n("p",[s._v("优点：配置功能强大，接口管理与Mock一体，后端改接口Mock也跟着更改，可靠。")]),s._v(" "),n("p",[s._v("缺点：")]),s._v(" "),n("ol",[n("li",[s._v("配置复杂依赖后端，可能会出现后端不愿意出手，后者等后端配置完了，接口也开发出来的情况")]),s._v(" "),n("li",[s._v("一般作为大团队的基础建设存在，没有这个条件的话慎重考虑。")])]),s._v(" "),n("h3",{attrs:{id:"本地node服务器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#本地node服务器"}},[s._v("#")]),s._v(" 本地node服务器")]),s._v(" "),n("p",[s._v("代表："),n("a",{attrs:{href:"https://github.com/typicode/json-server",target:"_blank",rel:"noopener noreferrer"}},[s._v("json-server"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("优点：")]),s._v(" "),n("ol",[n("li",[s._v("配置简单、json-server甚至可以零代码30秒启动一个REST API SERVER")]),s._v(" "),n("li",[s._v("自定义程度高，一切尽在掌握")]),s._v(" "),n("li",[s._v("增删改查真实模拟")])]),s._v(" "),n("p",[s._v("缺点：与接口管理工具相比，无法随着后端API的修改而自动修改。")]),s._v(" "),n("p",[s._v("什么是REST API呢？一句话总结URI代表资源、对象，METHOD代表行为，如：")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("GET /list  // 列表\nPOT /user // 增加\nPUT /list/1 // 替换\nPATH /list/2 // 修改\nDELETE /list/1 // 删除\n")])])]),n("p",[s._v("推荐使用 json-server 这种方式来mock数据。下面我们简单来说下json-server如何使用。")]),s._v(" "),n("p",[s._v("全局安装")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g json-server\n")])])]),n("p",[s._v("或者局部安装")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" json-server -D\n")])])]),n("p",[s._v("在项目根目录新建一个__json_server_mock__（这样起名的是为了告诉其他开发者这个文件和项目是无关的）文件，并在这个文件中创建一个json文件，如db.json，输入如下内容")]),s._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"user"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("p",[s._v("启动")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("json-server --watch db.json\n")])])]),n("p",[s._v("配置package.json文件，注意：如果是全局安装的json-server要去掉npx")]),s._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"server"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npx json-server __json_server_mock__/db.json --watch"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("h2",{attrs:{id:"【注意了】大家不用再手动引入-react-了"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#【注意了】大家不用再手动引入-react-了"}},[s._v("#")]),s._v(" 【注意了】大家不用再手动引入 React 了")]),s._v(" "),n("p",[s._v("以前我们需要在每个React组件中都要手动引入React")]),s._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" React "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'react'")]),s._v("\n")])])]),n("p",[s._v("这样做的原因是因为JSX是语法糖，下面这个组件在编译后")]),s._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" React "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'react'")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("App")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("h1"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("hello"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("h1"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("p",[s._v("会被转换成")]),s._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" React "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'react'")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("App")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" React"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("createElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'h1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("p",[s._v("每个组件在编译后都会使用React，所以每个组件都需要手动引入React。")]),s._v(" "),n("p",[s._v("这样是不是感觉很麻烦😭，现在我们不需要手动在引入React了😄。")]),s._v(" "),n("p",[s._v("去年年底plugin-transform-react-jsx发布了新版本，从v7.9.0开始，就不同手动引入React了，转换变成了这样，详见"),n("a",{attrs:{href:"https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Introducing the New JSX Transform"),n("OutboundLink")],1)]),s._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("App")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("h1"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Hello World"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("h1"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("p",[s._v("编译成：")]),s._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Inserted by a compiler (don't import it yourself!)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("jsx "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" _jsx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'react/jsx-runtime'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("App")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("_jsx")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'h1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" children"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello world'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),n("p",[s._v("create-react-app v4.0版本开始支持，之前的版本并不支持这种转换。")])]),s._v(" "),n("p",[s._v("在这个工程中并不是使用tsc将ts编译成js的，使用的是babel编译的ts，这样可以用ts类型检测 + babel编译一切，可以降低开发/配置成本。")])])}),[],!1,null,null,null);t.default=e.exports},695:function(s,t,a){s.exports=a.p+"assets/img/1.ed5ac233.png"},696:function(s,t,a){s.exports=a.p+"assets/img/2.6cd19ac8.png"}}]);