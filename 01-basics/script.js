const App = Vue.createApp({
    data() {
        return {
            titleCounter: 'Counter',
            titleCalculator: 'Calculator',
            operator: '',
            countFirst: 0,
            countSecond: 0
        }
    },

    computed: {
        calcResult() {
            return this.operator === 'subtract' ? this.countFirst - this.countSecond : this.operator === 'multiply' ? this.countFirst * this.countSecond : 0
        }
    },

    methods: {
        clickBtn(name) {
            console.log(name);
            console.log('operator: ', this.operator)
        }
    }
})


App.mount('#app1')