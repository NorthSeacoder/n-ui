<template>
  <div class="n-input" @click="handleClick">
        <slot v-if="$slots.left" name="left"></slot>

        <div class="content">
            <input
                v-if="!multiLine"
                ref="n-input"
                v-model="filterValue"
                :class="toggleable && 'toggleable-input'"
                :name="name"
                :type="getType"
                :placeholder="currentPlaceholder"
                :disabled="disabled"
                :pattern="pattern"
                :readonly="disabled"
                :required="required"
                :maxlength="maxlength"
                @keyup="emitEvent('keyup', $event)"
                @keydown="emitEvent('keydown', $event)"
                @focus="emitEvent('focus', $event)"
                @blur="emitEvent('blur', $event)"
                @change="handleChange">

            <n-textarea
                v-else
                ref="n-textarea"
                v-model="filterValue"
                :placeholder="currentPlaceholder"
                :disabled="disabled"
                :pattern="pattern"
                :required="required"
                :rows="rows"
                :rows-max="rowsMax"
                :multi-line-height="multiLineHeight"
                :multi-padding-top="multiPaddingTop"
                :multi-padding-bottom="multiPaddingBottom"
                @focus="emitEvent('focus', $event)"
                @blur="emitEvent('blur', $event)"
                @change="handleChange"/>

            <span
                v-if="iconVisible"
                class="icon-btn"
                @click="toggleType">
                <i :class="invisible ? 'n-icon-eye-slash' : 'n-icon-eye'"></i>
            </span>
        </div>

        <slot v-if="$slots.right" name="right"></slot>
    </div>
</template>

<script>
import {isString} from '../../util/check';
import {getText} from '../../util/i18n';

import BTextarea from './n-textarea.vue';
export default {
    name: 'NInput',
    components: {
        BTextarea
    },

    props: {
        type: {
            type: String,
            default: 'text'
        },

        name: {
            type: String,
            default: null
        },

        value: {
            validator: () => true,
            default: null
        },

        placeholder: {
            type: String,
            default: null
        },

        placeholderKey: {
            type: String,
            default: ''
        },

        disabled: {
            type: Boolean,
            default: false
        },

        pattern: {
            type: String,
            default: null
        },

        required: {
            type: Boolean,
            default: false
        },

        multiLine: {
            type: Boolean,
            default: false
        },

        rows: {
            type: Number,
            default: 6
        },

        rowsMax: {
            type: Number,
            default: 10
        },

        // font-size: 15px line-height: 1.5, so we got 22.5 by default
        multiLineHeight: {
            type: Number,
            default: 22.5
        },

        multiPaddingTop: {
            type: Number,
            default: 4
        },

        multiPaddingBottom: {
            type: Number,
            default: 4
        },

        trim: {
            type: Boolean,
            default: false
        },

        filter: {
            type: Object,
            default: () => ({})
        },

        maxlength: {
            type: String,
            default: ''
        },

        toggleable: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            valueTemp: null,
            invisible: true
        };
    },

    computed: {
        filterValue: {
            get() {
                return this.filter.filter ? this.filter.filter(this.value) : this.value;
            },

            set(value) {
                this.valueTemp = this.getValueReversed(value);
                this.$emit('input', this.valueTemp);
            }
        },

        currentPlaceholder() {
            const {placeholder, placeholderKey: key} = this;
            const i18nPh = key && getText({vm: this, key, defaultText: key});
            return placeholder || i18nPh;
        },

        iconVisible() {
            const vm = this;

            return vm.type === 'password' && vm.toggleable;
        },

        getType() {
            const vm = this;

            if (vm.iconVisible) {
                return vm.invisible ? 'password' : 'text';
            }

            return vm.type;
        }
    },

    methods: {
        trimValue(value) {
            const vm = this;
            const {trim} = vm;

            return trim && isString(value) ? value.trim() : value;
        },

        getValueReversed(value) {
            const vm = this;
            const {trimValue, type, filter} = vm;
            const valueTrimmed = (type === 'number' && value !== '') ? Number(value) : trimValue(value);

            return filter.reverseFilter ? filter.reverseFilter(valueTrimmed) : valueTrimmed;
        },

        emitEvent(name, event) {
            const {trimValue} = this;
            const {target: {value}} = event;

            this.$emit(name, trimValue(value), event);
        },

        handleChange(event) {
            const {valueTemp} = this;
            this.$emit('change', valueTemp, event);
        },

        handleClick(event) {
            const vm = this;

            vm.$emit('click', event);
            vm.$emit('touchstart', event);
        },

        blur() {
            const vm = this;
            const {multiLine, $refs} = vm;
            const input = multiLine ? $refs['n-textarea'] : $refs['n-input'];
            input.blur();
        },

        toggleType() {
            const vm = this;

            vm.invisible = !vm.invisible;
        }
    }
};
</script>
