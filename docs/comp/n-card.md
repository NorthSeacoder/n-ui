---
title: n-card
---
# n-card 卡片
将信息聚合在卡片容器中展示。
## 基本用法
```vue live
<template>
    <n-card>
        <template #header>header</template>
        <template #footer>footer</template>
        <template>body</template>

    </n-card>
</template>
<script>
    export default {
        data() {
            return {
               
            }
        },
    };
</script>
```

## 触发事件
```vue live
<template>
    <n-card clickable @click="handleClick">
        <template #header>header</template>
        <template #footer>footer</template>
        <template>body</template>
    </n-card>
</template>
<script>
    export default {
        data() {
            return {
               
            }
        },
        methods: {
            handleClick() {
                const vm = this;
                vm.$toast.info('卡片被点击');
            }
        }
    };
</script>
```
## 卡片宽度
```vue live
<template>
<div style="width: 100%;">
    <n-card size="sm">
        <template #header>sm</template>
        <template #footer>footer</template>
        <template>body</template>
    </n-card>
    <n-card >
        <template #header>md</template>
        <template #footer>footer</template>
        <template>body</template>
    </n-card>
    <n-card size="lg">
        <template #header>lg</template>
        <template #footer>footer</template>
        <template>body</template>
    </n-card>
</div>
</template>
<script>
    export default {
        data() {
            return {
               
            }
        },
    };
</script>
```
## API
### props
|Name|Type|Desc|
|:-:|:-:|:-:|
|clickable|Boolean|是否可点击，默认为 `false`|
|size|String|卡片的大小，可选值为 `'sm'`、`'md'`、`'lg'`，默认为 `'md'`|
### slot
|Name|Desc|
|:-:|:-:|
|header|头部插槽|
|footer|尾部插槽|
|default|默认插槽|

### Events
|Name|Type|Desc|
|:-:|:-:|:-:|
|click|(value: any) => void|model event, 点击按钮时触发|
|mouseenter|(value: any) => void|model event, 鼠标移入时触发|
|mouseleave|(value: any) => void|model event, 鼠标移出时触发|
|mouseout|(value: any) => void|model event, 鼠标移出时触发, 冒泡模式|
|mouseover|(value: any) => void|model event, 鼠标移入时触发, 冒泡模式|