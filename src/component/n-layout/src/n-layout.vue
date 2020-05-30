<template>
  <div class="n-layout">
    <div class="n-layout-top">
            <slot name="header"></slot>
        </div>

        <div>
            <div class="n-layout-side-left" @click="onNavClick">
                <slot name="side-left"></slot>
                <div class="nav-mask"></div>
            </div>

            <div class="n-layout-content">
                <slot name="content"></slot>
            </div>

            <div class="n-layout-side-right" @click="onNavClick">
                <slot name="side-right"></slot>
            </div>
        </div>

        <slot name="footer"></slot>
  </div>
</template>

<script>
import {isMobile} from '../../util/dom';
export default {
    name: 'NLayout',
    mounted() {
        this.onNavClick();
    },

    methods: {
        onNavClick() {
            const vm = this;
            if (isMobile()) {
                vm.$emit('nav-open-change', false);
            }
        }
    }
};
</script>
