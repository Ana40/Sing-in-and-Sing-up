var input = document.getElementsByTagName("input"),
	Entrar = document.getElementById("sing-in"),
	Cadastrar = document.getElementById("sing-up"),
	i;

for (i = 0; i <= 6; i++) {
	input[i].onfocus = function () {
		"Uso restrito";
		this.placeholder = " ";
	};
	input[i].onblur = function () {
		"Uso restrito";
		this.placeholder = this.name;
	};
};
Entrar.onclick = function () {
	"Uso restrito";
	this.style.width = "90%";
	Cadastrar.style.width = "20%";
	Cadastrar.lastElementChild.style.opacity = "0";
	Entrar.lastElementChild.style.opacity = "1";
};
Cadastrar.onclick = function () {
	"Uso restrito";
	this.style.width = "90%";
	Entrar.style.width = "20%";
	Entrar.lastElementChild.style.opacity = "0";
	Cadastrar.lastElementChild.style.opacity = "1";
};
