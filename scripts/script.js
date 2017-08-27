var el = document.getElementById('burger');
var other_el = document.getElementsByTagName('ul');

el.addEventListener('click', function (){
	if(other_el[0].classList.contains('hidden')===true)
	other_el[0].classList.remove('hidden');
	else
		other_el[0].classList.add('hidden');
});
