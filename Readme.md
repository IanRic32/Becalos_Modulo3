# Proyectos de HTML, CSS y JavaScript

Este repositorio contiene varios proyectos desarrollados con HTML, CSS y JavaScript.

## Proyectos

### Clase 01
- **Descripción:** Proyecto inicial que imprime "Hola mundo" en la consola.
- **Archivo principal:** `main.js`
- **Contenido de Main** Contiene los ejemplos de las impresiones de los tipos de datos en Javascript
 * Number
 * String
 * Boolean
 * Null
 * Undefined
 * BigInt
 * Symbol
 * Object
Ejecución:

![Ejecución de clase 01](/imagenes/clase1.png)
### Clase 02
Se crea el programa para determinar la calificación de los estudiantes, estas calificaciones son utiles para saber si pasa o no paso o bien como es su desempeño.
* Excelente.
* Bien.
* Suficiente.
* El estudiante no aprueba.
y se crea la lista de estudiantes, y se muesta el resumen de calificaciones, como se muestra a continuación

![Ejecución de clase 01](/imagenes/clase2.png)


### Clase 03

## Clasificación de Frutas

Se crea una función para la clasificacion de las frutas, de la siguiente manera:

* Frutas Acidas: Kiwi, Limón, Pomelo, Naranja, Manzana
* Frutas Semiacidas: Uva, Piña, Fresa, Membrillo, Níspero, Ciruela, Melocotón, Mango, Mandar
* Frutas Neutras: Coco, Aguacate, Aceituna, Almendra, Avellana, Cacahuete, Nuez
* Frutas Dulces: Plátano, Cereza, Higo, Melón, Sandía, Pera, Granada, Chirimoya

Se crea un array de objetos con la información de las frutas y nos movemos en el array aplicando la función de la clasificación y muestra la información de la fruta seleccionada.

![Ejemplo de clase 04](/imagenes/arrays.png)

Y se muestran los resultados en la consola:

![Ejecución de clase 04](/imagenes/array_console.png)

### Clase 04

Se agrega el programa para agregar y mostrar el historial de libros que has leido.

EL programa utiliza funciones para agregar y mostrar el historial de libros.

Al inicio te pregunta si quieres agregar libros, mostrar el historial o salir del programa.
Si aprietas 1 entonces te pregunta cuantos libros deseas agregar y te va solicitando  los titulos de los libros, con forme ingreses cada libro te dira que ya se subieron los libros y te muestra el titulo del libro que agregaste.

Si seleccionas 2 entonces te muestra el historial de libros agregados.

si seleccionas 3 entonces saldras del programa.

![Ejecución de clase 04](/imagenes/clase4.png)
![Ejecución de clase 04](/imagenes/clase4_1.png)
![Ejecución de clase 04](/imagenes/clase4_2.png)
![Ejecución de clase 04](/imagenes/clase4_3.png)
![Ejecución de clase 04](/imagenes/clase4_4.png)
![Ejecución de clase 04](/imagenes/clase4_5.png)

# Clase 05

**Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.**


![Ejecución de clase 05 objeto libro](/imagenes/clase5_libro1.png)

**Propiedades del Objeto**: 
* El objeto libro tiene varias propiedades que describen el libro:

* **titulo**: El título del libro.

* **autor**: El autor del libro.

* **anio**: El año de publicación del libro.

* **estado**: El estado del libro, que puede ser "disponible" o "prestado".

* **capitulos**: Una lista de capítulos del libro.

* **Método describirLibro**: Este método imprime la información básica del libro, incluyendo el título, autor, año de publicación y estado.

* **Método agregarCapitulo**: Este método agrega un nuevo capítulo a la lista de capítulos del libro.

* **Método eliminarCapitulo**: Este método elimina un capítulo de la lista de capítulos, si es que se encuentra en la lista.

**Uso del Objeto:**

* Llamamos al método describirLibro para imprimir la descripción del libro.

* Mostramos la lista actual de capítulos.

* Agregamos un nuevo capítulo llamado "Capítulo 4".

* Mostramos la lista actualizada de capítulos.

* Eliminamos el capítulo "Prólogo".

* Mostramos la lista actualizada de capítulos.


Transformando a Clase con herencia tenemos lo siguiente:

![Ejecución de clase 05 objeto libro](/imagenes/clase5_libro-clase.png)

**Clase Libro:**

* Esta clase define las propiedades de un libro (titulo, autor, anio, estado, capitulos) y un método describirLibro para imprimir la información básica del libro.

**Clase LibroCapitulos:**

* Esta clase hereda de la clase Libro y agrega métodos adicionales para manejar los capítulos del libro (agregarCapitulo y eliminarCapitulo). También sobrescribe el método describirLibro para incluir la lista de capítulos en la descripción.

**Función disponibilidad:**

* Esta función devuelve aleatoriamente el estado del libro como "disponible" o "prestado".

**Instanciación y uso:**

* Se crea una instancia de LibroCapitulos y se llama a sus métodos para describir el libro, agregar un capítulo y eliminar 


## Ejecucación del código

![Resultado del código](/imagenes/clase5_ejecucion.png)

# Clase 06

En esta clase hice una adapatación a mi pagina principal del modulo 2, se agrega la hoja de comentarios y con ello encontramos las funciones que son:
* Agregar comentarios, que en caso de ser anonimos o publicos se muestra el nombre del cliente.
* Poder editar su comentario.
* Eliminar su comentario.

![Resultado del código](/imagenes/clase6_comentario.png)
<br>
<br>

![Resultado del código](/imagenes/clase6_comentario2.png)
<br>
<br>

![Resultado del código](/imagenes/clase6_comentario3.png)
<br>



# Clase 7

El objetivo de este programa es generar contraseñas seguras y personalizadas según las preferencias del usuario. Además, el programa evalúa el nivel de seguridad de la contraseña generada y permite copiarla al portapapeles con un solo clic.


* El usuario puede especificar la longitud de la contraseña (entre 8 y 20 caracteres).

**El usuario puede seleccionar los tipos de caracteres que desea incluir en la contraseña:**

* Letras mayúsculas.

* Letras minúsculas.

* Números.

* Símbolos especiales.

El programa genera una contraseña aleatoria basada en las opciones seleccionadas.

**Evaluación de seguridad:**

* El programa evalúa la fortaleza de la contraseña generada en función de:

* Longitud de la contraseña.

* Complejidad (uso de mayúsculas, minúsculas, números y símbolos).

**Muestra un indicador visual (barras de colores) que representa el nivel de seguridad:**

* **Rojo:** Contraseña débil.

* **Naranja:** Contraseña media.

* **Verde:** Contraseña fuerte.

**Copia al portapapeles:**

* El usuario puede copiar la contraseña generada al portapapeles con un solo clic en el botón "Copiar".

## Ejecución


![Resultado del código](/imagenes/clase7_unelementos.png)


![Resultado del código](/imagenes/clase7_doselementos.png)


![Resultado del código](/imagenes/clase7_treselementos.png)


![Resultado del código](/imagenes/clase7_cincoelementos.png)


# Clase 08

En esta clase agregamos el localstorage, además de eso, retomamos el proyecto del modulo 2 y le metemos diferentes imagenes para la mejor interación con el usuario.

Con ello, tambien agregamos el movimientos entre iniciar sesión y e crear usuario nuevo en el local storage para comenzar a crear un seguimiento y conteo de usuarios.

Posterior a eso se pueden ir a la pagina principal y dejar los comentarios en nuestras paginas :D

Nuevo logo de la pagina

![Nuevo logo](/imagenes/registro_usuarios.png)

![Nuevo logo](/imagenes/nuevo_registro.png)



## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE.

## Requisitos Previos

- Node.js (para ejecutar archivos JavaScript en un entorno de servidor)

## Características

- Proyectos de ejemplo para aprender HTML, CSS y JavaScript.
- Código comentado para facilitar el aprendizaje.

## Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/tu-usuario/tu-repositorio.git
    ```

2. Navega a la carpeta del proyecto:
    ```sh
    cd tu-repositorio/Clase 01
    ```

3. Ejecuta el archivo JavaScript:
    ```sh
    node main.js
    ```


## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que desees realizar.

## Contacto

Para cualquier consulta, puedes contactarme en [riosianric@gmail.com](mailto:riosianric@gmail.com).