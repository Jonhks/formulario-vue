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
    cursos: [
      {
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
    restar: function  ()  {
       this.contador--
    },
    submit: function () {
      console.log(this.cursosSeleccionados)
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
      let firstLetter = str.charAt(0).toUpperCase() + str.slice(1) ;
      return firstLetter;
    }
  }
});