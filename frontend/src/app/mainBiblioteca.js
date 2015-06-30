function Biblioteca(nombre, libros) {
	this.nombre = nombre;
	this.libros = libros;
}

Biblioteca.prototype.agregarLibro = function(libro) {
	this.libros.push(libro);
}

Biblioteca.prototype.eliminarLibro = function(libro) {
	this.libros.remove(libro);
}

Biblioteca.prototype.buscarLibro = function(nombre) {
	resultado= null;
	for (i=0; i<this.libros.length; i++){
		if (libros[i].nombre === nombre){
			resultado = libros[i];
			breack;
		}
	}
	return resultado;
}

Biblioteca.prototype.verLibros = function(nombre) {
	if (nombre === buscarLibro().nombre){
			
	}
}
