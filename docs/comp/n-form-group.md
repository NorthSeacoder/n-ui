# Form-group 表单项

## 基本使用

```vue live
<template>
    <div>
        <n-form-group label="label">
            <n-input v-model="demo" />
        </n-form-group>

        <n-form-group label="hasStar" hasStar>
            <n-input v-model="demo" />
        </n-form-group>

        <n-form-group label="label-wrap-class" :label-wrap-class="demoClass">
            <n-input v-model="demo" />
        </n-form-group>

        <n-form-group label="input-wrap-class" :input-wrap-class="demoClass">
            <n-input v-model="demo" />
        </n-form-group>

        <n-form-group label="slot" >
            <template #labelTop>labelTop</template>
            <template #labelBottom>labelBottom</template>
            <n-input v-model="demo" />
        </n-form-group>

    </div>
</template>
<script>
export default {
    data() {
        return {
            demo: '',

            demoClass: 'single-class',
        };
    },
};
</script>
<style lang="scss">
.single-class{
    label,
    input{
        color:red
    }
}
</style>
```

<style lang="scss">
.single-class{
    label,
    input{
        color:red
    }
}
</style>

## API
#### Props

|Name|Type|Desc|Default|
|:-:|:-:|:-:|:-:|
|label|String|表单文本|''|
|hasStar|Boolean|是否星标|false|
|labelWrapClass|String|表单文本外部类名|''|
|inputWrapClass|String|表单组件外部类名|''|

####  slot

|Name|Desc|
|:-:|:-:|
|labelTop|文本头|
|labelBottom|文本底|
