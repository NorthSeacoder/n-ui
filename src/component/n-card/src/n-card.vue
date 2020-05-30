<template>
  <div 
    class="n-card"
    :class="className"
    @click="handleClick"
    @mouseover="handleMouseOver"
    @mouseout="handleMouseOut"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave">
    <div class="n-card-header" v-if="$slots.header">
        <slot name="header"></slot>
    </div>
    <div class="n-card-body">
        <slot></slot>
    </div>
    <div class="n-card-footer" v-if="$slots.footer">
        <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import {isValidSize} from './helper/helper';
export default {
    name: 'NCard',
    props: {
        clickable: {
            type: Boolean,
            default: false
        },

        name: {
            type: String,
            default: null
        },

        size: {
            type: String,
            validator: isValidSize,
            default: 'md'
        }
    },

    computed: {
        className() {
            const vm = this;
            const {clickable, size} = vm;

            return [
                `size-${size}`,
                {clickable}
            ];
        }
    },

    methods: {
        handleClick(event) {
            const vm = this;
            const {clickable} = vm;

            if (clickable) {
                vm.$emit('click', event);
            }
        },

        handleMouseOver(event) {
            const vm = this;
            const {clickable} = vm;

            if (clickable) {
                vm.$emit('mouseover', event);
            }
        },

        handleMouseOut(event) {
            const vm = this;
            const {clickable} = vm;

            if (clickable) {
                vm.$emit('mouseout', event);
            }
        },

        handleMouseEnter(event) {
            const vm = this;
            const {clickable} = vm;

            if (clickable) {
                vm.$emit('mouseenter', event);
            }
        },

        handleMouseLeave(event) {
            const vm = this;
            const {clickable} = vm;

            if (clickable) {
                vm.$emit('mouseleave', event);
            }
        }
    }
};
</script>