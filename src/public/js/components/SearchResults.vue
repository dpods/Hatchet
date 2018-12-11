<template>
    <div class="row" v-if="results.length > 0">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <table class="table table-striped table-hover table-fw-widget" id="table2">
                        <thead>
                        <tr>
                            <th>Data</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="result in results">
                            <td>{{ result }}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Results",
        computed: {
            results() {
                return this.$store.state.search.results
            }
        }
    }
</script>

<style scoped>

</style>