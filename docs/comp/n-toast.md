# Taost 弹框
用于主动操作后的反馈

## 不同状态
```vue live
<template>
	<div>
	<n-button  @click="success">success</n-button>
	<n-button @click="error">error</n-button>
	<n-button @click="info">info</n-button>
	</div>
</template>

<script>
export default {
	data() {
        return {
        }
    },
	methods:{
		success(event) {
			const vm = this;
			vm.$toast.success('success')
        },
		error(event) {
			const vm = this;
			vm.$toast.error('error')
        },
		info(event) {
			const vm = this;
			vm.$toast.info('info')
        },
	}
}
</script>
```