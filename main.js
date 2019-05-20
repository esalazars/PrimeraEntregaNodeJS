/*
    main.js:

    Script que reunira todas las funcionalidades y las integrara para 
    usarlas en una funcion principal main()

    Author: Eladio Salazar Suarez

*/

//Importacion de las funcionalidaddes de los cursos
const {buscarCurso, mostrarCursos, cursos} = require('./cursos');
//Importacion de funcionalidad inscribir
const {inscribir} = require('./inscripcion');

//Creo la lista de parametros del comando de ejecucion
const opciones = {
    id:{
        demand : true,
        alias: 'i',
        describe: 'Id del curso de interes'
    },
    nombre:{
        demand : true,
        alias: 'n',
        describe: 'Nombre completo entre "" del interesado'
    },
    cedula:{
        demand: true,
        alias:'c',
        describe:'Cedula sin puntos, comas o espacios del interesado'
    }
}
//Importo libreria yargs
const argv = require('yargs')
    .command('inscribir','Incripcion de curso especificado mediante id, \ncedula y nombre del interesado.',opciones)
    .argv;

//Implementacion de funcion principal
let main = () =>{
    if(argv._[0]=='inscribir'){
        let curso = buscarCurso(argv.id);
        if(curso != false){
            let interesado = {
                nombre:argv.nombre,
                cedula:argv.cedula
            };
            inscribir(curso, interesado);
        }else{
            mostrarCursos();        
        }
    }else{
        mostrarCursos();
    }
};

module.exports = {
    main
};
