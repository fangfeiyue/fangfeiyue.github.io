(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{494:function(t,a,e){t.exports=e.p+"assets/img/20.536f4d0d.png"},990:function(t,a,e){"use strict";e.r(a);var s=e(28),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"什么是-csrf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-csrf"}},[t._v("#")]),t._v(" 什么是 CSRF")]),t._v(" "),s("p",[t._v("CSRF （Cross-site request forgery）跨站请求伪造")]),t._v(" "),s("p",[t._v("典型的 CSRF 攻击的流程：")]),t._v(" "),s("ol",[s("li",[t._v("用户端登录受信任网站，并保留登录凭证；")]),t._v(" "),s("li",[t._v("攻击者诱导用户点击恶意网站；")]),t._v(" "),s("li",[t._v("恶意网站携带受信任网站的用户信息向受信任网站发送恶意请求；")]),t._v(" "),s("li",[t._v("受信任网站接收到这个恶意请求后，验证用户身份通过，执行恶意请求；")])]),t._v(" "),s("p",[s("img",{attrs:{src:e(494),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"csrf-分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf-分类"}},[t._v("#")]),t._v(" CSRF 分类")]),t._v(" "),s("h3",{attrs:{id:"get-类型的-csrf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-类型的-csrf"}},[t._v("#")]),t._v(" Get 类型的 CSRF")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://trustweb.com/transfer?amount=1000&for=hacker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("当用户访问带有上面图片的网页时就会向受信任网站发送一个跨域的恶意请求。")]),t._v(" "),s("h3",{attrs:{id:"post-类型的-csrf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#post-类型的-csrf"}},[t._v("#")]),t._v(" POST 类型的 CSRF")]),t._v(" "),s("p",[t._v("我们可以使用 form 表单来发送 POST 请求。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("action")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://trustweb.com/transfer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("post"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hidden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hidden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("for"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hacker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("forms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("submit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"链接类型的-csrf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链接类型的-csrf"}},[t._v("#")]),t._v(" 链接类型的 CSRF")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://trustweb.com/transfer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("哇哦，这个网站居然赠送十万奖金"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"csrf-特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf-特点"}},[t._v("#")]),t._v(" CSRF 特点")]),t._v(" "),s("ol",[s("li",[t._v("攻击者利用被攻击网站的登录凭证，冒充用户提交操作，注意：不是窃取数据，攻击者拿不到用户的Cookie；")]),t._v(" "),s("li",[t._v("跨站请求形式多样，难以追踪。如图片、超链接、form提交等等；")]),t._v(" "),s("li",[t._v("攻击一般发生在第三方网站；")])]),t._v(" "),s("h2",{attrs:{id:"防护策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防护策略"}},[t._v("#")]),t._v(" 防护策略")]),t._v(" "),s("h3",{attrs:{id:"同源检测"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同源检测"}},[t._v("#")]),t._v(" 同源检测")]),t._v(" "),s("p",[t._v("既然大部分 CSRF 都来自第三方网站，我们可以直接禁止外域对我们发起请求。")]),t._v(" "),s("p",[t._v("我们可以通过 Origin Header、Referer Header 来判断是不是同源。")]),t._v(" "),s("p",[t._v("但是两种状况下不存在 Origin：IE11 的同源策略、302 重定向。")]),t._v(" "),s("p",[t._v("在HTTP头中有一个字段叫Referer，记录了该HTTP请求的来源地址。\n对于Ajax请求，图片和script等资源请求，Referer为发起请求的页面地址。对于页面跳转，Referer为打开页面历史记录的前一个页面地址。因此我们使用Referer中链接的Origin部分可以得知请求的来源域名。")]),t._v(" "),s("p",[t._v("我们可以通过 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Referrer-Policy",target:"_blank",rel:"noopener noreferrer"}},[t._v("Referrer-Policy"),s("OutboundLink")],1),t._v(" 控制自己网站的 Referer 策略：")]),t._v(" "),s("p",[t._v("语法：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Referrer-Policy: no-referrer\nReferrer-Policy: no-referrer-when-downgrade\nReferrer-Policy: origin\nReferrer-Policy: origin-when-cross-origin\nReferrer-Policy: same-origin\nReferrer-Policy: strict-origin\nReferrer-Policy: strict-origin-when-cross-origin\nReferrer-Policy: unsafe-url\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("指令")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("no-referrer")]),t._v(" "),s("td",[t._v("整个 Referer  首部会被移除。访问来源信息不随着请求一起发送。")])]),t._v(" "),s("tr",[s("td",[t._v("no-referrer-when-downgrade （默认值）")]),t._v(" "),s("td",[t._v("在没有指定任何策略的情况下用户代理的默认行为。在同等安全级别的情况下，引用页面的地址会被发送(HTTPS->HTTPS)，但是在降级的情况下不会被发送 (HTTPS->HTTP)。")])]),t._v(" "),s("tr",[s("td",[t._v("origin")]),t._v(" "),s("td",[t._v("在任何情况下，仅发送文件的源作为引用地址。例如  https://example.com/page.html 会将 https://example.com/ 作为引用地址。")])]),t._v(" "),s("tr",[s("td",[t._v("origin-when-cross-origin")]),t._v(" "),s("td",[t._v("对于同源的请求，会发送完整的URL作为引用地址，但是对于非同源请求仅发送文件的源。")])]),t._v(" "),s("tr",[s("td",[t._v("same-origin")]),t._v(" "),s("td",[t._v("对于同源的请求会发送引用地址，但是对于非同源请求则不发送引用地址信息。")])]),t._v(" "),s("tr",[s("td",[t._v("strict-origin")]),t._v(" "),s("td",[t._v("在同等安全级别的情况下，发送文件的源作为引用地址(HTTPS->HTTPS)，但是在降级的情况下不会发送 (HTTPS->HTTP)")])]),t._v(" "),s("tr",[s("td",[t._v("strict-origin-when-cross-origin")]),t._v(" "),s("td",[t._v("对于同源的请求，会发送完整的URL作为引用地址；在同等安全级别的情况下，发送文件的源作为引用地址(HTTPS->HTTPS)；在降级的情况下不发送此首部 (HTTPS->HTTP)。")])]),t._v(" "),s("tr",[s("td",[t._v("unsafe-url")]),t._v(" "),s("td",[t._v("无论是同源请求还是非同源请求，都发送完整的 URL（移除参数信息之后）作为引用地址")])])])]),t._v(" "),s("p",[t._v("我们可以通过以下方法设置 referrer 。")]),t._v(" "),s("ol",[s("li",[t._v("通过 meta 标签设置 referrer 。")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<meta name="referrer" content="origin">\n')])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("给 "),s("code",[t._v("<a>")]),t._v("、"),s("code",[t._v("<area>")]),t._v("、"),s("code",[t._v("<img>")]),t._v("、"),s("code",[t._v("<iframe>")]),t._v("、"),s("code",[t._v("<script>")]),t._v(" 或者 "),s("code",[t._v("<link>")]),t._v(" 元素上的 referrerpolicy 属性为其设置独立的请求策略。")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<a href="http://example.com" referrerpolicy="origin">\n')])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("还可以在 "),s("code",[t._v("<a>")]),t._v("、"),s("code",[t._v("<area>")]),t._v(" 或者 "),s("code",[t._v("<link>")]),t._v(" 元素上将 rel 属性设置为 noreferrer")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<a href="http://example.com" rel="noreferrer">\n')])])]),s("p",[t._v("使用 referrer 检测是否同源也不是很安全。")]),t._v(" "),s("ul",[s("li",[t._v("referrer 是由浏览器提供的，不能保证浏览器没有安全漏洞；")]),t._v(" "),s("li",[t._v("部分情况下攻击者可以隐藏、修改 referrer；")]),t._v(" "),s("li",[t._v("IE6、7下使用window.location.href=url进行界面的跳转，会丢失Referer；")]),t._v(" "),s("li",[t._v("IE6、7下使用window.open，也会缺失Referer；")]),t._v(" "),s("li",[t._v("HTTPS页面跳转到HTTP页面，所有浏览器Referer都丢失；")]),t._v(" "),s("li",[t._v("点击Flash上到达另外一个网站的时候，Referer的情况就比较杂乱，不太可信；")])]),t._v(" "),s("p",[t._v("可以看出同源验证并不百分百安全，我们需要做进一步的防范。")]),t._v(" "),s("h3",{attrs:{id:"csrf-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf-token"}},[t._v("#")]),t._v(" CSRF Token")]),t._v(" "),s("p",[t._v("CSRF 是攻击者冒用了用户的信息，如 Cookie。我们可以要求每次请求携带一个攻击者无法获取到的 Token。服务器端通过检测本次请求是否携带 Token，来区分是否是正常请求。")]),t._v(" "),s("p",[t._v("CSRF Token 防护步骤：")]),t._v(" "),s("ol",[s("li",[t._v("客户端第一次请求时，服务器给客户端返回一加密过的 token ，将 CSRF token 输出到页面；")]),t._v(" "),s("li",[t._v("页面提交的请求携带这个 token ;")]),t._v(" "),s("li",[t._v("服务端验证 token 是否有效；")])]),t._v(" "),s("h3",{attrs:{id:"双重-cookie-验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#双重-cookie-验证"}},[t._v("#")]),t._v(" 双重 Cookie 验证")]),t._v(" "),s("p",[t._v("双重 Cookie 流程：")]),t._v(" "),s("ol",[s("li",[t._v("用户访问网站时，下发一个 Cookie；")]),t._v(" "),s("li",[t._v("当前端向后端发起请求时，取出这个 Cookie 拼接到 URL 参数中；")]),t._v(" "),s("li",[t._v("后端接口验证 Cookie 中的字段与 URL 中的字段是否一致，不一致则拒绝；")])]),t._v(" "),s("p",[t._v("双重 Cookie 验证比 CSRF token 验证要简单很多，但是安全性没有 CSRF token 高。")]),t._v(" "),s("p",[t._v("优点：")]),t._v(" "),s("ol",[s("li",[t._v("无需使用 Session，适用面更广；")]),t._v(" "),s("li",[t._v("这个 ’token‘ 存储在客户端，不会给服务端带来压力；")])]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ol",[s("li",[t._v("Cookie 中增加了额外的字段；")]),t._v(" "),s("li",[t._v("如果存在 XSS 漏洞，可能会导致 Cookie 被更改；")]),t._v(" "),s("li",[t._v("难以做到子域名的隔离；")])]),t._v(" "),s("h3",{attrs:{id:"samesite-cookie-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#samesite-cookie-属性"}},[t._v("#")]),t._v(" SameSite Cookie 属性")]),t._v(" "),s("p",[t._v("SameSite 是HTTP响应头 Set-Cookie 的属性之一。它允许您声明该Cookie是否仅限于第一方或者同一站点上下文。")]),t._v(" "),s("p",[t._v("它可以设置三个值：")]),t._v(" "),s("ul",[s("li",[t._v("Strict\n设为这个值后，跨站时任何情况都不会发送 Cookie 。")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Set-Cookie: CookieName=CookieValue; SameSite=Strict;\n")])])]),s("p",[t._v("这样对用户体验不太好。比如我们登陆淘宝打算去买点东西，打开商品详情页是天猫的，这个时候又得让用户重新登录次。")]),t._v(" "),s("ul",[s("li",[t._v("Lax\n这是现代浏览器的默认值。")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Set-Cookie: CookieName=CookieValue; SameSite=Lax;\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("请求类型")]),t._v(" "),s("th",[t._v("示例")]),t._v(" "),s("th",[t._v("正常情况")]),t._v(" "),s("th",[t._v("Lax")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("链接")]),t._v(" "),s("td",[s("code",[t._v('<a href="..."></a>')])]),t._v(" "),s("td",[t._v("发送 Cookie")]),t._v(" "),s("td",[t._v("发送 Cookie")])]),t._v(" "),s("tr",[s("td",[t._v("预加载")]),t._v(" "),s("td",[s("code",[t._v('<link rel="prerender" href="..."/>')])]),t._v(" "),s("td",[t._v("发送 Cookie")]),t._v(" "),s("td",[t._v("发送 Cookie")])]),t._v(" "),s("tr",[s("td",[t._v("GET 表单")]),t._v(" "),s("td",[s("code",[t._v('<form method="GET" action="...">')])]),t._v(" "),s("td",[t._v("发送 Cookie")]),t._v(" "),s("td",[t._v("发送 Cookie")])]),t._v(" "),s("tr",[s("td",[t._v("POST 表单")]),t._v(" "),s("td",[s("code",[t._v('<form method="POST" action="...">')])]),t._v(" "),s("td",[t._v("发送 Cookie")]),t._v(" "),s("td",[t._v("不发送")])]),t._v(" "),s("tr",[s("td",[t._v("iframe")]),t._v(" "),s("td",[s("code",[t._v('<iframe src="..."></iframe>')])]),t._v(" "),s("td",[t._v("发送 Cookie")]),t._v(" "),s("td",[t._v("不发送")])]),t._v(" "),s("tr",[s("td",[t._v("AJAX")]),t._v(" "),s("td",[s("code",[t._v('$.get("...")')])]),t._v(" "),s("td",[t._v("发送 Cookie")]),t._v(" "),s("td",[t._v("不发送")])]),t._v(" "),s("tr",[s("td",[t._v("Image")]),t._v(" "),s("td",[s("code",[t._v('<img src="...">')])]),t._v(" "),s("td",[t._v("发送 Cookie")]),t._v(" "),s("td",[t._v("不发送")])])])]),t._v(" "),s("ul",[s("li",[t._v("None\n设置为 None 后，Cookie将在所有上下文中发送，即允许跨域发送。如果想将值设置为 None，需在最新的浏览器版本中使用 Secure 属性。")])]),t._v(" "),s("p",[t._v("下面这种设置方式是无效的。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Set-Cookie: widget_session=abc123; SameSite=None\n")])])]),s("p",[t._v("下面这种设置方式是有效的。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Set-Cookie: widget_session=abc123; SameSite=None; Secure\n")])])]),s("p",[t._v("SameSite Cookie 目前还不太成熟")]),t._v(" "),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("上面写了扯了一大堆，看着是不是有点懵懵的，不要怕，实际简单总结下，无非以下几点而已：")]),t._v(" "),s("ol",[s("li",[t._v("CSRF 自动防御策略：同源检测")]),t._v(" "),s("li",[t._v("CSRF 主动防御措施：Token 验证、双重 Cookie 验证、设置 Samesite Cookie。")])]),t._v(" "),s("h2",{attrs:{id:"csrf-测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf-测试"}},[t._v("#")]),t._v(" CSRF 测试")]),t._v(" "),s("p",[t._v("我们可以使用 CSRFTester 来检测我们的页面是否存在 CSRF 漏洞，以便于我们及时发现漏洞及时修复。具体使用步骤这里就不一一列举了，请查看这篇文章 "),s("a",{attrs:{href:"http://luckyzmj.cn/posts/a1b686d3.html",target:"_blank",rel:"noopener noreferrer"}},[t._v(" CSRFTester 简介"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"参考文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2019/09/cookie-samesite.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cookie 的 SameSite 属性"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.cn/post/6844903689702866952#comment",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端安全系列之二：如何防止CSRF攻击？"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);