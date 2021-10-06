(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{911:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"类型间的转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型间的转换"}},[t._v("#")]),t._v(" 类型间的转换")]),t._v(" "),a("p",[t._v("类型转换可以分为两种：")]),t._v(" "),a("ul",[a("li",[t._v("隐式类型转换")]),t._v(" "),a("li",[t._v("显式类型转换")])]),t._v(" "),a("p",[t._v("在 JS 中只有 3 种类型的转换")]),t._v(" "),a("ul",[a("li",[t._v("转化为 Number 类型：Number() / parseFloat() / parseInt()")]),t._v(" "),a("li",[t._v("转化为 String 类型：String() / toString()")]),t._v(" "),a("li",[t._v("转化为 Boolean 类型: Boolean()")])]),t._v(" "),a("h3",{attrs:{id:"转-boolean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转-boolean"}},[t._v("#")]),t._v(" 转 boolean")]),t._v(" "),a("p",[t._v("其他类型转换为 "),a("code",[t._v("boolean")]),t._v(" 转换结果只能为 true 或者 false。除了 "),a("code",[t._v("0")]),t._v("、"),a("code",[t._v("NaN")]),t._v("、"),a("code",[t._v("空字符串")]),t._v("、"),a("code",[t._v("null")]),t._v("、"),a("code",[t._v("undefined")]),t._v("、"),a("code",[t._v("false")]),t._v(" 转换的值是false，其余都是true。")]),t._v(" "),a("p",[t._v("下面列举了一些转换规则：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("原始值")]),t._v(" "),a("th",[t._v("转换目标")]),t._v(" "),a("th",[t._v("结果")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("number")]),t._v(" "),a("td",[t._v("布尔值")]),t._v(" "),a("td",[t._v("除了0、NaN都为true")])]),t._v(" "),a("tr",[a("td",[t._v("string")]),t._v(" "),a("td",[t._v("布尔值")]),t._v(" "),a("td",[t._v("除了空字符串，其他字符串都转化为true")])]),t._v(" "),a("tr",[a("td",[t._v("undefined、null")]),t._v(" "),a("td",[t._v("布尔值")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("引用类型")]),t._v(" "),a("td",[t._v("布尔值")]),t._v(" "),a("td",[t._v("true")])])])]),t._v(" "),a("h3",{attrs:{id:"转换为字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转换为字符串"}},[t._v("#")]),t._v(" 转换为字符串")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("原始值")]),t._v(" "),a("th",[t._v("转换目标")]),t._v(" "),a("th",[t._v("结果")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("number")]),t._v(" "),a("td",[t._v("字符串")]),t._v(" "),a("td",[t._v("举例：1->'1'")])]),t._v(" "),a("tr",[a("td",[t._v("Boolean、函数、Symbol")]),t._v(" "),a("td",[t._v("字符串")]),t._v(" "),a("td",[t._v("'true'")])]),t._v(" "),a("tr",[a("td",[t._v("数组")]),t._v(" "),a("td",[t._v("字符串")]),t._v(" "),a("td",[t._v("[1, 2] -> '1,2'")])]),t._v(" "),a("tr",[a("td",[t._v("对象")]),t._v(" "),a("td",[t._v("字符串")]),t._v(" "),a("td",[t._v("'[object Object]'")])])])]),t._v(" "),a("p",[t._v("举例：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// '1'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'false'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// '[object Object]'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Symbol() + ''")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'null'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'undefined'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'function fn(){}'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n")])])]),a("h3",{attrs:{id:"转换为数字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转换为数字"}},[t._v("#")]),t._v(" 转换为数字")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("原始值")]),t._v(" "),a("th",[t._v("转换目标")]),t._v(" "),a("th",[t._v("结果")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("string")]),t._v(" "),a("td",[t._v("数字")]),t._v(" "),a("td",[t._v("'1' -> 1，'hello' -> NaN")])]),t._v(" "),a("tr",[a("td",[t._v("数组")]),t._v(" "),a("td",[t._v("数字")]),t._v(" "),a("td",[t._v("空数组转为为0；数组中只有一个元素，且这个元素为数字，转换为数字，其他情况为NaN")])]),t._v(" "),a("tr",[a("td",[t._v("null")]),t._v(" "),a("td",[t._v("数字")]),t._v(" "),a("td",[t._v("0")])]),t._v(" "),a("tr",[a("td",[t._v("除了数组的引用类型")]),t._v(" "),a("td",[t._v("数字")]),t._v(" "),a("td",[t._v("NaN")])]),t._v(" "),a("tr",[a("td",[t._v("Symbol")]),t._v(" "),a("td",[t._v("数字")]),t._v(" "),a("td",[t._v("报错")])])])]),t._v(" "),a("p",[t._v("举例：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Cannot convert a Symbol value to a number")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n")])])]),a("p",[t._v("对象转换为数字：")]),t._v(" "),a("ul",[a("li",[t._v("先调用对象的 "),a("code",[t._v("Symbol.toPrimitive")]),t._v(" 这个方法，如果不存在这个方法")]),t._v(" "),a("li",[t._v("再调用对象的 "),a("code",[t._v("valueOf")]),t._v(" 获取原始值，如果获取的值不是原始值")]),t._v(" "),a("li",[t._v("再调用对象的 "),a("code",[t._v("toString")]),t._v(" 把其变为字符串")]),t._v(" "),a("li",[t._v("最后再把字符串基于 "),a("code",[t._v("Number()")]),t._v(" 方法转换为数字")])]),t._v(" "),a("h2",{attrs:{id:"操作符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作符"}},[t._v("#")]),t._v(" 操作符 ==")]),t._v(" "),a("ul",[a("li",[t._v("两边的类型是否相同，相同的话就比较值的大小，例如1==2，返回false")]),t._v(" "),a("li",[t._v("判断的是否是null和undefined，是的话就返回true")]),t._v(" "),a("li",[t._v("判断的类型是否是String和Number，是的话，把String类型转换成Number，再进行比较")]),t._v(" "),a("li",[t._v("判断其中一方是否是Boolean，是的话就把Boolean转换成Number，再进行比较")]),t._v(" "),a("li",[t._v("如果其中一方为Object，且另一方为String、Number或者Symbol，会将Object转换成字符串，再进行比较")])]),t._v(" "),a("p",[t._v("上面我们提到了操作符 "),a("code",[t._v("==")]),t._v(" ，在我们编程的过程中还会使用到 "),a("code",[t._v("===")]),t._v("。它们两个之间有什么区别呢？")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("==")]),t._v(" 运算符两边的值类型不同的时候，存在隐式类型转换，"),a("code",[t._v("===")]),t._v(" 运算符两边值不相同的时候不存在类型转换。")]),t._v(" "),a("li",[a("code",[t._v("===")]),t._v(" 运算符是严格相等，左右两边的值不但值要相等，类型也要相等。")])]),t._v(" "),a("p",[t._v("提到了 "),a("code",[t._v("===")]),t._v(" 操作符，大家可能会想到 "),a("code",[t._v("Object.is()")]),t._v(" 那它们两个有什么区别呢？")]),t._v(" "),a("p",[t._v("Object在严格等于的基础上修复了一些特殊情况下的失误，具体来说就是 "),a("code",[t._v("+0")]),t._v(" 和 "),a("code",[t._v("-0")]),t._v("，"),a("code",[t._v("NaN")]),t._v(" 和 "),a("code",[t._v("NaN")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("is")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1/+0 = +Infinity， 1/-0 = -Infinity")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" y\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" y\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"类型转换真题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型转换真题"}},[t._v("#")]),t._v(" 类型转换真题")]),t._v(" "),a("p",[t._v("题一：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正确")]),t._v("\n")])])]),a("p",[t._v("解析： 对于编译器而言，代码块不会返回任何的值接着+[]就变成了一个强制转number的过程，[]通过oPrimitive变成''，最后''通过ToNumber操作转换成0")]),t._v(" "),a("p",[t._v("题二：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [] + {} == '[object Object]'")]),t._v("\n")])])]),a("p",[t._v("解析:[] 转化为 '' ， {} 转为 '[object Object]'")]),t._v(" "),a("p",[t._v("题三：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("p",[t._v("解析：![]的结果为false，false会转换为0；[]转换为数字0，也就变成了0 == 0，所以返回true")]),t._v(" "),a("p",[t._v("题四：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21.2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tencent"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaNTencentnull9false")]),t._v("\n")])])]),a("p",[t._v("解析：")]),t._v(" "),a("ol",[a("li",[t._v("首先100 + true\n+连接符两边存在Number类型，true转number为1，进行加法运算，结果为：101")]),t._v(" "),a("li",[t._v("101 + 21.2\n+连接符两边均为Number类型，进行加法运算，结果为：122.2")]),t._v(" "),a("li",[t._v("122.2 + null\n+连接符两边存在Number类型，null转number为0，进行加法运算，结果为：122.2")]),t._v(" "),a("li",[t._v("122.2 + undefined\n+连接符两边存在Number类型，undefined转number为NaN，NaN与任何数据类型计算都为NaN，结果为：NaN")]),t._v(" "),a("li",[t._v('NaN + "Tencent"\n+连接符两边存在String类型，NaN转string为"NaN"，进行字符串拼接，结果为："NaNTencent"')]),t._v(" "),a("li",[t._v('"NaNTencent" + []\n+连接符两边存在String类型，[]转string为""，进行字符串拼接，结果为："NaNTencent"')]),t._v(" "),a("li",[t._v('"NaNTencent" + null\n+连接符两边存在String类型，null转string为"null"，进行字符串拼接，结果为："NaNTencentnull"')]),t._v(" "),a("li",[t._v('"NaNTencentnull" + 9\n+连接符存在String类型，9转string为"9"，进行字符串拼接，结果为："NaNTencentnull9"')]),t._v(" "),a("li",[t._v('"NaNTencentnull9" + false\n+连接符存在String类型，false转string为"false"，进行字符串拼接，结果为："NaNTencentnull9false"')])]),t._v(" "),a("p",[t._v("参考")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6956170676327677966#comment",target:"_blank",rel:"noopener noreferrer"}},[t._v("通过大厂面试题研究JavaScript数据类型转换"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);