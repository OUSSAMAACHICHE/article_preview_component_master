const share = document.querySelector('.share'),
	  social = document.querySelector('.social');

share.onclick = showMenu;


function showMenu() {
	
	share.classList.toggle('active');
	social.classList.toggle('active');

}