(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{368:function(t,s,a){"use strict";a.r(s);var e=a(25),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" Git")]),t._v(" "),a("h2",{attrs:{id:"安装配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装配置"}},[t._v("#")]),t._v(" 安装配置")]),t._v(" "),a("h3",{attrs:{id:"windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" Windows")]),t._v(" "),a("p",[t._v("安装包下载地址："),a("a",{attrs:{href:"https://gitforwindows.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitforwindows.org/"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("完成安装之后，就可以使用命令行的 Git 工具（已经自带了 ssh 客户端）")]),t._v(" "),a("p",[t._v('在开始菜单里找到"Git"，内有3个工具 '),a("code",[t._v("Git Bash")]),t._v(" / "),a("code",[t._v("Git CMD")]),t._v(" / "),a("code",[t._v("Git GUI")])]),t._v(" "),a("h3",{attrs:{id:"git配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git配置"}},[t._v("#")]),t._v(" Git配置")]),t._v(" "),a("p",[t._v("Git 提供了一个叫做 git config 的工具，专门用来配置或读取相应的工作环境变量。")]),t._v(" "),a("p",[t._v("这些环境变量，决定了 Git 在各个环节的具体工作方式和行为。这些变量可以存放在以下三个不同的地方：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("/etc/gitconfig")]),t._v(" 文件：系统中对所有用户都普遍适用的配置。若使用 "),a("code",[t._v("git config")]),t._v(" 时用 "),a("code",[t._v("--system")]),t._v(" 选项，读写的就是这个文件。")]),t._v(" "),a("li",[a("code",[t._v("~/.gitconfig")]),t._v(" 文件：用户目录下的配置文件只适用于该用户。若使用 "),a("code",[t._v("git config")]),t._v(" 时用 "),a("code",[t._v("--global")]),t._v(" 选项，读写的就是这个文件。")]),t._v(" "),a("li",[t._v("当前项目的 Git 目录中的配置文件（也就是工作目录中的 "),a("code",[t._v(".git/config")]),t._v(" 文件）：这里的配置仅仅针对当前项目有效。每一个级别的配置都会覆盖上层的相同配置，所以 "),a("code",[t._v(".git/config")]),t._v(" 里的配置会覆盖 "),a("code",[t._v("/etc/gitconfig")]),t._v(" 中的同名变量。")])]),t._v(" "),a("p",[t._v("在 Windows 系统上，Git 会找寻用户主目录下的 "),a("code",[t._v(".gitconfig")]),t._v(" 文件。主目录即 "),a("code",[t._v("$HOME")]),t._v(" 变量指定的目录，一般都是 "),a("code",[t._v("C:\\Documents and Settings\\$USER")])]),t._v(" "),a("p",[t._v("此外，Git 还会尝试找寻 "),a("code",[t._v("/etc/gitconfig")]),t._v(" 文件，只不过看当初 "),a("code",[t._v("Git")]),t._v(" 装在什么目录，就以此作为根目录来定位。")]),t._v(" "),a("h3",{attrs:{id:"用户信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户信息"}},[t._v("#")]),t._v(" 用户信息")]),t._v(" "),a("p",[t._v("配置一个人的用户名称和电子邮件地址：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pangxi"')]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email xxxx@qq.com\n")])])]),a("p",[t._v("检查已有的配置信息")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --list\nuser.name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("pangxi\nuser.email"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("xxxxx@qq.com\n")])])]),a("p",[t._v("若要在某个特定的项目中使用其他名字或者电邮，只要去掉 "),a("code",[t._v("--global")]),t._v(" 选项重新配置即可，新的设定保存在当前项目的 "),a("code",[t._v(".git/config")]),t._v(" 文件里。")]),t._v(" "),a("h3",{attrs:{id:"文本编辑器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文本编辑器"}},[t._v("#")]),t._v(" 文本编辑器")]),t._v(" "),a("p",[t._v("设置Git默认使用的文本编辑器, 一般是 Vi 或者 Vim 或 Emacs。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global core.editor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("编译器名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h2",{attrs:{id:"流程概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流程概念"}},[t._v("#")]),t._v(" 流程概念")]),t._v(" "),a("h3",{attrs:{id:"工作流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作流程"}},[t._v("#")]),t._v(" 工作流程")]),t._v(" "),a("ul",[a("li",[t._v("克隆 Git 资源作为本地工作目录")]),t._v(" "),a("li",[t._v("在克隆的资源上添加或修改文件。")]),t._v(" "),a("li",[t._v("如果其他人修改了，你可以更新资源。")]),t._v(" "),a("li",[t._v("在提交前查看修改。")]),t._v(" "),a("li",[t._v("提交修改。")]),t._v(" "),a("li",[t._v("如果发现错误，可撤回提交并再次修改并提交。")])]),t._v(" "),a("h3",{attrs:{id:"工作区、暂存区、版本库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作区、暂存区、版本库"}},[t._v("#")]),t._v(" 工作区、暂存区、版本库")]),t._v(" "),a("ul",[a("li",[t._v("工作区：就是你电脑里的本地目录。")]),t._v(" "),a("li",[t._v("暂存区：英文叫stage或index。一般存放在 "),a("code",[t._v(".git/index")]),t._v(" ，所以暂存区有时也叫索引（index）。")]),t._v(" "),a("li",[t._v("版本库：工作区里有个隐藏目录 "),a("code",[t._v(".git")]),t._v(" ，这个不算工作区，而是Git的版本库。")])]),t._v(" "),a("h2",{attrs:{id:"创建与获取项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建与获取项目"}},[t._v("#")]),t._v(" 创建与获取项目")]),t._v(" "),a("h3",{attrs:{id:"git-init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-init"}},[t._v("#")]),t._v(" git init")]),t._v(" "),a("p",[t._v("git init 在目录中创建新的 Git 仓库。你可以在任何时候、任何目录中这么做，完全是本地化的。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 初始化当前目录作为仓库")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建目录作为仓库")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("目录名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("以上两个命令都会生成 .git 目录。")]),t._v(" "),a("p",[t._v("若文件纳入版本控制，先用 git add 命令告诉 Git 对这些文件进行跟踪，然后提交：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" *.c "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 目录下以 .c 结尾的文件")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" README "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# README文件")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'提交说明：好好好'")]),t._v("\n")])])]),a("h3",{attrs:{id:"git-clone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-clone"}},[t._v("#")]),t._v(" git clone")]),t._v(" "),a("p",[t._v("我们使用 git clone 从现有 Git 仓库中拷贝项目")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 克隆仓库的命令格式；若克隆到指定的新目录，命令末尾指定新的名字。")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("repo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("directory"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git://github.com/schacon/grit.git\n")])])]),a("h2",{attrs:{id:"基本快照"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本快照"}},[t._v("#")]),t._v(" 基本快照")]),t._v(" "),a("p",[t._v("Git 的工作就是创建和保存你的项目的快照及与之后的快照进行对比。")]),t._v(" "),a("h3",{attrs:{id:"git-add"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-add"}},[t._v("#")]),t._v(" git add")]),t._v(" "),a("p",[t._v("git add 可将该文件添加到缓存。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当前目录添加到缓存")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对文件名添加到缓存")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("文件名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h3",{attrs:{id:"git-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-status"}},[t._v("#")]),t._v(" git status")]),t._v(" "),a("p",[t._v("git status 查看在你上次提交之后是否有修改。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 以精简的方式显示文件状态")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status -s\n")])])]),a("h3",{attrs:{id:"git-diff"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-diff"}},[t._v("#")]),t._v(" git diff")]),t._v(" "),a("p",[t._v("git diff 查看执行 git status 的结果的详细信息。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看未缓存的改动")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看已缓存的改动")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --cached\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看为缓和已缓的改动")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" HEAD\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示摘要而非整个diff")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --stat\n")])])]),a("h3",{attrs:{id:"git-commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-commit"}},[t._v("#")]),t._v(" git commit")]),t._v(" "),a("p",[t._v("git add 将想要快照的内容写入缓存区，而 git commit 将缓存区内容添加到仓库中。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -a以跳过 git add 提交缓存的流程")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -a\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -m以在命令行中提供提交注释：")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'你的描述'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 两者兼顾")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -am "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'你的描述'")]),t._v("\n")])])]),a("h3",{attrs:{id:"git-reset-head"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-reset-head"}},[t._v("#")]),t._v(" git reset HEAD")]),t._v(" "),a("p",[t._v("用于取消已缓存的内容，以取消之前 git add 添加，但不希望包含在下一提交快照中的缓存。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset HEAD "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h3",{attrs:{id:"git-rm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-rm"}},[t._v("#")]),t._v(" git rm")]),t._v(" "),a("p",[t._v("要从 Git 中移除某个文件，就要从已跟踪文件清单中移除;-f。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除文件，从已跟踪文件清单中移除")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果删除之前修改过并且已经放到暂存区域的话，要用强制删除选项")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -f "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不从工作区中删除文件，仅是从跟踪清单中删除")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" --cached "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 递归删除整个目录中的所有子目录和文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" –r * \n")])])]),a("h3",{attrs:{id:"git-mv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-mv"}},[t._v("#")]),t._v(" git mv")]),t._v(" "),a("p",[t._v("git mv 命令用于移动或重命名一个文件、目录、软连接。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对其重名")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" README  README.md\n")])])]),a("h2",{attrs:{id:"分支管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支管理"}},[t._v("#")]),t._v(" 分支管理")]),t._v(" "),a("p",[t._v("有人把 Git 的分支模型称为必杀技特性，而正是因为它，将 Git 从版本控制系统家族里区分出来。")]),t._v(" "),a("h3",{attrs:{id:"创建、切换、列出、删除、合并"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建、切换、列出、删除、合并"}},[t._v("#")]),t._v(" 创建、切换、列出、删除、合并")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建分支")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("branchname"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换分支")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("branchname"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("branchname"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建分支并切换到该分支")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出分支")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除分支")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("branchname"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 合并分支")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h3",{attrs:{id:"合并例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合并例子"}},[t._v("#")]),t._v(" 合并例子")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 先用 branch 查看分支")]),t._v("\n* master\n  newtest\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("\nREADME        test.txt\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge newtest "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 合并分支")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d newtest "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 合并完后就可以删除分支:")]),t._v("\n")])])]),a("h3",{attrs:{id:"合并冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合并冲突"}},[t._v("#")]),t._v(" 合并冲突")]),t._v(" "),a("p",[t._v("合并并不仅仅是简单的文件添加、移除的操作，Git 也会合并修改。有点难理解。")]),t._v(" "),a("h2",{attrs:{id:"查看提交历史"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看提交历史"}},[t._v("#")]),t._v(" 查看提交历史")]),t._v(" "),a("h3",{attrs:{id:"git-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-log"}},[t._v("#")]),t._v(" git log")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看回顾下提交历史")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log\n")])])]),a("h3",{attrs:{id:"oneline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oneline"}},[t._v("#")]),t._v(" --oneline")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看历史记录的简洁版本")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --oneline\n")])])]),a("h3",{attrs:{id:"graph"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graph"}},[t._v("#")]),t._v(" --graph")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启了拓扑图选项：可以更清楚地看到何时工作分叉、又何时合并")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --graph\n")])])]),a("h3",{attrs:{id:"reverse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reverse"}},[t._v("#")]),t._v(" --reverse")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 逆向显示所有日志")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --oneline --reverse\n")])])]),a("h3",{attrs:{id:"author-用户名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#author-用户名"}},[t._v("#")]),t._v(" --author=<用户名>")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查找指定用户的提交日志")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --author"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Linus --oneline -5\n")])])]),a("h3",{attrs:{id:"指定日期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指定日期"}},[t._v("#")]),t._v(" 指定日期")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可以执行几个选项：--since 和 --before，也可以用 --until 和 --after")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --oneline --before"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(".weeks.ago"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" --after"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2010")]),t._v("-04-18"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" --no-merges\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);