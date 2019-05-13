/*
    Este archivo contiene los cursos disponibles y la definicion de
    las funciones que manipulan directamente esos cursos
*/
//Definimos los cursos y sus caracteristicas
let cursos = [
    {id:'001', nombre:"Matematicas", duracion: "20 semanas",valor:20000},
    {id:'002', nombre:"Quimica", duracion: "12 semanas",valor:50000},
    {id:'003', nombre:"Fisica", duracion: "10 semanas",valor:40000}
];

//Funcion que muestra cada curso con una diferencia de 2 segundos
let mostrarCursos = () => {  
    console.log('----------------------------------------');
    console.log('----------- Cursos Disponiles ----------');
    console.log('----------------------------------------');
    for(let i = 0; i < cursos.length; i++){
        setTimeout(
            function(){
                console.log('Curso # \t' + (i+1) +'\n');
                console.log('Identificacion:',cursos[i].id +'\n');
                console.log('Nombre: \t' + cursos[i].nombre +'\n');
                console.log('Duracion: \t' + cursos[i].duracion +'\n');
                console.log('Precio: \t' + cursos[i].valor +' Pesos\n');
                console.log('----------------------------------------\n');
            }
        ,2000*i);
    }
}

//Busca el curso por medio del id, si no lo encuentra retorna false
let buscarCurso = (iden) => {
    let resultado;
    if(cursos.find(curso => curso.id == iden)){
        resultado = cursos.find(curso => curso.id == iden);
    }else{
        resultado = false;
    }
    mostrarCurso(resultado);
}

//Muestra la informacion del curso seleccionado
let mostrarCurso = (curso) =>{
    if(curso){
        console.log('----------------------------------------');
        console.log('Id:\t\t'+curso.id);
        console.log('Nombre:\t\t'+curso.nombre);
        console.log('Duracion: \t'+curso.duracion);
        console.log('Valor:\t\t'+curso.valor);
        console.log('----------------------------------------');
    }else{
        console.log('Curso no encontrado, verifique ID e intentelo de nuevo.\n');
    }
} 

//console.log(buscarCurso('005'));

module.exports = {
    buscarCurso,
    mostrarCursos,
    cursos    
};