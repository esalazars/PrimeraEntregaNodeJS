Primera entrega del curso de metodologias agiles con NodeJS

El programa consta de 4 ficheros JavaScript: cursos.js contiene los cursos
y funciones que los usan, inscripcion.js contiene la funcion para inscribe
al interesado en el curso, mediante la creacion de un .txt 
que contiene la informacion del registro del estudiante, un archivo main.js
el cual recoge todas las funcionalidades y las usa en una funcion main(),
y para la ejecucion total del programa es mediante el archivo index.js el
cual es a ruta de entrada al crear el repositorio con git init.
Ademas contiene los archivos .json correspondientes del proyecto y el README.

Antes de iniciar el programa asegurarse o instalar en caso de 
ser necesario:
1.  Node.js:Base del curso y con el cual se Dstan corriendo los 
            programas, se debe descargar desde la pagina oficial
            http://nodejs.org
2.  yargs : Se instala mediante cualquiera de los comandos desde la terminal de
            windows: - npm i yargs  
                     - node i yargs
3.  files stream: A veces viene por deCfeto con la instalacion de 
                node.js, en caso de ser necesario se instala desde
                consola de windows: npm install files-stream
4.  express : Libreria usada para establecer un servidor, usada en la version v1.0.2
	      para imprimir en el navegador el registro de la matricula. Ingresar
	      npm i express
Ejecucion:
Para la ejecucion del programa abra una terminal como
administrador y ubicarse en la carpeta donde se encuentra el programa, entonces:
1.  Para inscripcion de cursos:
        node index.js inscribir -i id_curso -n nombre_estudiante -c cedula_estudiante
    
    *   -i -n -c puden ser cambiados por --id --nombre --cedula respectivamente
    *   id_curso nombre_estudiante cedula_estudiante son obligatorios en caso de
        querer inscribir, y corresponden a id del curso, nombre y cedula del interesado
    *   Si nombre_estudiante consta de mas de una palabra debe ser colocado entre " "
        para un correcto almacenamiento.
    *   En caso de haber un error en el id del curso se debera realizar nuevamente el proceso
	de ejecucion.
    *   Si la prematricula es exitosa se puede encontrar dicho registo en un documento 
        de texto(.txt) en la carpeta PREMATRICULADOS, o en caso de no poder crear la carpeta en 
        la ejecucion del programa, por defecto se guardara en el mismo directorio, y el nombre 
        del registro de prematricula esta conformado por id del curso y cedula del estudiante.
    *	A partir de la version V1.0.2 no se guardara en un .txt sino que se mostrara en el navegador
	en localhost:3000 todo el contenido del .txt que se creaba.
2.  Si desea solo ver los cursos disponibles:
        node main.js
   
Autor: Eladio Salazar Suarez
Mayo de 2019