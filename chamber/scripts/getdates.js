let today1 = new Date();
document.getElementById("currentyear").textContent=today1.getFullYear();
document.getElementById("lastmodified").textContent=document.lastModified;

const mainnav = document.querySelector('nav')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});




