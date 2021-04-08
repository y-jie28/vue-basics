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
        // 'this' keyword will not work if used arrow functions
        fullName() {
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}` 
        },
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

