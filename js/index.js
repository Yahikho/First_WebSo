const inconMenu = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu');

inconMenu.addEventListener('click', () => {
    menu.classList.toggle('spreat');
});

window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista'),{
        slidesToShow: 3,
		slidesToScroll: 3,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		}
    });
});