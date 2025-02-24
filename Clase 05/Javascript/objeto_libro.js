const libro = {
    titulo:"El señor de los anillos",
    autor: "J.R.R. Tolkien",
    anio: "1954",
    estado: "disponible",
    capitulos: ["Prólogo", "Capítulo 1", "Capítulo 2"],
    
    describirLibro: function(){
        console.log(`Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    },

    agregarCapitulo: function(capítulo){
        this.capitulos.push(capítulo);
    },

    eliminarCapitulo: function(capitulo) {
        const indice = this.capitulos.indexOf(capitulo);
        if (indice > -1) {
            this.capitulos.splice(indice, 1);
        }
    }

}

libro.describirLibro();
console.log(libro.capitulos);
libro.agregarCapitulo("Capítulo 4");
console.log(libro.capitulos);
libro.eliminarCapitulo("Prólogo");

console.log(libro.capitulos);


// PARA CONVERTIT EN CLASE


class Libro {
    constructor(titulo,autor,anio,estado,capitulos){
        this.titulo = titulo; //Le pongo this para que sea una propiedad de la clase es como el self de python
        this.autor = autor;
        this.anio = anio;
        this.estado = estado;
        this.capitulos = capitulos;
    }

    describirLibro(){
        console.log(`Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    }
}


class librocapitulos extends Libro{
    constructor(titulo,autor,anio,estado,capitulos){
        super(titulo,autor,anio,estado,capitulos)
    }

    agregarCapitulo(capitulo){
        this.capitulos.push(capitulo);
    }

    eliminarCapitulo(capitulo){
        const indice = this.capitulos.indexOf(capitulo);
        if (indice > -1) {
            this.capitulos.splice(indice, 1);
        }
    }


    describirLibro(){
        super.describirLibro();
        console.log(`Capítulos: ${this.capitulos.join(", ")}`);
    }

}	


function disponibilidad(){
    return Math.random() < 0.5 ? "disponible" : "prestado";
}

// Crear una instancia de LibroConCapitulos
const libroConCapitulos = new librocapitulos("El Nombre del Viento", "Patrick Rothfuss", 2007, disponibilidad(), ["Prólogo", "Capítulo 1", "Capítulo 2"]);
// Llamadas a los métodos
libroConCapitulos.describirLibro();
libroConCapitulos.agregarCapitulo("Capítulo 3");
libroConCapitulos.eliminarCapitulo("Prólogo");
console.log(libroConCapitulos.capitulos);

