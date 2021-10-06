(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1243:function(t,_,v){"use strict";v.r(_);var s=v(28),a=Object(s.a)({},(function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"浏览器背后的故事"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器背后的故事"}},[t._v("#")]),t._v(" 浏览器背后的故事")]),t._v(" "),s("h3",{attrs:{id:"http-是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-是什么"}},[t._v("#")]),t._v(" HTTP 是什么")]),t._v(" "),s("p",[t._v("HTTP 是一种通信协议，它允许将超文本标记语言（HTML）文档从 web 服务器传送到客户端的浏览器。")]),t._v(" "),s("p",[t._v("HTTP 是一个属于应用层的面向对象的协议，由于其简捷、快速的方式，适用于分布式超媒体信息系统。它与 1990 年提出，经过几年的使用与发展，得到不断完善和扩展。")]),t._v(" "),s("h3",{attrs:{id:"web-和-http-的关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-和-http-的关系"}},[t._v("#")]),t._v(" Web 和 HTTP 的关系")]),t._v(" "),s("p",[t._v("Web 是一种基于超文本和 HTTP 的、全球性的、动态交互的、跨平台的分布式图形信息系统。")]),t._v(" "),s("p",[t._v("网站是建立在 Internet 上的一种网络服务，为浏览者在 Internet 上查找和浏览信息提供了图形化的、易于访问的直观页面，其中的文档及超级链接将 Internet 上的信息节点组织成一个互为关联的网状结构。")]),t._v(" "),s("p",[s("img",{attrs:{src:v(707),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"http协议的前世今生"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http协议的前世今生"}},[t._v("#")]),t._v(" HTTP协议的前世今生")]),t._v(" "),s("p",[s("img",{attrs:{src:v(708),alt:""}})]),t._v(" "),s("p",[t._v("HTTP0.9，只有一个 GET 请求方法，没有 HEAD 等描述。")]),t._v(" "),s("p",[t._v("请求的时候：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET + 请求的文件路径\n")])])]),s("p",[t._v("服务端收到请求后返回一个以 ASCII 字符流编码的 HTML 文档，服务器发送完毕后就会关闭 TCP 连接。")]),t._v(" "),s("p",[t._v("HTTP1.0")]),t._v(" "),s("ul",[s("li",[t._v("增加了 HEAD、POST 等新方法")]),t._v(" "),s("li",[t._v("增加了响应状态码，标记可能的错误原因")]),t._v(" "),s("li",[t._v("引入了协议版本号概念")]),t._v(" "),s("li",[t._v("引入了 HTTP Header（头部）的概念，让HTTP处理请求和响应更加灵活")]),t._v(" "),s("li",[t._v("传输的数据不再局限于文本")])]),t._v(" "),s("p",[t._v("HTTP1.1")]),t._v(" "),s("ul",[s("li",[t._v("长连接：引入了 TCP 连接复用，即一个 TCP 默认不关闭，可以被多个请求复用")]),t._v(" "),s("li",[t._v("并发连接：对一个域名的请求允许分配多个长连接（缓解了长连接中的「队头阻塞」问题）\n引入管道机制，一个 TCP 连接，可以同时发送多个请求。（响应的顺序必须和请求的顺序一致，因此不常用）")]),t._v(" "),s("li",[t._v("增加了 PUT、DELETE、OPTIONS、PATCH 等新的方法")]),t._v(" "),s("li",[t._v("新增了一些缓存的字段（If-Modified-Since, If-None-Match）")]),t._v(" "),s("li",[t._v("请求头中引入了 range 字段，支持断点续传")]),t._v(" "),s("li",[t._v("允许响应数据分块（chunked），利于传输大文件\n强制要求 Host 头，让互联网主机托管称为可能")])]),t._v(" "),s("p",[t._v("HTTP2")]),t._v(" "),s("ul",[s("li",[t._v("数据改为二进制传输。")]),t._v(" "),s("li",[t._v("多路复用，同一个连接里可以发送多个请求，并且可以不按顺序来。")]),t._v(" "),s("li",[t._v("使用专用算法压缩头部，减少数据传输量")]),t._v(" "),s("li",[t._v("允许服务器主动向客户推送数据")])]),t._v(" "),s("p",[t._v("HTTP3(QUIC 协议)")]),t._v(" "),s("p",[t._v("HTTP/3 将底层依赖的 TCP 改成 UDP，UDP 相对于 TCP 而言最大的特点是传输数据时不需要建立连接，可以同时发送多个数据包，所以传输效率很高，缺点就是没有确认机制来保证对方一定能收到数据。")]),t._v(" "),s("h3",{attrs:{id:"参考文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/293378068",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP 发展史"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"透过tcpip看http"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#透过tcpip看http"}},[t._v("#")]),t._v(" 透过TCPIP看HTTP")]),t._v(" "),s("p",[t._v("HTTP 协议是构建在 TCP/IP 协议之上的，是 TCP/IP 协议的一个子集。为了更好的理解 HTTP 协议，我们先了解一下 TCP/IP 的相关知识。")]),t._v(" "),s("p",[t._v("TCP/IP 协议其实是一系列与互联网相关联的协议集合的总称。分层管理是 TCP/IP 协议的重要特征。")]),t._v(" "),s("p",[t._v("TCP/IP 协议族是由一个四层协议组成的系统，这四层分别是：应用层、传输层、网络层、数据链路层。")]),t._v(" "),s("p",[s("img",{attrs:{src:v(709),alt:""}})]),t._v(" "),s("p",[t._v("应用层：")]),t._v(" "),s("p",[t._v("应用层一般是我们编写的应用程序，决定了向用户提供的应用服务。应用层可以通过系统调用与传输层进行通信。如：FTP、DNS、HTTP 等。")]),t._v(" "),s("p",[t._v("传输层：")]),t._v(" "),s("p",[t._v("传输层通过系统调用向应用层提供处于网络连接中的两台计算机之间的数据传输功能。")]),t._v(" "),s("p",[t._v("在传输层中有两个性质不同的协议：TCP 和 UDP。TCP 是面向连接的，UDP 是无连接的。因为 TCP 需要建立连接所以比较可靠，但是效率相对较低。UDP 不需要建立连接，传输效率比较高，但因为无连接，所以安全性相对较低。")]),t._v(" "),s("p",[t._v("网络层：")]),t._v(" "),s("p",[t._v("网络层用来处理在网络上流动的数据包，数据包是网络传输的最小数据单位。该层规定了通过怎样的路径（传输路线）到达对方计算机，并把数据包传输给对方。")]),t._v(" "),s("p",[t._v("链路层：")]),t._v(" "),s("p",[t._v("链路层用来处理连接网络的硬件部分，包括控制操作系统、硬件设备驱动、NIC（Network Interface Card 网络适配器）以及光纤等物理可见部分。硬件上的范畴均在链路层的作用范围内。")]),t._v(" "),s("h3",{attrs:{id:"数据包的封装过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据包的封装过程"}},[t._v("#")]),t._v(" 数据包的封装过程")]),t._v(" "),s("p",[t._v("上层协议的数据是怎么转变成下层协议数据的？")]),t._v(" "),s("p",[t._v("应用程序在数据在发布到数据网络前会沿着协议栈从上往下处理，每层协议都将在上层协议的基础上加上自己的头部信息，链路层还会加上尾部信息，依次实现我们所有层的数据封装，最终为到达网络提供所有的必要信息。")]),t._v(" "),s("p",[s("img",{attrs:{src:v(710),alt:""}})]),t._v(" "),s("p",[t._v("数据封装的过程：")]),t._v(" "),s("p",[s("img",{attrs:{src:v(711),alt:""}})]),t._v(" "),s("p",[t._v("数据解封装的过程：")]),t._v(" "),s("p",[s("img",{attrs:{src:v(712),alt:""}})]),t._v(" "),s("p",[t._v("HTTP数据传输过程：")]),t._v(" "),s("p",[t._v("发送端发送数据时，数据会从上层传输到下层，且每经过一层都会打上该层的头部信息。而接收端接收数据时，数据会从下层传输到上层，传输前会把下层的头部信息删除。")]),t._v(" "),s("p",[s("img",{attrs:{src:v(713),alt:""}})]),t._v(" "),s("h3",{attrs:{id:"tcp-三次握手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-三次握手"}},[t._v("#")]),t._v(" TCP 三次握手")]),t._v(" "),s("p",[t._v("使用 TCP 进行通信的双方必须先建立连接，然后才能开始传数据。为了确保连接双方可靠性，在双方建立连接时，TCP 协议采用了三次握手策略。")]),t._v(" "),s("p",[s("img",{attrs:{src:v(714),alt:""}})]),t._v(" "),s("p",[t._v("第一次握手：")]),t._v(" "),s("p",[t._v("客户端发送带有 SYN 标志的连接请求报文段，然后进入 SYN_SENT 状态，等待服务端确认。")]),t._v(" "),s("p",[t._v("第二次握手：")]),t._v(" "),s("p",[t._v("服务端接收到客户端的 SYN 报文段后，需要发送 ACK 信息对这个 SYN 报文段进行确认。同时还要发送自己的 SYN 请求信息。服务端会将上述信息放到一个报文段（SYN + ACK报文段）中，一并发送给客户端，此时服务端将会进入 SYN_RECV 状态。")]),t._v(" "),s("p",[t._v("第三次握手：")]),t._v(" "),s("p",[t._v("客户端接收到服务端的 SYN + ACK 报文段后，会向服务端发送 ACK 确认报文段，这个报文段发送完毕后，客户端和服务端都会进入 ESTABLISHED 状态，完成 TCP 三次握手。")]),t._v(" "),s("p",[s("img",{attrs:{src:v(715),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"你是如何访问慕课的-dns域名解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#你是如何访问慕课的-dns域名解析"}},[t._v("#")]),t._v(" “你是如何访问慕课的”--DNS域名解析")]),t._v(" "),s("p",[t._v("我们访问一个网站时一般是通过域名访问的。因为相对于 IP 地址，域名更容易让人记住。但是 TCP/IP 协议使用的是 IP 地址进行访问的，所以必须有个机制或服务把域名转换成 IP 地址。DNS 服务就是用来解决这个问题的，它提供域名到 IP 地址之间的解析服务。")]),t._v(" "),s("p",[s("img",{attrs:{src:v(716),alt:""}})]),t._v(" "),s("p",[t._v("先从本地 host 文件寻查 IP 地址，如果找到就直接使用 host 文件中的 IP 地址。如果本地没有对应域名的 IP 地址映射，这个时候会去本地的 DNS 服务器，查找域名对应的 IP 地址，如果本地的 DNS 没有找到，会一层层向上一层 DNS 服务器发送请求，直到 DNS 根服务器，将找到的 IP 地址返回给客户端。")]),t._v(" "),s("h2",{attrs:{id:"回溯http事务处理过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回溯http事务处理过程"}},[t._v("#")]),t._v(" 回溯HTTP事务处理过程")]),t._v(" "),s("p",[t._v("当客户端访问 Web 站点时，首先会通过 DNS 服务查询到域名的 IP 地址。然后浏览器生成 HTTP 请求，并通过 TCP/IP 协议发送给 Web 服务器。Web 服务器接收到请求后会根据请求生成响应内容，并通过 TCP/IP 协议返回给客户端。")]),t._v(" "),s("p",[s("img",{attrs:{src:v(717),alt:""}})]),t._v(" "),s("p",[t._v("详细点的图解：")]),t._v(" "),s("p",[s("img",{attrs:{src:v(718),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"【讨论题】浏览器输入地址到页面展示-中间总共经历了什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#【讨论题】浏览器输入地址到页面展示-中间总共经历了什么"}},[t._v("#")]),t._v(" 【讨论题】浏览器输入地址到页面展示，中间总共经历了什么？")]),t._v(" "),s("p",[t._v("​1.浏览器输入url。先解析url地址是否合法。\n2. 浏览器检查是否有缓存（浏览器缓存-系统缓存-路由器缓存）。如果有，直接显示。如果没有，跳到第三步。\n3. 在发送http请求前，需要域名解析（DNS解析），解析获取对应过的ip地址。\n4. 浏览器向服务器发起tcp链接，与浏览器简历tcp三次握手。\n5. 握手成功后，浏览器向服务器发送http请求，请求数据包。\n6. 服务器收到处理的请求，将数据返回至浏览器。\n7. 浏览器收到http响应。\n8. 浏览器解析响应。如果响应可以缓存，则存入缓存。\n9. 浏览器发送请求获取嵌入在HTML中的资源（html，css，JavaScript，图片，音乐等），对于未知类型，会弹出对话框。\n10. 浏览器发送异步请求。\n11. 页面全部渲染结束。")]),t._v(" "),s("h2",{attrs:{id:"实验-与http请求的第一次亲密接触"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实验-与http请求的第一次亲密接触"}},[t._v("#")]),t._v(" 实验：与HTTP请求的第一次亲密接触")])])}),[],!1,null,null,null);_.default=a.exports},707:function(t,_,v){t.exports=v.p+"assets/img/1.6a776082.png"},708:function(t,_,v){t.exports=v.p+"assets/img/2.c149fbb3.png"},709:function(t,_,v){t.exports=v.p+"assets/img/3.2fe93a92.png"},710:function(t,_,v){t.exports=v.p+"assets/img/4.b5734f6b.png"},711:function(t,_,v){t.exports=v.p+"assets/img/5.4d4bc070.png"},712:function(t,_,v){t.exports=v.p+"assets/img/6.5f8d2fd1.png"},713:function(t,_,v){t.exports=v.p+"assets/img/7.6a02587a.png"},714:function(t,_,v){t.exports=v.p+"assets/img/8.1e1e82d0.png"},715:function(t,_,v){t.exports=v.p+"assets/img/9.12c23659.png"},716:function(t,_,v){t.exports=v.p+"assets/img/10.bdada1af.png"},717:function(t,_,v){t.exports=v.p+"assets/img/11.6d10f50d.png"},718:function(t,_,v){t.exports=v.p+"assets/img/12.f489075c.png"}}]);