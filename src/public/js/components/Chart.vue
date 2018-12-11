<template>
    <div class="row" v-if="results.length > 0">
        <div class="col-md-12">
            <div class="card">
                <div class="widget-chart-container">
                    <div id="bar-chart2" style="height: 110px;" class="pb-2"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import App from '../common/charts';

    export default {
        name: "Chart",
        computed: {
            results() {
                return this.$store.state.search.results
            }
        },
        methods: {
            renderChart() {
                App.charts.widget_barchart2();
            }
        },
    }
</script>

<style scoped>

</style>