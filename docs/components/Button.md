# Button 按钮
用于主动操作后的反馈
## 基础使用

<template>
	<n-button  @click="handleClick">Click me</n-button>
</template>

## 不同状态  

<template>
	<n-button  @click="handleClick">Click me</n-button>
	<n-button theme="primary">Click me</n-button>
	<n-button theme="danger">Click me</n-button>
</template>

## usage
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