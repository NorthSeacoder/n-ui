<template>
    <div
        :class="{
            'n-form-group-block': block,
            'n-form-group-label-horizontal': labelHorizontal
        }"
        class="n-form-group form-group">
        <div :class="labelWrapClass" class="n-form-group-label-wrap">
            <slot name="labelTop"></slot>
            <label>
                {{ currentLabel }}
                <span v-if="hasStar" class="required-star">*</span>
            </label>
            <slot name="labelBottom"></slot>
        </div>

        <div :class="inputWrapClass" class="n-form-group-input-wrap">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import {getText} from '../../util/i18n';

export default {
    name: 'NFormGroup',
    props: {
        label: {
            type: String,
            default: ''
        },
        labelKey: {
            type: String,
            default: ''
        },
        block: {
            type: Boolean,
            default: false
        },

        labelHorizontal: {
            type: Boolean,
            default: false
        },

        labelWrapClass: {
            type: [String, Array, Object],
            default: ''
        },

        inputWrapClass: {
            type: [String, Array, Object],
            default: ''
        },

        hasStar: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        currentLabel() {
            const {label, labelKey} = this;
            return label || getText({vm: this, key: labelKey, defaultText: labelKey});
        }
    }
};
</script>
