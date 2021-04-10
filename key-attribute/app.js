let vm = Vue.createApp({
  data() {
    return {
      people: [
        {
          name: 'John',
          message: 'Hello world!'
        },
        {
          name: 'Rick',
          message: 'I like pie.'
        },
        {
          name: 'Amy',
          message: 'Skydiving is fun!'
        }
      ]
    }
  }, 
  methods: {
    move() {
      const first = this.people.shift(); // removes the first item in the array and returns the item

      this.people.push(first); 
    }
  }
}).mount('#app')
