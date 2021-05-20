const app = new Vue({
    el:'#app',
    data:{
      errors:[],
      weapons:5,
      shields:4,
      coffee:5,
      ac:8,
      mousedroids:10,
      type: null,
      small:80,
      picked: '',
      picked_elem: '',
      picked_btn: '',
    },
    computed:{
       total:function() {
         return Number(this.weapons)+
           Number(this.shields)+
           Number(this.coffee)+
           Number(this.ac+this.mousedroids);
       }
    }
  })