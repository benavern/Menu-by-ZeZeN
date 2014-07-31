/*============================================================
	Mes Variables
==============================================================*/

var lien1 = document.getElementById("lien-menu1"),
	lien2 = document.getElementById("lien-menu2"),
	lien3 = document.getElementById("lien-menu3"),
	lien4 = document.getElementById("lien-menu4"),
	lien5 = document.getElementById("lien-menu5"),
	sous1 = document.getElementById("sous-menu1"),
	sous2 = document.getElementById("sous-menu2"),
	sous3 = document.getElementById("sous-menu3"),
	sous4 = document.getElementById("sous-menu4"),
	sous5 = document.getElementById("sous-menu5"),
	sous = document.getElementsByClassName("sous-menu"),
	accueil = document.getElementById("accueil"),
	aff = document.getElementsByClassName("affiche-content"),
	the_content = document.getElementsByClassName("content"),
	content = document.getElementById("content");


/*============================================================
	Fonctions pour le survol (affichage des liens correspondants)
==============================================================*/

lien1.onmouseover= function(){
	for (var i = 0; i < sous.length; i++ ){
		sous[i].style.display="none";
	}
	sous1.style.display = "block";

};
lien2.onmouseover= function(){
	for (var i = 0; i < sous.length; i++ ){
		sous[i].style.display="none";
	}
	sous2.style.display = "block";
};
lien3.onmouseover= function(){
	for (var i = 0; i < sous.length; i++ ){
		sous[i].style.display="none";
	}
	sous3.style.display = "block";
};
lien4.onmouseover= function(){
	for (var i = 0; i < sous.length; i++ ){
		sous[i].style.display="none";
	}
	sous4.style.display = "block";
};
lien5.onmouseover= function(){
	for (var i = 0; i < sous.length; i++ ){
		sous[i].style.display="none";
	}
	sous5.style.display = "block";
};


/*============================================================
	Fonctions pour les contenus (affichage de ce qui est demandé...)
==============================================================*/

for (var a = 0; a < the_content.length; a++){
	aff[a].onclick = function(){
		truc = this.id.replace("affiche-", "");
		content.innerHTML = document.getElementById(truc).innerHTML;
		return false;
	};
}


/*============================================================
	Initialisation pour le début
==============================================================*/

sous1.style.display="block";
content.innerHTML = accueil.innerHTML;
