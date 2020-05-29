# Icon

提供了一套常用的图标集合。

## 使用方法

```js
<i class="n-icon-yuque"></i>
```

## 图标集合

<template>
	<div class="icon-wrap">
		<div
			v-n-clipboard="'n-icon-' + icon"
			v-for="icon in IconList"
            :key="icon"
			class="icon-box"
			@v-n-clipboard-success="copySuccess">
			<i :class="'n-icon-' + icon" class="icon"></i>
			<div class="icon-name">{{ icon }}</div>
		</div>
	</div>

</template>

<script>
export default {
	data(){
		return {
			IconList:[
				'yuque','n','qq','wx','phone','util','blog','cv','wxmp','github','mail','search','success','info','warning','thumb-up','error','close','code'
			]
		}
	},
	methods: {
		copySuccess(data) {
			const vm = this;

			vm.$toast.info(`'${data}' saved to clipboard!`);
		}
	}
}
</script>

<style lang="scss">
	.icon-wrap{
		display: flex;
		padding: 10px;
		justify-content: space-around;
		flex-wrap: wrap;
		.icon-box{
                display: inline-block;
                width: 110px;
                height: 70px;
                padding: 10px;
                margin-bottom: 5px;
                text-align: center;
                transition: .1s;
                cursor: pointer;
                .icon {
                    display: inline-block;
                    margin: 10px;
                    font-size: 20px;
                }
                .icon-name {
                    font-size: 12px;
                    color: #999;
                }
                &:hover {
                    background-color: #eee;

                    .icon {
                        color: #3f51b5;
                    }

                    .icon-name {
                        color: #666;
                    }
                }
            }
	}
</style>
