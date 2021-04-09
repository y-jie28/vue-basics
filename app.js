// vm -> Vue Model
const vm = Vue.createApp({
    data() {
        return {
            firstName: "Yi",
            middleName: '',
            lastName: "Er",
            url: "http://google.com",
            raw_url: '<a href="http://google.com" target="_blank">Google</a>',
            age: 20
        }
    },
    methods: {
        increment() {
            this.age++;
        },
        updateLastName(msg, event) {
            event.preventDefault();
            console.log(msg);
            this.lastName = event.target.value;
        },
        updateLastName3(msg, event) {
            // event.preventDefault();
            // using event modifiers (used with v-on)
            console.log(msg);
            this.lastName = event.target.value;
        },
        updateMiddleName(event) {
            this.middleName = event.target.value;
        },
    },
    // are computed properties data or methods? it is a combination of both
    // computed properties are cached based on their reactive dependencies
    // no data can be passed
    // helps with performance
    // can never / shoud not be asynchronous, expects a value to be returned
    computed: {
        // 'this' keyword will not work if used arrow functions
        fullName() {
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        }
    },
    // not commonly used, only a few cases where it would come handy
    // developers use watchers to perform additional actions when a value is changed
    // esp true when want to perform asynchronous tasks
    watch: {
        age(newVal, oldVal) {
            // not obligated to return

            // revert age back to 20 after 3 seconds
            setTimeout(() => {
                this.age = 20;
            }, 3000);
        }
    }
}).mount('#app')

// w/ proxy can access data directly
// setTimeout(() => {
//     vm.firstName = 'San';
// }, 2000)


// Can create multiple Vue Instances
// Vue.createApp({
//     data() {
//         return {
//             firstName: 'San',
//             lastName: "Si"
//         }
//     }
// }).mount('#app2')

