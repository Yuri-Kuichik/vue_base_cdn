<template>
    <div class="container pt-5">
        <div class="card center">
            <h1>Counter: {{ count }}</h1>
            <div>
                <button class="btn primary" v-on:click="count++">
                    Increase
                </button>
                <button class="btn danger" @click="decreaseCount">
                    Decrease
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Counter', // undefined, null
            count: 0
        }
    },

    methods: {
        increaseCount() {
            this.count++ 
        },

        decreaseCount() {
            this.count--
        }
    }
}

</script>