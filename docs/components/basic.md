# Basic

## Button 按钮
用于主动操作后的反馈
### 基础使用

<template>
	<n-button  @click="handleClick">Click me</n-button>
</template>

### 不同状态  

<template>
	<n-button  @click="handleClick">Click me</n-button>
	<n-button theme="primary">Click me</n-button>
	<n-button theme="danger">Click me</n-button>
</template>

### usage
<script>
export default {
	methods:{
		handleClick(event) {
			const vm = this;
			vm.$toast.success('test')
        }
	}
}
</script>
## Icon
提供了一套常用的图标集合。
### 使用方法
设置类名

### 图标集合
<template>
	<i class="n-icon-yuque" ></i>
	<i class="n-icon-n" ></i>
	<i class="n-icon-qq" ></i>
	<i class="n-icon-wx" ></i>
	<i class="n-icon-phone" ></i>
	<i class="n-icon-util" ></i>
	<i class="n-icon-blog" ></i>
	<i class="n-icon-cv" ></i>
	<i class="n-icon-wxmp" ></i>
	<i class="n-icon-github" ></i>
	<i class="n-icon-mail" ></i>
	<i class="n-icon-search" ></i>
	<i class="n-icon-success" ></i>
	<i class="n-icon-info" ></i>
	<i class="n-icon-warning" ></i>
	<i class="n-icon-thumb-up" ></i>
	<i class="n-icon-error" ></i>
	<i class="n-icon-close" ></i>
</template>
