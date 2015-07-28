function Libro(titulo, autor, editorial, ISBN, estado){
	this.titulo = titulo;
	this.autor = autor;
	this.editorial = editorial;
	this.ISBN = ISBN;
	this.estado = estado;
}

function Biblioteca(nombre, libros) {
	this.nombre = nombre;
	this.libros = libros;
}

Biblioteca.prototype.agregarLibro = function(libro) {
	this.libros.push(libro);
}

Biblioteca.prototype.eliminarLibro = function(titulo) {
	var libro = this.buscarLibro(titulo);
	if (libro === null) {
		return false;
	}
	var index = this.libros.indexOf(libro);
	this.libros.splice(index);
	
	return true;
}

Biblioteca.prototype.buscarLibro = function(nombre) {
	var resultado = null;
	for (var i=0; i<this.libros.length; i++){
		if (this.libros[i].titulo === nombre){
			resultado = this.libros[i];
			break;
		}
	}
	return resultado;
}


