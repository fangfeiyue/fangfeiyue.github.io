(window.webpackJsonp=window.webpackJsonp||[]).push([[466],{1274:function(t,e,r){"use strict";r.r(e);var a=r(28),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"_1-redux"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-redux"}},[t._v("#")]),t._v(" 1.redux")]),t._v(" "),r("p",[t._v("工作流程：dispatch(action) => middleware => reducer => state")]),t._v(" "),r("h2",{attrs:{id:"_2-react-redux"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-react-redux"}},[t._v("#")]),t._v(" 2.react-redux")]),t._v(" "),r("p",[t._v("前置工作：")]),t._v(" "),r("ul",[r("li",[t._v("通过 "),r("Provider"),t._v(" 将 store 绑定到 content 上")],1),t._v(" "),r("li",[t._v("通过 connect 监听并获取 state，将处理后的 state、dispatch 通过 props 传递给组件")])]),t._v(" "),r("p",[t._v("工作流程：")]),t._v(" "),r("ul",[r("li",[t._v("组件触发 dispatch(action)")]),t._v(" "),r("li",[t._v("如果有middleware，会经过 middleware 处理再发送给 reducer")]),t._v(" "),r("li",[t._v("reducer 接收 action，修改 state")]),t._v(" "),r("li",[t._v("connect 中监听到 state 发送变化，在 content 上获取最新的 state")]),t._v(" "),r("li",[t._v("处理 state，调用 setState 触发 react 生命周期")]),t._v(" "),r("li",[t._v("组件接收到新的 props")])])])}),[],!1,null,null,null);e.default=s.exports}}]);