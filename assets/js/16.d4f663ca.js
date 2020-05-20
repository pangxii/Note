(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{369:function(s,t,a){"use strict";a.r(t);var n=a(25),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"nodejs环境变量的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodejs环境变量的配置"}},[s._v("#")]),s._v(" Nodejs环境变量的配置")]),s._v(" "),a("h2",{attrs:{id:"环境变量的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境变量的配置"}},[s._v("#")]),s._v(" 环境变量的配置")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("说明")]),s._v(" "),a("p",[s._v("这里的环境配置主要配置的是 npm 安装的全局模块所在的路径，以及缓存cache的路径，之所以要配置，是因为以后在执行类似："),a("code",[s._v("npm install express -g")]),s._v(" (g代表global全局安装)的安装语句时，会将安装的模块安装到【C:\\Users\\Administrator\\AppData\\Roaming\\npm】路径中，占C盘空间。")])]),s._v(" "),a("p",[s._v("例如：我希望将全模块所在路径和缓存路径放在我 node.js 安装的文件夹中，则在我安装的文件夹 "),a("code",[s._v("C:\\Program Files\\nodejs")]),s._v(" 下创建两个文件夹 "),a("code",[s._v("node_global")]),s._v(" 和 "),a("code",[s._v("node_cache")]),s._v(" ，创建完两个空文件夹之后，打开cmd命令窗口，输入")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" cache "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:\\Program Files'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("odejs"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('ode_cache"')]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" prefix "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:\\Program Files'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("odejs"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('ode_global"')]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config list "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取npm配置信息")]),s._v("\n")])])]),a("p",[s._v("接下来设置环境变量，【我的电脑】-右键-【属性】-【高级系统设置】-【高级】-【环境变量】")]),s._v(" "),a("p",[s._v("进入环境变量对话框，在 【系统变量】 下新建变量")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("变量名: NODE_PATH\n变量值: C:\\Program Files\\nodejs\\node_global\\node_modules\n")])])]),a("p",[s._v("将【用户变量】下的【Path】")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("原来为: C:\\Users\\Administrator\\AppData\\Roaming\\npm\n修改为: C:\\Program Files\\nodejs\\node_global\n")])])]),a("h2",{attrs:{id:"测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[s._v("#")]),s._v(" 测试")]),s._v(" "),a("p",[s._v("配置完后，安装个module测试下，我们就安装最常用的express模块，打开cmd窗口，")]),s._v(" "),a("p",[s._v("输入如下命令进行模块的全局安装：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" express -g  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -g是全局安装的意思")]),s._v("\n")])])]),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("安装后重启就好")])]),s._v(" "),a("h2",{attrs:{id:"nrm管理工具切换-npm-镜像源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nrm管理工具切换-npm-镜像源"}},[s._v("#")]),s._v(" nrm管理工具切换 NPM 镜像源")]),s._v(" "),a("p",[s._v("由于 "),a("code",[s._v("npm原始源")]),s._v(" 会请求国外服务器，对于国内的开发者着实不友好，使用 "),a("code",[s._v("nrm")]),s._v(" (全称：NPM registry manager) 可以快速地在不同 "),a("code",[s._v("npm镜像源")]),s._v(" 之间进行快速切换。")]),s._v(" "),a("p",[s._v("GitHub 地址:"),a("a",{attrs:{href:"https://github.com/Pana/nrm",target:"_blank",rel:"noopener noreferrer"}},[s._v("nrm -- NPM registry manager"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g nrm\n")])])]),a("blockquote",[a("p",[s._v("npm install packageName -g\n// 安装 npm 包的指令，-g 是 global 的缩写，意为全局安装")])]),s._v(" "),a("h3",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ nrm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  查看所有可切换的 npm镜像源 , 带*为当前正在使用的 npm镜像源")]),s._v("\n$ nrm use npmImageName "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到列表中存在的 npm镜像源")]),s._v("\n$ nrm use taobao "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用淘宝镜像为例")]),s._v("\n$ nrm "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过nrm test npm来测试速度")]),s._v("\n")])])]),a("p",[s._v("安装完成请一定要重启下电脑！！！")]),s._v(" "),a("p",[s._v("此后再调用 "),a("code",[s._v("npm install")]),s._v(" 下载任意包都会使用新的 "),a("code",[s._v("npm镜像源")]),s._v(" 进行下载。")])])}),[],!1,null,null,null);t.default=e.exports}}]);