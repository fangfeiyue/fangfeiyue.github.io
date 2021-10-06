(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{961:function(v,_,t){"use strict";t.r(_);var e=t(28),l=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"上线和回滚的流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上线和回滚的流程"}},[v._v("#")]),v._v(" 上线和回滚的流程")]),v._v(" "),t("h3",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[v._v("#")]),v._v(" 介绍")]),v._v(" "),t("ul",[t("li",[v._v("上线和回滚是开发过程中的重要流程")]),v._v(" "),t("li",[v._v("各个公司上线和回滚的流程都不一样")]),v._v(" "),t("li",[v._v("由有具体的工具或者系统来搞定，无需我们关心细节")]),v._v(" "),t("li",[v._v("你也许没有体会过这类规范的流程，但是你要知道一些要点")]),v._v(" "),t("li",[v._v("只说要点，不详细讲解，也没法详细讲解")])]),v._v(" "),t("h3",{attrs:{id:"上线原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上线原理"}},[v._v("#")]),v._v(" 上线原理")]),v._v(" "),t("ul",[t("li",[v._v("将测试完成的代码提交到git版本库的master分支")]),v._v(" "),t("li",[v._v("将当前服务器的代码全部打包并记录版本号，备份")]),v._v(" "),t("li",[v._v("将master分支的代码提交覆盖到线上服务器，生成新版本号")])]),v._v(" "),t("h3",{attrs:{id:"回滚原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回滚原理"}},[v._v("#")]),v._v(" 回滚原理")]),v._v(" "),t("ul",[t("li",[v._v("将当前服务器的代码打包并记录版本号，备份")]),v._v(" "),t("li",[v._v("将备份的上一个版本号解压，覆盖到线上服务器，并生成新的版本号")])]),v._v(" "),t("h2",{attrs:{id:"linux-服务器的基本命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-服务器的基本命令"}},[v._v("#")]),v._v(" linux 服务器的基本命令")]),v._v(" "),t("p",[v._v("线上服务器一般使用 linux 服务器，而且是 server 版本的 linux，没有桌面也没有鼠标，如何操作呢？")]),v._v(" "),t("p",[t("strong",[v._v("登录")])]),v._v(" "),t("p",[v._v("入职之后，一般会有现有的用户名和密码，拿来之后直接登录就行。运行 "),t("code",[v._v("ssh name@server")]),v._v(" 然后输入密码即可登录")]),v._v(" "),t("p",[t("strong",[v._v("目录操作")])]),v._v(" "),t("ul",[t("li",[v._v("创建目录 "),t("code",[v._v("mkdir")])]),v._v(" "),t("li",[v._v("删除目录 "),t("code",[v._v("rm -rf")])]),v._v(" "),t("li",[v._v("定位目录 "),t("code",[v._v("cd")])]),v._v(" "),t("li",[v._v("查看目录文件 "),t("code",[v._v("ls")]),v._v(" "),t("code",[v._v("ll")])]),v._v(" "),t("li",[v._v("修改目录名 "),t("code",[v._v("mv")])]),v._v(" "),t("li",[v._v("拷贝目录 "),t("code",[v._v("cp")])])]),v._v(" "),t("p",[t("strong",[v._v("文件操作")])]),v._v(" "),t("ul",[t("li",[v._v("创建文件 "),t("code",[v._v("touch")]),v._v(" "),t("code",[v._v("vi")])]),v._v(" "),t("li",[v._v("删除文件 "),t("code",[v._v("rm")])]),v._v(" "),t("li",[v._v("修改文件名 "),t("code",[v._v("mv")])]),v._v(" "),t("li",[v._v("拷贝文件 "),t("code",[v._v("cp")]),v._v(" "),t("code",[v._v("scp")])])]),v._v(" "),t("p",[t("strong",[v._v("文件内容操作")])]),v._v(" "),t("ul",[t("li",[v._v("查看文件 "),t("code",[v._v("cat")]),v._v(" "),t("code",[v._v("head")]),v._v(" "),t("code",[v._v("tail")])]),v._v(" "),t("li",[v._v("编辑文件内容 "),t("code",[v._v("vi")])]),v._v(" "),t("li",[v._v("查找文件内容 "),t("code",[v._v("grep")])])])])}),[],!1,null,null,null);_.default=l.exports}}]);