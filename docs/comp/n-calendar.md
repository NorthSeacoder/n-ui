# Calendar 日历

## 基本使用

```vue live
<template>
    <n-calendar @on-select="select"></n-calendar>
</template>
<script>
    export default {
        data() {
            return {
               
            }
        },
        methods:{
            select(data){
                this.$toast.info(`选择日期${data}`)
            }
        }
    };
</script>

```
## 卡片模式

```vue live
<template>
<div style="width:300px;">
    <n-calendar card></n-calendar>
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

### Props

|Name|Type|Desc|Default|
|:-:|:-:|:-:|:-:|
|value/v-model|Date/string/number|所选日期|now|
|card|Boolean|卡片模式|false|

### Events

|Name|Type|Desc|
|:-:|:-:|:-:|
|on-select|(date) => void|点击选择日期回调|

### slots

#### dateCell
|Name|Type|Desc|
|:-:|:-:|:-:|
|data|Object| 当前日期参数|

##### data
|Name|Type|Desc|
|:-:|:-:|:-:|
|currentDateFlag|Boolean|是否当前日期|
|date|Number|日期|
|day|Number|周|
|i|Number|日历表格中位置|
|month|Number|月|
|timestamp|Number|时间戳|
|viewMonthFlag|Boolean|是否当前月|
|selectedDateFlag|Boolean|是否当前选择日期|
#### header
|Name|props|Desc|Default|
|:-:|:-:|:-:|:-:|
|header-left|{data}|data为所选日期所在年月|当前月份|
|header-center|{data}|data日历标题| calendar|
|header-right|null|右侧按钮区| 上个月&今天&下个月 切换按钮|