var alfabet=['a','ą','b','c','ć','d','e','ę','f','g','h','i','j','k','l','ł','m','n','ń','o','ó','p','q','r','s','ś','t','u','v','w',
'x','y','z','ź','ż'];
document.getElementById('transfer').onclick=function(){
    location.href='index.html';
};
		var dlugoscAlfabetu = alfabet.length;
		var maksymalnaDlugoscAlfabetu = dlugoscAlfabetu - 1;
		var pola = document.querySelectorAll('.encrypt');
		var szyfr = document.querySelector('#cipher');

		/**
		 * @param  {String}  znak    
		 * @param  {Integer} przesunO 
		 * @return {String}          
		 */
		var przesuwanie = function (znak, przesunO) {
			var index = alfabet.indexOf(znak.toLowerCase());
			if (index < 0) return znak;
			var przesunIndex = przesunO + index;
			if (przesunIndex > maksymalnaDlugoscAlfabetu) {
				przesunIndex = przesunIndex - dlugoscAlfabetu;
			}
			if (przesunIndex < 0) {
				przesunIndex = przesunIndex + dlugoscAlfabetu;
			}
			return alfabet[przesunIndex];
		};

		/**
		 * @param  {String}  wiadomosc 
		 * @param  {Integer} przesunO 
		 * @return {String}          
		 */
		var uruchomSzyfrowanie = function (wiadomosc, przesunO) {
			return wiadomosc.split('').map(function (znak) {
				return przesuwanie(znak, przesunO);
			}).join('');
		};

		var szyfrowanie = function () {
			var przesunO = parseInt(pola[1].value, 10);
			var przejscia = parseInt(1);
			var zaszyfrowanie = pola[0].value;
			for (var i = 0; i < przejscia; i++) {
				zaszyfrowanie = uruchomSzyfrowanie(zaszyfrowanie, przesunO)
			}
			szyfr.value = zaszyfrowanie;

		};

		/**
		 * @param  {Event} zdarzenie 
		 */
		var inputHandler = function (zdarzenie) {
			if (!zdarzenie.target.matches('.encrypt')) return;
			szyfrowanie();

		};
		document.addEventListener('input', inputHandler);