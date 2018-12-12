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
                                            Today
                                        </button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Yesterday</a>
                                            <a class="dropdown-item" href="#">Last 3 days</a>
                                            <a class="dropdown-item" href="#">Last 7 days</a>
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
                    <div v-if="results.length > 0">
                        Found {{ results.length }} results <span v-if="duration">in {{ durationForHumans }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import da from "../../assets/lib/moment.js/src/locale/da";

    export default {
        name: "SearchBox",
        data() {
            return {
                query: '',
                duration: null
            }
        },
        computed: {
            results() {
                return this.$store.state.search.results
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
                this.$store.dispatch('setQuery', this.query);
                this.$store.dispatch('clearResults');

                console.log('start');
                this.$socket.sendObj({query: this.query, from: '', to: ''})
            }
        },
        created() {
            this.$options.sockets.onmessage = (data) => {
                console.log(data);

                if (data.data.substring(0, 4) === 'done') {
                    let parts = data.data.split('|');
                    this.duration = parts[1];
                    return;
                }

                this.$store.dispatch('addResult', data.data);
            }
        }
    }
</script>

<style scoped>

</style>