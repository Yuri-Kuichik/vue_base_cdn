<template>  
    <div class="card">
        <h2>{{ title }}</h2>
        <div class="form-control">
            <input 
                type="text" 
                v-bind:placeholder="placeholderString"
                v-bind:value="inputValue" 
                v-on:input="inputChangeHandler"
            />
        </div>
        <h3>inputValue: {{ inputValue }}</h3>
        <button class="btn" v-bind:disabled="!inputValue" v-on:click="addNote"> Add </button>
        <ul v-html="notes"></ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Note',
                placeholderString: 'Input text',
                inputValue: '',
                notesHTML: ''
            }
        },

        methods: {
            inputChangeHandler(event) {
                console.log('input field was changed', event);
                this.inputValue = event.target.value
            },
            addNote() {
                this.notesHTML += '<li>' + this.inputValue + '</li>'
            }
        }
    }

</script>