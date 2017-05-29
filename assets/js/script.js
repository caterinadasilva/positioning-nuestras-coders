function coders() {
	var container = document.getElementById('coders');

	function Coder(nombre, apellido, foto) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.fotoImg = new Image();
		this.fotoImg.src = 'assets/img/' + foto + '.jpg';
		this.print = function() {
			var coderBox = document.createElement('div');
			coderBox.classList.add('caja');
			coderBox.appendChild(this.fotoImg);
			var coderName = document.createElement('h4');
			var coderNameTxt = document.createTextNode(this.nombre + ' ' + this.apellido);
			coderName.appendChild(coderNameTxt);
			coderBox.appendChild(coderName);
			container.appendChild(coderBox);
		}
	}

	var coder1 = new Coder('Annie', 'Azaña', 'profile-1');
	var coder2 = new Coder('Marisol', 'Carrillo', 'profile-2');
	var coder3 = new Coder('Lía', 'Maldonado', 'profile-3');
	var coder4 = new Coder('Fergie', 'Bernuy', 'profile-4');
	var coder5 = new Coder('Arisbeth', 'Hernández', 'profile-5');
	var coder6 = new Coder('Anna', 'Absi', 'profile-6');

	function printCoders() {
		var titulo = document.createElement('h3');
		var tituloTxt = document.createTextNode('Nuestras coders');
		titulo.appendChild(tituloTxt);
		container.appendChild(titulo);
		coder1.print();
		coder2.print();
		coder3.print();
		coder4.print();
		coder5.print();
		coder6.print();
	}

	printCoders();
}