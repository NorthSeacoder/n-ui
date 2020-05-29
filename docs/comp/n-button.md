# Button 按钮
用于主动操作后的反馈
## 基础使用

```vue live
<template>
	<div>
		<n-button  @click="handleClick">click me</n-button>
		<n-button disabled @click="handleClick">Disabled</n-button>
	</div>
</template>

<script>
export default {
	 data() {
        return {
        }
    },
	methods:{
		handleClick(event) {
			const vm = this;
			this.$toast.info('click me!');
        }
	}
}
</script>
```

## 不同状态  

```vue live
<template>
	<div>
		<n-button  @click="handleClick">Click me</n-button>
		<n-button theme="primary">Click me</n-button>
		<n-button theme="danger">Click me</n-button>
	</div>
</template>

<script>
export default {
	data() {
        return {
        }
    },
	
	methods:{
		handleClick(event) {
			const vm = this;
			vm.$toast.info('theme')
        }
	}
}
</script>
```
## 大小

```vue live
<template>
<div>
	<div style="margin: 10px;">
        <n-button size="sm" @click="handleClick">Normal</n-button>
        <n-button theme="primary" size="sm" @click="handleClick">Primary</n-button>
        <n-button theme="danger" size="sm" @click="handleClick">Danger</n-button>
        <n-button size="sm" @click="handleClick" diabled>Disabled</n-button>
    </div>

    <div style="margin: 10px;">
        <n-button size="md" @click="handleClick">Normal</n-button>
        <n-button theme="primary" size="md" @click="handleClick">Primary</n-button>
        <n-button theme="danger" size="md" @click="handleClick">Danger</n-button>
        <n-button size="md" @click="handleClick" diabled>Disabled</n-button>
    </div>

    <div style="margin: 10px;">
        <n-button size="lg" @click="handleClick">Normal</n-button>
        <n-button theme="primary" size="lg" @click="handleClick">Primary</n-button>
        <n-button theme="danger" size="lg" @click="handleClick">Danger</n-button>
        <n-button size="lg" @click="handleClick" diabled>Disabled</n-button>
    </div>
</div>
     
</template>

<script>
    export default {
		data() {
        return {
        }
    },
        methods: {
            handleClick() {
                this.$toast.info('click!');
            }
        }
    };
</script>
```

## 形状
```vue live
<template>
	<div>
     <div style="margin: 10px;">
        <n-button size="sm" @click="handleClick">Normal</n-button>
        <n-button shape="round" size="sm" @click="handleClick">Round</n-button>
        <n-button shape="icon" size="sm" @click="handleClick">
            <i class="n-icon-love"></i>
        </n-button>
        <n-button shape="simple" size="sm" @click="handleClick">Simple</n-button>
        <n-button shape="link" size="sm" @click="handleClick">Link</n-button>
    </div>
    <div style="margin: 10px;">
        <n-button @click="handleClick">Normal</n-button>
        <n-button shape="round" @click="handleClick">Round</n-button>
        <n-button shape="icon" @click="handleClick">
            <i class="n-icon-love"></i>
        </n-button>
        <n-button shape="simple" @click="handleClick">Simple</n-button>
        <n-button shape="link" @click="handleClick">Link</n-button>
    </div>
    <div style="margin: 10px;">
        <n-button size="lg" @click="handleClick">Normal</n-button>
        <n-button shape="round" size="lg" @click="handleClick">Round</n-button>
        <n-button shape="icon" size="lg" @click="handleClick">
            <i class="n-icon-love"></i>
        </n-button>
        <n-button shape="simple" size="lg" @click="handleClick">Simple</n-button>
        <n-button shape="link" size="lg" @click="handleClick">Link</n-button>
    </div>
    <div style="margin: 10px;">
        <n-button shape="block" size="sm" @click="handleClick">Block</n-button>
    </div>
    <div style="margin: 10px;">
        <n-button shape="block" @click="handleClick">Block</n-button>
    </div>
    <div style="margin: 10px;">
        <n-button shape="block" size="lg" @click="handleClick">Block</n-button>
    </div>
	</div>
</template>

<script>
    export default {
		data() {
        return {
        }
    },
        methods: {
            handleClick() {
                this.$toast.info('click!');
            }
        }
    };
</script>
```
## 定制 style
```vue live
<template>
	<div>
		<n-button @click="handleClick">Normal</n-button>
		<n-button :btn-style="btnStyle" @click="handleClick">Customized</n-button>
	</div>
</template>

<script>
    export default {
        data() {
            return {
                btnStyle: {
                    color: 'white',
                    backgroundColor: '#00bcd4',
                    border: 'none'
                }
            }
        },

        methods: {
            handleClick() {
                this.$toast.info('按钮被点击!');
            }
        }
    };
</script>
```
## usage
#### Props

|Name|Type|Desc|
|:-:|:-:|:-:|
|`autofocus`|`Boolean`|是否自动地获得焦点， 默认为 `false`|
|`btn-style`|`Object`|自定义按钮的样式|
|`disabled`|`Boolean`|是否禁用，默认为 `false`|
|`name`|`String`|button name，默认为 `null`|
|`shape`|`String`|按钮的形状，可选值为 `'block'`、`'normal'`、`'icon'`、`'link'`、`'round'`、`'simple'`，默认为 `'normal'`|
|`size`|`String`|按钮的大小，可选值为 `'sm'`、`'md'`、`'lg'`，默认为 `'md'`|
|`theme`|`String`|按钮的主题，可选值为 `'normal'`、`'danger'`、`'primary'`，默认为 `'normal'`|
|`type`|`String`|按钮的类型，可选值为 `'button'`、`'reset'`、`'submit'`，默认为 `'submit'`|

#### Events

|Name|Type|Desc|
|:-:|:-:|:-:|
|`click`|`(value: any) => void`|model event, 点击按钮时触发|