const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
      num: 0
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter >= num ? this.counter -= num : this.counter = 0;
    },
    // setName(event) {
    //   this.name = event.target.value;
    // },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    submitForm(){
      alert('Submitted');
    },
    confirmInput(){
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
