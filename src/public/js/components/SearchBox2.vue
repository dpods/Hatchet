<template>
    <div class="row mb-2">
        <div class="col-md-12">
            <form>
                <div class="form-group row">
                    <div class="col-12 col-sm-12 col-lg-12">
                        <div class="input-group">
                            <input class="form-control" id="inputText3" type="text" v-model="query">
                            <div class="input-group-append be-addon">
                                <button class="btn btn-secondary dropdown-toggle px-3" type="button" data-toggle="dropdown">Last 60 Minutes</button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Separated link</a>
                                </div>
                            </div>
                            <div class="input-group-append">
                                <button class="btn btn-primary px-3" type="button" @click="clickButton">SEARCH</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchBox",
        data() {
            return {
                query: ''
            }
        },
        methods: {
            clickButton() {
                this.$socket.sendObj({query: this.query})
            }
        },
        created() {
            this.$options.sockets.onmessage = (data) => {
                console.log('received websocket response:');
                console.log(data);
            }
        }
    }
</script>

<style scoped>

</style>