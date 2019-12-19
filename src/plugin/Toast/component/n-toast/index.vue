<template>
    <!-- <transition name="n-toast-fade">
        <div v-if="visible" :class="type" class="n-toast">{{ message }}</div>
    </transition> -->
    <transition name="n-toast-fade">
        <div class="n-toast">
            <div  class="alert  alert-simple alert-success alert-dismissible">
                <button type="button" class="close font__size-18  disabled" data-dismiss="alert" v-if="showCross">
                    <i class="greencross n-icon-close  fa-times"></i>
                </button>
                <i class="n-icon-success icon animated"></i>
                <strong class="font__weight-semibold">Well done!</strong> You successfullyread this important.
            </div>
        </div>
        
    </transition>
</template>

<script>
import ToastType from '../../constant/ToastType';

export default {
    data() {
        return {
            visible: false,
            showCross: false,
            message: '',
            type: ToastType.INFO
        };
    }
};

</script>
