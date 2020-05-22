vue-based ui  

<script>
export default {
	methods:{
		handleClick(event) {
			const vm = this;
			// vm.$toast.success('test')
        }
	}
}
</script>
<template>
	<n-button  >Click me</n-button>
	<n-button theme="primary">Click me</n-button>
	<n-button theme="danger">Click me</n-button>
	<i class="n-icon-yuque" ></i>
	<i class="n-icon-n" ></i>
</template>