# Calendar 日历

一种用来展示日历的基础组件

## 基础使用

基础的 `b-calendar` 需要传递 `v-model` 与 `range` 分别指定 calendar 的当前选择日期和自定义日期范围。
<template>
<n-calendar v-model="value" />
</template>

## 不同状态

## API

### Props

|      Name       |         Type         |   Desc   | Default  |
| :-------------: | :------------------: | :------: | :------: |
| `value/v-model` | `Date/string/number` | 所选日期 |  `now`   |
|     `card`      |      `Boolean`       | 卡片模式 | `false`  |
|      <!--       |       `range`        | `Array`  | 时间范围 | `[]` | --> |
|      <!--       | `first-day-of-week`  | `number` | 周起始日 | `0` | --> |

### Events

|    Name     |       Type       |       Desc       |
| :---------: | :--------------: | :--------------: |
| `on-select` | `(date) => void` | 点击选择日期回调 |

### slots

#### dateCell

|  Name  |   Type   |     Desc     |
| :----: | :------: | :----------: |
| `data` | `Object` | 当前日期参数 |

##### data

|        Name        |   Type    |       Desc       |
| :----------------: | :-------: | :--------------: |
| `currentDateFlag`  | `Boolean` |   是否当前日期   |
|       `date`       | `Number`  |       日期       |
|       `day`        | `Number`  |        周        |
|        `i`         | `Number`  |  日历表格中位置  |
|      `month`       | `Number`  |        月        |
|    `timestamp`     | `Number`  |      时间戳      |
|  `viewMonthFlag`   | `Boolean` |    是否当前月    |
| `selectedDateFlag` | `Boolean` | 是否当前选择日期 |

#### header

|      Name       |  props   |          Desc           |           Default           |
| :-------------: | :------: | :---------------------: | :-------------------------: |
|  `header-left`  | `{data}` | data 为所选日期所在年月 |          当前月份           |
| `header-center` | `{data}` |      data 日历标题      |          calendar           |
| `header-right`  |  `null`  |       右侧按钮区        | 上个月&今天&下个月 切换按钮 |

<script>
export default {
	data() {
        return {
            value: '2019-08-19'
        };
    }
}
</script>
