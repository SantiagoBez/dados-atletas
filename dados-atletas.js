class Atleta{
	constructor(nome, idade, peso, altura, notas){
		this.nome = nome;
		this.idade = idade;
		this.peso = peso;
		this.altura = altura;
		this.notas = notas;
	}

	calculaCategoria(){
		if(this.idade >= 9 && this.idade <= 11){
			return "Categoria: Infantil";
		}else if(this.idade >= 12 && this.idade <= 13){
			return "Categoria: Juvenil";
		}else if(this.idade >= 14 && this.idade <= 15){
			return "Categoria: Intermediária";
		}else if(this.idade >= 16 && this.idade <= 30){
			return "Categoria: Adulto";
		}else{
			return "Sem categoria"
		}
	}

	calculaIMC(){
		return `IMC: ${this.peso/(this.altura*this.altura)}`;
	}

	calculaMediaValida(){
		let notasSeparadas = [];
		let notasMaximas = [];
		let outrasNotas = [];

		//console.log(this.notas.length);
		for(let i=0; i<this.notas.length-1; i++){
			if(this.notas[i] === 10){
				//console.log(this.notas[i]);
				notasMaximas.push(this.notas[i]);
			}else{
				//console.log(this.notas[i]);
				outrasNotas.push(this.notas[i]);
			}
		}
		
		notasMaximas = notasMaximas.slice(1, notasMaximas.length);
		outrasNotas = outrasNotas.slice(1, outrasNotas.length);

		notasMaximas.map(function(nota){
			notasSeparadas.push(nota);
		});

		outrasNotas.map(function(nota){
			notasSeparadas.push(nota);
		});

		let soma = 0;
		notasSeparadas.forEach(function(nota){
			soma = soma + nota;
		});
		return `Média: ${soma/notasSeparadas.length}`;
	}

	obtemNomeAtleta(){
		return `Atleta: ${this.nome}`;
	}

	obtemIdadeAtleta(){
		return `Idade: ${this.idade}`;
	}

	obtemPesoAtleta(){
		return `Peso: ${this.peso}kg`;
	}

	obtemAlturaAtleta(){
		return `Altura: ${this.altura}m`;
	}

	obtemNotasAtleta(){
		return `Notas: ${this.notas.sort()}`
	}
	
	obtemCategoria(){
		return this.categoria;
	}

	obtemIMC(){
		return `IMC: ${this.peso/(this.altura*this.altura)}`;
	}

	obtemMediaValida(){
		let notasSeparadas = [];
		let notasMaximas = [];
		let outrasNotas = [];

		//console.log(this.notas.length);
		for(let i=0; i<this.notas.length; i++){
			if(this.notas[i] === 10){
				//console.log(this.notas[i]);
				notasMaximas.push(this.notas[i]);
			}else{
				//console.log(this.notas[i]);
				outrasNotas.push(this.notas[i]);
			}
		}
		
		notasMaximas = notasMaximas.slice(1, notasMaximas.length);
		//console.log(notasMaximas);
		outrasNotas = outrasNotas.slice(1, outrasNotas.length);
		//console.log(outrasNotas);
		notasMaximas.map(function(nota){
			notasSeparadas.push(nota);
		});

		outrasNotas.map(function(nota){
			notasSeparadas.push(nota);
		});

		let soma = 0;
		notasSeparadas.forEach(function(nota){
			soma = soma + nota;
		});
		//console.log(notasSeparadas);
		return `Media: ${soma/notasSeparadas.length}`;
	}
}

let cesar = new Atleta("Cesar Abascal", "30", "80", "1.70", [10, 9.34, 8.42, 10, 7.88]);
let paulo = new Atleta("Paulo", "21", "70", "1.70", [10, 10, 9, 8, 9]);
let raquel = new Atleta("Raquel", "16", "48", "1.59", [9, 8, 10, 10, 7]);

console.log(cesar.obtemNomeAtleta());
console.log(cesar.obtemIdadeAtleta());
console.log(cesar.obtemPesoAtleta());
console.log(cesar.obtemAlturaAtleta());
console.log(cesar.obtemNotasAtleta());
console.log(cesar.calculaCategoria());
console.log(cesar.obtemIMC());
console.log(cesar.obtemMediaValida());

//console.log(paulo.obtemNomeAtleta());
//console.log(paulo.obtemIdadeAtleta());
//console.log(paulo.obtemPesoAtleta());
//console.log(paulo.obtemAlturaAtleta());
//console.log(paulo.obtemNotasAtleta());
//console.log(paulo.calculaCategoria());
//console.log(paulo.obtemIMC());
//console.log(paulo.obtemMediaValida());

//console.log(raquel.obtemNomeAtleta());
//console.log(raquel.obtemIdadeAtleta());
//console.log(raquel.obtemPesoAtleta());
//console.log(raquel.obtemAlturaAtleta());
//console.log(raquel.obtemNotasAtleta());
//console.log(raquel.calculaCategoria());
//console.log(raquel.obtemIMC());
//console.log(raquel.obtemMediaValida());
