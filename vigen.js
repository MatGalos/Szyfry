"use strict";
document.getElementById('transfer').onclick=function(){
    location.href='index.html';
};

var app = new function() {
	this.doCrypt = function(czyZaszyfrowane) {
		var kluczStr = document.getElementById("key").value;
		if (kluczStr.length == 0) {
			alert("Key is empty");
			return;
		}
		var kluczTabela = klucz(kluczStr);
		if (kluczTabela.length == 0) {
			alert("Key has no letters");
			return;
		}
		if (czyZaszyfrowane) {
			for (var i = 0; i < kluczTabela.length; i++)
				kluczTabela[i] = (26 - kluczTabela[i]) % 26;
		}
		var textElem = document.getElementById("text");
		textElem.value = zaszyfruj(textElem.value, kluczTabela);
	};

	function zaszyfruj(input, key) {
		var output = "";
		for (var i = 0, j = 0; i < input.length; i++) {
			var c = input.charCodeAt(i);
			if (czyDuza(c)) {
				output += String.fromCharCode((c - 65 + key[j % key.length]) % 26 + 65);
				j++;
			} else if (czyMala(c)) {
				output += String.fromCharCode((c - 97 + key[j % key.length]) % 26 + 97);
				j++;
			} else {
				output += input.charAt(i);
			}
		}
		return output;
	}

	function klucz(key) {
		var result = [];
		for (var i = 0; i < key.length; i++) {
			var c = key.charCodeAt(i);
			if (czyLitera(c))
				result.push((c - 65) % 32);
		}
		return result;
	}
	function czyLitera(c) {
		return czyDuza(c) || czyMala(c);
	}
	
	function czyDuza(c) {
		return 65 <= c && c <= 90;
	}
	
	function czyMala(c) {
		return 97 <= c && c <= 122;
	}
	
};