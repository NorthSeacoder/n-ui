
# Layout 框架(待优化)

## 基本使用

```vue live
<template>
    <n-layout>
        <template #header>header</template>
        <template #side-left>side-left</template>
        <template #side-right>side-right</template>
        <template #content>content</template>
        <template #footer>footer</template>
    </n-layout>
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