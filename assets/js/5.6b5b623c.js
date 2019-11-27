(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{208:function(t,a,s){t.exports=s.p+"assets/img/api-gateway-preview.9e03d17d.png"},222:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"托管-api-功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#托管-api-功能"}},[t._v("#")]),t._v(" 托管 API 功能")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("ol",[e("li",[t._v("请先参考 "),e("router-link",{attrs:{to:"/guide/advance/api-gateway.html"}},[t._v("文档")]),t._v(" 搭建托管 API")],1),t._v(" "),e("li",[t._v("该文档仅针对 now.sh 类型的部署")])])]),t._v(" "),e("h2",{attrs:{id:"接口鉴权"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#接口鉴权"}},[t._v("#")]),t._v(" 接口鉴权")]),t._v(" "),e("h3",{attrs:{id:"打开鉴权"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#打开鉴权"}},[t._v("#")]),t._v(" 打开鉴权")]),t._v(" "),e("p",[t._v("在 "),e("code",[t._v("surgio.conf.js")]),t._v(" 中增加如下字段：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  gateway"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    auth"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    accessToken"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YOUR_PASSWORD'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"请求需要鉴权的接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求需要鉴权的接口"}},[t._v("#")]),t._v(" 请求需要鉴权的接口")]),t._v(" "),e("p",[t._v("请在请求的 URL 中加入参数 "),e("code",[t._v("access_token")]),t._v("，值为上面所设。")]),t._v(" "),e("h4",{attrs:{id:"未开启鉴权"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#未开启鉴权"}},[t._v("#")]),t._v(" 未开启鉴权")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("https://xxxxxx.xxx.now.sh/list-artifact\n")])])]),e("h4",{attrs:{id:"开启鉴权"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开启鉴权"}},[t._v("#")]),t._v(" 开启鉴权")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("https://xxxxxx.xxx.now.sh/list-artifact?access_token=YOUR_PASSWORD\n")])])]),e("h2",{attrs:{id:"接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#接口"}},[t._v("#")]),t._v(" 接口")]),t._v(" "),e("h3",{attrs:{id:"展示所有-artifact"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#展示所有-artifact"}},[t._v("#")]),t._v(" 展示所有 Artifact")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("GET /list-artifact\n")])])]),e("Badge",{attrs:{text:"需要鉴权",vertical:"middle"}}),t._v(" "),e("p",[e("img",{attrs:{src:s(208),alt:""}})]),t._v(" "),e("p",[t._v("特性：")]),t._v(" "),e("ul",[e("li",[t._v("若名称中包含 "),e("code",[t._v("surge")]),t._v("（大小写不敏感），则会出现添加到 Surge 的按钮。")]),t._v(" "),e("li",[t._v("若名称中包含 "),e("code",[t._v("clash")]),t._v("（大小写不敏感），则会出现添加到 ClashX/CFW 的按钮。")]),t._v(" "),e("li",[t._v("若项目下的 "),e("code",[t._v("package.json")]),t._v(" 有 "),e("code",[t._v("repository")]),t._v(" 字段，则支持直接跳转到 GitLab 或 GitHub 编辑对应文件。")])]),t._v(" "),e("h3",{attrs:{id:"下载-artifact"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载-artifact"}},[t._v("#")]),t._v(" 下载 Artifact")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("GET /get-artifact/<artifactName>\n")])])]),e("Badge",{attrs:{text:"需要鉴权",vertical:"middle"}}),t._v(" "),e("p",[t._v("可选参数：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("可选值")]),t._v(" "),e("th",[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("format")])]),t._v(" "),e("td",[e("code",[t._v("surge-policy")]),t._v(", "),e("code",[t._v("qx-server")])]),t._v(" "),e("td",[e("Badge",{attrs:{text:"v1.6.0",vertical:"middle"}})],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("filter")])]),t._v(" "),e("td",[t._v("内置的过滤器或自定义过滤器")]),t._v(" "),e("td",[e("Badge",{attrs:{text:"v1.6.0",vertical:"middle"}})],1)])])]),t._v(" "),e("p",[t._v("定义：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("surge-policy")]),t._v(" Surge 远程节点 Policy")]),t._v(" "),e("li",[e("code",[t._v("qx-server")]),t._v(" QuantumultX 远程节点")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("ol",[e("li",[e("code",[t._v("format")]),t._v(" 使用的是内置的模板，所以你不需要额外定义模板格式，不过仍然需要定义一个完整的 Artifact。我的建议是定义一个有完整节点的 Artifact，然后根据需要过滤出节点。")]),t._v(" "),e("li",[e("code",[t._v("filter")]),t._v(" 的值为过滤器的名称。你可以直接使用内置的过滤器，例如 "),e("code",[t._v("hkFilter")]),t._v("，也可以使用自定义的过滤器。")])])]),t._v(" "),e("h3",{attrs:{id:"转换-quantumult-x-远程脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#转换-quantumult-x-远程脚本"}},[t._v("#")]),t._v(" 转换 Quantumult X 远程脚本")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("GET /qx-script?url=<远程脚本地址>\n")])])]),e("p",[t._v("可选参数：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("值")]),t._v(" "),e("th",[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("id")])]),t._v(" "),e("td",[t._v("设备 ID")]),t._v(" "),e("td",[t._v("多个值以半角 "),e("code",[t._v(",")]),t._v(" 分隔")])])])]),t._v(" "),e("p",[t._v("会在脚本内容中注入设备 ID。")]),t._v(" "),e("p",[t._v("使用时，将规则放入 "),e("code",[t._v("rewrite_local")]),t._v(" 即可。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[rewrite_local]\n^http://example\\.com/resource/ url script-echo-response https://xxx.xx.now.sh/qx-script?url=https://raw.githubusercontent.com/crossutility/Quantumult-X/master/sample-rewrite-with-script.js\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("ol",[e("li",[t._v("若 URL 中有参数 "),e("code",[t._v("id")]),t._v(" 则只会添加参数中的值而忽略配置中的值。")]),t._v(" "),e("li",[t._v("你可以在全局配置中添加 "),e("router-link",{attrs:{to:"/guide/custom-config.html#quantumultxconfig-deviceids"}},[t._v("固定的设备 ID")]),t._v("。")],1)])]),t._v(" "),e("h3",{attrs:{id:"转换-quantumult-x-rewrite-remote"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#转换-quantumult-x-rewrite-remote"}},[t._v("#")]),t._v(" 转换 Quantumult X rewrite_remote")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("GET /qx-rewrite-remote?url=<远程脚本地址>\n")])])]),e("p",[t._v("可选参数：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("值")]),t._v(" "),e("th",[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("id")])]),t._v(" "),e("td",[t._v("设备 ID")]),t._v(" "),e("td",[t._v("多个值以半角 "),e("code",[t._v(",")]),t._v(" 分隔")])])])]),t._v(" "),e("p",[t._v("以 "),e("a",{attrs:{href:"https://github.com/NobyDa/Script/blob/master/QuantumultX/Js.conf",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个脚本"),e("OutboundLink")],1),t._v(" 为例，API 会将内容里的 "),e("code",[t._v("script-response-body")]),t._v(" 条目的脚本地址替换成注入设备 ID API 的地址。")]),t._v(" "),e("p",[t._v("使用时，将规则放入 "),e("code",[t._v("rewrite_remote")]),t._v(" 即可。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[rewrite_remote]\nhttps://xxx.xx.now.sh/qx-rewrite-remote?url=https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/Js.conf, tag=NobyDa, enabled=true\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("ol",[e("li",[t._v("若 URL 中有参数 "),e("code",[t._v("id")]),t._v(" 则只会添加参数中的值而忽略配置中的值。")]),t._v(" "),e("li",[t._v("你可以在全局配置中添加 "),e("router-link",{attrs:{to:"/guide/custom-config.html#quantumultxconfig-deviceids"}},[t._v("固定的设备 ID")]),t._v("。")],1)])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);