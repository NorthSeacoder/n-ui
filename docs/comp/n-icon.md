# Icon 图标

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
	const IconList1 = [
        'reset',
        'chat',
        'folder',
        'bold',
        'italic',
        'header',
        'more',
        'compress',
        'setting',
        'expand',
        'link',
        'underline',
        'ordered-list',
        'unordered-list',
        'image',
        'ban',
        'arrow-left',
        'arrow-right',
        'arrow-top',
        'arrow-bottom',
        'left',
        'right',
        'top',
        'bottom',
        'refresh',
        'quote',
        'download',
        'upload',
        'copy',
        'user',
        'trash',
        'adjust',
        'send',
        'love',
        'filter',
        'emotion',
        'equation',
        'bell',
        'power',
        'create',
        'qr-code',
        'split',
        'camera',
        'detail',
        'edit',
        'globe',
        'not-love',
        'chart',
        'book',
        'package',
        'pagelines',
        'language',
        'share',
        'eye',
        'user-manage',
        'user-search',
        'user-edit',
        'apple',
        'google',
        'google-plus',
        'facebook',
        'twitter',
        'linkedin',
        'weibo',
        'customer-service',
        'collapse-down',
        'collapse-up',
        'cross',
        'tick',
        'insert-row',
        'date',
        'go-to-right',
        'account-1',
        'account-2',
        'account-3',
        'settlement',
        'settlement-2',
        'settlement-3',
        'settlement-4',
        'config-1',
        'config-2',
        'report-form',
        'product',
        'plan',
        'advisor',
        'channel',
        'market',
        'product-2',
        'plan-2',
        'user-list'
    ];
export default {
	data(){
		return {
			IconList:[
				'yuque','n','qq','wx','phone','util','blog','cv','wxmp','github','mail','search','success','info','warning','thumb-up','error','close','code',...IconList1
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
