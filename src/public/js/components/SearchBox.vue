<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <form>
                        <div class="form-group row">
                            <div class="col-12 col-sm-12 col-lg-12">
                                <div class="input-group">
                                    <input class="form-control" id="inputText3" type="text" v-model="query">
                                    <div class="input-group-append be-addon">
                                        <button class="btn btn-secondary dropdown-toggle px-3" type="button" data-toggle="dropdown">
                                            {{ displayRange }}
                                        </button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" @click="range = 'today'">Today</a>
                                            <a class="dropdown-item" @click="range = 'yesterday'">Yesterday</a>
                                            <a class="dropdown-item" @click="range = 'last_3_days'">Last 3 days</a>
                                            <a class="dropdown-item" @click="range = 'last_7_days'">Last 7 days</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" @click="showCustomDateRange">Custom Date Range</a>
                                        </div>
                                    </div>
                                    <div class="input-group-append">
                                        <button class="btn btn-primary px-3" type="button" @click="clickButton">SEARCH</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="range == 'custom'" class="form-group row">
                            <label class="col-12 col-lg-9"></label>
                            <div class="col-12 col-sm-8 col-lg-3 pt1">
                                <div class="input-group mb-3">
                                    <input class="form-control date datetimepicker-from"
                                           type="text"
                                           placeholder="Select A Date"
                                           data-min-view="2"
                                           data-date-format="yyyy-mm-dd"
                                           ref="custom_range_from">
                                    <span class="input-group-append">
                                        <span class="input-group-text range-from">From</span>
                                    </span>
                                </div>
                                <div class="input-group mb-3">
                                    <input class="form-control date datetimepicker-to"
                                           type="text"
                                           placeholder="Select A Date"
                                           data-min-view="2"
                                           data-date-format="yyyy-mm-dd"
                                           ref="custom_range_to">
                                    <span class="input-group-append">
                                        <span class="input-group-text range-to">To</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div v-if="duration">
                        Found {{ results.length }} results in {{ durationForHumans }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        name: "SearchBox",
        data() {
            return {
                query: '',
                range: 'today',
                display_range: 'Today',
                custom_range_from: null,
                custom_range_to: null,
            }
        },
        computed: {
            results() {
                return this.$store.state.search.results
            },
            duration() {
                return this.$store.state.search.duration
            },
            durationForHumans() {
                if (this.duration < 1000) {
                    return this.duration + ' milliseconds';
                } else {
                    return (this.duration / 1000) + ' seconds';
                }
            },
            displayRange() {
                switch(this.range) {
                    case 'today':
                        return 'Today';

                    case 'yesterday':
                        return 'Yesterday';

                    case 'last_3_days':
                        return 'Last 3 Days';

                    case 'last_7_days':
                        return 'Last 7 Days';

                    case 'custom':
                        return 'Custom Date Range';
                }
            }
        },
        methods: {
            clickButton() {
                this.$store.dispatch('setDuration', null);
                this.$store.dispatch('setQuery', this.query);
                this.$store.dispatch('clearResults');

                let range = this.getRange();

                console.log({query: this.query, from: range.from, to: range.to});
                this.$socket.sendObj({query: this.query, from: range.from, to: range.to});
            },
            getRange() {
                // Default to Today
                let from = moment().startOf('day');
                let to = moment().endOf('day');

                if (this.range == 'today') {
                    from = moment().startOf('day');
                    to = moment().endOf('day');
                }

                if (this.range == 'yesterday') {
                    from = moment().subtract(1, 'days').startOf('day');
                    to = moment().subtract(1, 'days').endOf('day');
                }

                if (this.range == 'last_3_days') {
                    from = moment().subtract(3, 'days').startOf('day');
                }

                if (this.range == 'last_7_days') {
                    from = moment().subtract(7, 'days').startOf('day');
                }

                if (this.range == 'custom') {
                    debugger;
                    from = moment(this.$refs.custom_range_from.value).startOf('day');
                    to = moment(this.$refs.custom_range_to.value).endOf('day');
                }

                return {
                    from: from.format('YYYY/M/D/H'),
                    to: to.format('YYYY/M/D/H')
                };
            },
            showCustomDateRange() {
                this.range = 'custom';

                // Give the virtual DOM time to update before initializing the datetime picker
                setTimeout(function() {
                    $(".datetimepicker-from").datetimepicker({
                        autoclose: true,
                        componentIcon: '.mdi.mdi-calendar',
                        navIcons:{
                            rightIcon: 'mdi mdi-chevron-right',
                            leftIcon: 'mdi mdi-chevron-left'
                        },
                    });

                    $(".datetimepicker-to").datetimepicker({
                        autoclose: true,
                        componentIcon: '.mdi.mdi-calendar',
                        navIcons:{
                            rightIcon: 'mdi mdi-chevron-right',
                            leftIcon: 'mdi mdi-chevron-left'
                        },
                    });
                }, 100)
            }
        },
        mounted() {
            this.$options.sockets.onmessage = (data) => {
                console.log(data);

                if (data.data.substring(0, 4) === 'done') {
                    let parts = data.data.split('|');
                    this.$store.dispatch('setDuration', parts[1]);
                    return;
                }

                this.$store.dispatch('addResult', data.data);
            };
        }
    }
</script>

<style scoped>
    .datetimepicker {
        margin-top: 0;
    }

    .range-from,
    .range-to {
        width: 60px;
    }
</style>