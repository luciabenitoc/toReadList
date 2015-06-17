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
	//codigo
}

Biblioteca.prototype.verLibros = function() {
	//codigo
}
