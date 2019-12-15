<template>
    <transition name="n-toast-fade">
        <div v-if="visible" :class="type" class="n-toast">{{ message }}</div>
    </transition>
</template>

<script>
import ToastType from '../../constant/ToastType';

export default {
    data() {
        return {
            visible: false,
            message: '',
            type: ToastType.INFO
        };
    }
};

</script>
