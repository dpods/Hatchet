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
                                            {{ display_range }}
                                        </button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" @click="display_range = 'Yesterday'">Yesterday</a>
                                            <a class="dropdown-item" @click="display_range = 'Last 3 Days'">Last 3 days</a>
                                            <a class="dropdown-item" @click="display_range = 'Last 7 Days'">Last 7 days</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Custom Date Range</a>
                                        </div>
                                    </div>
                                    <div class="input-group-append">
                                        <button class="btn btn-primary px-3" type="button" @click="clickButton">SEARCH</button>
                                    </div>
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
                display_range: 'Today'
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

                if (this.display_range == 'Yesterday') {
                    from = moment().subtract(1, 'days').startOf('day');
                    to = moment().subtract(1, 'days').endOf('day');
                }

                if (this.display_range == 'Last 3 Days') {
                    from = moment().subtract(3, 'days').startOf('day');
                }

                if (this.display_range == 'Last 7 Days') {
                    from = moment().subtract(7, 'days').startOf('day');
                }

                return {
                    from: from.format('YYYY/M/D/H'),
                    to: to.format('YYYY/M/D/H')
                };
            }
        },
        created() {
            this.$options.sockets.onmessage = (data) => {
                console.log(data);

                if (data.data.substring(0, 4) === 'done') {
                    let parts = data.data.split('|');
                    this.$store.dispatch('setDuration', parts[1]);
                    return;
                }

                this.$store.dispatch('addResult', data.data);
            }
        }
    }
</script>

<style scoped>

</style>