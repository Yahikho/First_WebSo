const inconMenu = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu');

inconMenu.addEventListener('click', () => {
    menu.classList.toggle('spreat');
});

window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista'),{
        slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive:[
			{
				breakpoint:790,/*>= 910 px*/
				settings:{
					slidesToShow: 2,
					slidesToScroll: 2,
					draggable: false
				}
			},{
				breakpoint:1100,
				settings:{
					slidesToShow: 3,
					slidesToScroll: 3,
					draggable: false
				}
			}
		]
    });
});
/*Hola Jhon lo edito, mandelo a comer mierda*/
