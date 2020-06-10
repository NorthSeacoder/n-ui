(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{752:function(t,n,e){"use strict";e.r(n);var l=e(0),i=Object(l.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"button-按钮"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#button-按钮"}},[t._v("#")]),t._v(" Button 按钮")]),t._v(" "),e("p",[t._v("用于主动操作后的反馈")]),t._v(" "),e("h2",{attrs:{id:"基础使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础使用"}},[t._v("#")]),t._v(" 基础使用")]),t._v(" "),e("vue-live",{attrs:{layoutProps:{lang:"vue"},code:'<template>\n\t<div>\n\t\t<n-button  @click="handleClick">click me</n-button>\n\t\t<n-button disabled @click="handleClick">Disabled</n-button>\n\t</div>\n</template>\n\n<script>\nexport default {\n\t data() {\n        return {\n        }\n    },\n\tmethods:{\n\t\thandleClick(event) {\n\t\t\tconst vm = this;\n\t\t\tthis.$toast.info(\'click me!\');\n        }\n\t}\n}\n<\/script>\n',requires:{}}}),e("h2",{attrs:{id:"不同状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不同状态"}},[t._v("#")]),t._v(" 不同状态")]),t._v(" "),e("vue-live",{attrs:{layoutProps:{lang:"vue"},code:'<template>\n\t<div>\n\t\t<n-button  @click="handleClick">Click me</n-button>\n\t\t<n-button theme="primary">Click me</n-button>\n\t\t<n-button theme="danger">Click me</n-button>\n\t</div>\n</template>\n\n<script>\nexport default {\n\tdata() {\n        return {\n        }\n    },\n\t\n\tmethods:{\n\t\thandleClick(event) {\n\t\t\tconst vm = this;\n\t\t\tvm.$toast.info(\'theme\')\n        }\n\t}\n}\n<\/script>\n',requires:{}}}),e("h2",{attrs:{id:"大小"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#大小"}},[t._v("#")]),t._v(" 大小")]),t._v(" "),e("vue-live",{attrs:{layoutProps:{lang:"vue"},code:'<template>\n<div>\n\t<div style="margin: 10px;">\n        <n-button size="sm" @click="handleClick">Normal</n-button>\n        <n-button theme="primary" size="sm" @click="handleClick">Primary</n-button>\n        <n-button theme="danger" size="sm" @click="handleClick">Danger</n-button>\n        <n-button size="sm" @click="handleClick" diabled>Disabled</n-button>\n    </div>\n\n    <div style="margin: 10px;">\n        <n-button size="md" @click="handleClick">Normal</n-button>\n        <n-button theme="primary" size="md" @click="handleClick">Primary</n-button>\n        <n-button theme="danger" size="md" @click="handleClick">Danger</n-button>\n        <n-button size="md" @click="handleClick" diabled>Disabled</n-button>\n    </div>\n\n    <div style="margin: 10px;">\n        <n-button size="lg" @click="handleClick">Normal</n-button>\n        <n-button theme="primary" size="lg" @click="handleClick">Primary</n-button>\n        <n-button theme="danger" size="lg" @click="handleClick">Danger</n-button>\n        <n-button size="lg" @click="handleClick" diabled>Disabled</n-button>\n    </div>\n</div>\n     \n</template>\n\n<script>\n    export default {\n\t\tdata() {\n        return {\n        }\n    },\n        methods: {\n            handleClick() {\n                this.$toast.info(\'click!\');\n            }\n        }\n    };\n<\/script>\n',requires:{}}}),e("h2",{attrs:{id:"形状"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#形状"}},[t._v("#")]),t._v(" 形状")]),t._v(" "),e("vue-live",{attrs:{layoutProps:{lang:"vue"},code:'<template>\n\t<div>\n     <div style="margin: 10px;">\n        <n-button size="sm" @click="handleClick">Normal</n-button>\n        <n-button shape="round" size="sm" @click="handleClick">Round</n-button>\n        <n-button shape="icon" size="sm" @click="handleClick">\n            <i class="n-icon-love"></i>\n        </n-button>\n        <n-button shape="simple" size="sm" @click="handleClick">Simple</n-button>\n        <n-button shape="link" size="sm" @click="handleClick">Link</n-button>\n    </div>\n    <div style="margin: 10px;">\n        <n-button @click="handleClick">Normal</n-button>\n        <n-button shape="round" @click="handleClick">Round</n-button>\n        <n-button shape="icon" @click="handleClick">\n            <i class="n-icon-love"></i>\n        </n-button>\n        <n-button shape="simple" @click="handleClick">Simple</n-button>\n        <n-button shape="link" @click="handleClick">Link</n-button>\n    </div>\n    <div style="margin: 10px;">\n        <n-button size="lg" @click="handleClick">Normal</n-button>\n        <n-button shape="round" size="lg" @click="handleClick">Round</n-button>\n        <n-button shape="icon" size="lg" @click="handleClick">\n            <i class="n-icon-love"></i>\n        </n-button>\n        <n-button shape="simple" size="lg" @click="handleClick">Simple</n-button>\n        <n-button shape="link" size="lg" @click="handleClick">Link</n-button>\n    </div>\n    <div style="margin: 10px;">\n        <n-button shape="block" size="sm" @click="handleClick">Block</n-button>\n    </div>\n    <div style="margin: 10px;">\n        <n-button shape="block" @click="handleClick">Block</n-button>\n    </div>\n    <div style="margin: 10px;">\n        <n-button shape="block" size="lg" @click="handleClick">Block</n-button>\n    </div>\n\t</div>\n</template>\n\n<script>\n    export default {\n\t\tdata() {\n        return {\n        }\n    },\n        methods: {\n            handleClick() {\n                this.$toast.info(\'click!\');\n            }\n        }\n    };\n<\/script>\n',requires:{}}}),e("h2",{attrs:{id:"定制-style"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定制-style"}},[t._v("#")]),t._v(" 定制 style")]),t._v(" "),e("vue-live",{attrs:{layoutProps:{lang:"vue"},code:"<template>\n\t<div>\n\t\t<n-button @click=\"handleClick\">Normal</n-button>\n\t\t<n-button :btn-style=\"btnStyle\" @click=\"handleClick\">Customized</n-button>\n\t</div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                btnStyle: {\n                    color: 'white',\n                    backgroundColor: '#00bcd4',\n                    border: 'none'\n                }\n            }\n        },\n\n        methods: {\n            handleClick() {\n                this.$toast.info('按钮被点击!');\n            }\n        }\n    };\n<\/script>\n",requires:{}}}),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" usage")]),t._v(" "),e("h4",{attrs:{id:"props"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Desc")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("autofocus")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("是否自动地获得焦点， 默认为 false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("btn-style")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Object")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("自定义按钮的样式")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("disabled")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("是否禁用，默认为 false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("name")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("button name，默认为 null")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("shape")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("按钮的形状，可选值为 'block'、'normal'、'icon'、'link'、'round'、'simple'，默认为 'normal'")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("size")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("按钮的大小，可选值为 'sm'、'md'、'lg'，默认为 'md'")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("theme")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("按钮的主题，可选值为 'normal'、'danger'、'primary'，默认为 'normal'")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("type")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("按钮的类型，可选值为 'button'、'reset'、'submit'，默认为 'submit'")])])])]),t._v(" "),e("h4",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Desc")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("click")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("(value: any) => void")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("model event, 点击按钮时触发")])])])])],1)}),[],!1,null,null,null);n.default=i.exports}}]);