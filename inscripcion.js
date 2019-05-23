/*
    inscripcion.js :
    Este script contendra las funcionalidades necesarias para
    la inscripcion del interesado en el curso seleccionado
    Update 1: Se modifico para que no genere archivo sino que imprima 
    en el navegador lo que quedaria como registro de la matricula

*/

//Importo libreria para manejo de archivos
const fs = require('fs');  
//UP1 : Se importa la libreria express
const express = require('express');
const app = express();

//Para no eliminar lo hecho para archivos, comentare todo eso y copiare, modificando sobre la copia
let inscribir = (curso, interesado) => {
    
    //Texto que contendra el archivo de registro
    const encabezado = '<h1><center>Tecnologico de Antioquia<br>Institucion Universitaria<br></center></h1><h3>Registro de Prematricula:<br></h3>';
    const info = '<p><b>Informacion del Estudiante:<br>Nombre:</b>'+ 
    interesado.nombre + '<br><b>Cedula:</b>' + interesado.cedula + 
    '<br><br><b>Informacion del Curso:<br>Id:</b>' + curso.id + '<br><b>Curso:</b>' + 
    curso.nombre + '<br><b>Duracion:</b>'+ curso.duracion + '<br><b>Valor:</b>' + 
    curso.valor + ' Pesos<br></p>'; 
    let texto = encabezado + info;
    app.get('/',
        function(req, resp){
            let doc_html = "<!DOCTYPE html><head><meta charset='UTF-8'><title>Simiopoly</title></head><body>" + 
                        texto + "</body>";
            resp.send(doc_html);
        }
    );
    app.listen(3000);
    /*
    const file = './PREMATRICULADOS/'+ curso.id + '' + interesado.cedula + '.txt'; //Nombre de archivo diferente para cada estudiante
    //Texto que contendra el archivo de registro
    const encabezado = '\t\tTecnologico de Antioquia\n\t\tInstitucion Universitaria\n'+
    ' \nRegistro de Prematricula:\n';
    const info = ' \nInformacion del Estudiante: \nNombre:\t\t'+ 
    interesado.nombre + ' \nCedula:\t\t' + interesado.cedula + 
    ' \nInformacion del Curso: \nId:\t\t\t' + curso.id + ' \nCurso:\t\t' + 
    curso.nombre + ' \nDuracion:\t'+ curso.duracion + ' \nValor:\t\t' + 
    curso.valor + ' Pesos\n'; 
    let texto = encabezado + info;
    let dir = file;
    fs.open(file, 'wx', (err,fd) =>{
        if(err){
            if(err.code ==='EEXIST'){//Comprobando si archivo ya fue creado
                console.error('Usuario ya registrado al curso solicitado.\n');
                return;
            }
            if(err.code ==='ENOENT'){
                console.error('Directorio no encontrado, asegurese que carpeta PREMATRICULADOS existe,\n e intente nuevamente.');
                try {
                    fs.mkdirSync('./PREMATRICULADOS'); //Se crea directorio en caso de no existir
                    console.log('Directorio PREMATRICULADOS creada exitosamente.\n');
                } catch (error) {
                    dir = curso.id + '' + interesado.cedula + '.txt'; //Se opta por crear el archivo en el directorio actual                 
                    fs.writeFile(dir, texto,(err) =>{
                        if(err){ throw (err);}
                            console.log('Prematricula exitosa.');
                    });
                    return;
                }                
                return;
            }
            throw err;  
        }
        //Se ingresa la informacion al archivo
        fs.writeFile(file, texto,(err) =>{
        if(err){ throw (err);}
            console.log('Prematricula exitosa.');
        });
    });
    */
};

module.exports = {
    inscribir
}