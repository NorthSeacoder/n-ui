<template>
    <div class="n-calendar">
        <div
            :class="{'calendar-card':card}"
            class="n-calendar-header">
            <template v-if="!card">
                <div >
                    <slot
                        :data="date"
                        name="header-left">{{ date }}</slot>
                </div>
                <div>
                    <slot
                        :data="title"
                        name="header-center">{{ title }}</slot>
                </div>
            </template>

            <div class="n-calendar-button-group">
                <slot
                    name="header-right">
                    <n-button :size="ButtonSize" @click="changeDate('prev-month')">上个月</n-button>
                    <n-button :size="ButtonSize" @click="changeDate('today')">今天</n-button>
                    <n-button :size="ButtonSize" @click="changeDate('next-month')">下个月</n-button>
                </slot>
            </div>
        </div>
        <div
            :class="{'calendar-card':card}"
            class="n-calendar-body">
            <date-table
                :first-day-of-week="firstDayOfWeek"
                :timestamp="timestamp"
                @on-select-date="onSelect"
            />
        </div>
    </div>
</template>

<script type="text/babel">
import {genDateStringWithFormat, isValidDateProps} from '../../util/time';
import {changeOption} from './utils';
import DateTable from './date-table.vue';

export default {
    name: 'NCalendar',

    components: {
        DateTable
    },

    props: {
        title: {
            type: String,
            default: 'calendar'
        },

        value: {
            type: [Date, String, Number],
            default: () => new Date(),
            validator: isValidDateProps
        },

        firstDayOfWeek: {
            type: Number,
            default: 0,
            validator: (value) => {
                if (value < 7 && value >= 0) {
                    return Math.floor(value) === value;
                }
                return false;
            }
        },

        card: {
            type: Boolean,
            default: false
        }
    },

    provide() {
        return {
            Calendar: this
        };
    },

    data() {
        const {value} = this;
        const time = new Date(value);
        return {
            timestamp: time.getTime()
        };
    },

    computed: {
        date() {
            return genDateStringWithFormat(this.timestamp, 'YYYY年MM月');
        },

        ButtonSize() {
            return this.card ? 'sm' : 'md';
        }
    },

    methods: {
        changeDate(period) {
            const vm = this;
            const {timestamp} = vm;
            vm.timestamp = changeOption[period](timestamp);
        },

        onSelect(val) {
            this.timestamp = val.timestamp;
            this.$emit('on-select',this.timestamp)
        }
    }
};
</script>
