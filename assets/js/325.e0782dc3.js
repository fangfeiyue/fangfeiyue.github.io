(window.webpackJsonp=window.webpackJsonp||[]).push([[325],{1100:function(t,h,v){"use strict";v.r(h);var _=v(28),s=Object(_.a)({},(function(){var t=this,h=t.$createElement,v=t._self._c||h;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("ul",[v("li",[t._v("文件指纹儿")]),t._v(" "),v("li",[t._v("打包后输出的文件和后缀")]),t._v(" "),v("li",[t._v("hash一般是结合cdn缓存来使用，通过Webpack构建之后，生成对应文件名自动带上对应的md5值。如果文件内容改变的话，那么对应文件哈希值也会改变，对应的HTML引用的URL地址也会改变，触发CDN服务器从源服务器上拉取对应数据，进而更新本地缓存。")])]),t._v(" "),v("p",[t._v("指纹占位符")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("占位符名称")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("ext")]),t._v(" "),v("td",[t._v("资源后缀名")])]),t._v(" "),v("tr",[v("td",[t._v("name")]),t._v(" "),v("td",[t._v("文件名")])]),t._v(" "),v("tr",[v("td",[t._v("path")]),t._v(" "),v("td",[t._v("文件的相对路径")])]),t._v(" "),v("tr",[v("td",[t._v("folder")]),t._v(" "),v("td",[t._v("文件所在的文件夹")])]),t._v(" "),v("tr",[v("td",[t._v("hash")]),t._v(" "),v("td",[t._v("每次webpack构建时生成一个唯一的hash值")])]),t._v(" "),v("tr",[v("td",[t._v("chunkhash")]),t._v(" "),v("td",[t._v("根据chunk生成hash值，来源于同一个chunk，则hash值一样")])]),t._v(" "),v("tr",[v("td",[t._v("contentHash")]),t._v(" "),v("td",[t._v("根据内容生成hash值，文件内容相同hash值就相同")])])])]),t._v(" "),v("p",[t._v("hash是整个项目的哈希值，其根据每次编译内容计算得到，每次编译之后，都会生成新的哈希值，即修改任意文件，都会导致所有文件hash发生改变。")]),t._v(" "),v("p",[t._v("chunkhash，采用哈希计算的话，每一次构建后生成的哈希值都不一样。即使文件内容压根儿没有变化，这样子是没办法实现缓存效果，我们需要更换另一种哈希值计算方式即chunkhash。chunkhash和hash不一样，它根据不同的入口文件进行依赖文件解析，构建出对应的chunk，生成对应的哈希值。我们在生产环境里把一些公共库和程序入口文件区分开，单独打包构建，接着我们采用chunkhash的方式生成哈希值，那么只要我们不改动公共库的代码，就可以保证其哈希值不会受影响。")]),t._v(" "),v("p",[t._v("使用chunkhash存在一个问题，就是当在一个js文件中引入css文件，编译后他们的hash是相同的，而且只要js文件发生变化，关联的css文件hash也会改变，这个时候可以使用mini-css-extract-plugin里边的contenthash，保证即使csss文件所处的模块儿里就算其他文件内容改变，只要css文件内容不变，那么不会重复构建。")])])}),[],!1,null,null,null);h.default=s.exports}}]);