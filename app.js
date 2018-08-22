Vue.component('curso', {
  props: ['curso'],
  methods:{
    onchange: function (ev){
      // alert('detecta el cambio de check');
      console.log(this.curso.value, ev.target.checked)
      this.$emit('checked', this.curso.value, ev.target.checked)
    }
  },
  template: `
  <div>
  <input type="checkbox" v-bind:id="curso.value" v-bind:value="curso.value" @change = "onchange">
        <label  v-bind:for="curso.value">{{ curso.nombre }}</label>
        <br>
    </div>`
})

let app = new Vue({
  el: '#app',
  data: {
    contador: "0",
    nombre: 'Jonh',
    // url: "https://google.com",
    // pagina: 'Google',
    // mostrar: true,
    titulo: ' con vue',
    subtitulo: 'Creando un subtitulo',
    nombreObtenido: '',
    cursos: [{
        nombre: 'Curso de Vue.js',
        value: 'vue'
      },
      {
        nombre: 'Curso de React.js',
        value: 'react'
      },
      {
        nombre: 'Curso de Angular.js',
        value: 'angular'
      },
      {
        nombre: 'Curso de JQuery',
        value: 'jquery'
      },
      {
        nombre: 'Curso de Js Es6',
        value: 'es6'
      }
    ],
    cursosSeleccionados: []
  },
  methods: {
    sumar: function () {
      this.contador++
    },
    restar: function () {
      this.contador--
    },
    submit: function () {
      console.log(this.cursosSeleccionados)
    },
    selectCurso: function (curso, checked) {
      if (checked) {
        this.cursosSeleccionados.push(curso);
      } else {
        let index = this.cursosSeleccionados.indexOf(curso);
        this.cursosSeleccionados.splice(index, 1);
      }
    }
  },
  filters: {
    uppercase: str => {
      return str.toUpperCase();
    },
    lowercase: str => {
      return str.toLowerCase();
    },
    capitalize: str => {
      let firstLetter = str.charAt(0).toUpperCase() + str.slice(1);
      return firstLetter;
    }
  }
});