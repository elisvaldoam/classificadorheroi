function calcular() {
	let nome = document.getElementById("nome").value;
	let xp = parseInt(document.getElementById("xp").value);
	let res ='';
	if ((nome =='') ||( xp=='')){
		document.getElementById("resultado").innerHTML = 'Gentileza preencher os campos acima!';
	}else{
		if (xp <= 1000){
			res = 'Ferro';
		}else if ((xp >1000) && (xp <= 2000)){
			res = 'Bronze';
		}else if ((xp >2000) && (xp <= 5000)){
			res = 'Prata';
		}else if ((xp >5000) && (xp <= 7000)){
			res = 'Ouro';
		}else if ((xp >7000) && (xp <= 8000)){
			res = 'Platina';
		}else if ((xp >8000) && (xp <= 9000)){
			res = 'Ascendente';
		}else if ((xp >9000) && (xp <= 10000)){
			res = 'Imortal';
		}else if (xp >10000) {
			res = 'Radiante';
		}	
		document.getElementById("resultado").innerHTML = '<font color=red>O Herói de nome<b> '+nome+'</b> está no nível de <b>'+res+'</b></font>';
	}
}