var app = new Vue({
    el: '#app',
    data: {
        a: 0,
        b: 0,
        operator: ""
    },
    computed: {
        result() {
          switch(this.operator) {
            case "+":
              return this.a + this.b
            case "-":
              return this.a - this.b
            case "*":
              return this.a * this.b
            case "/":
              return this.a / this.b
          }
        }
      }
})


/*methods: {
        suma:(nums)=>{
            let result = 0;
            nums.forEach(function(n){ result += n * 1; });
            return result
        }
    }*/