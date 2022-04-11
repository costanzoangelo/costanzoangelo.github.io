document.addEventListener('DOMContentLoaded', function() {//appena la pagina si è caricata

  /* ! slider menu */

  const menuSlide = () => {
    const burger = document.querySelector('.burger__menu');
    const menu = document.querySelector('.header__menu');
    const navLinks = document.querySelectorAll('.header__menu li');

    burger.addEventListener('click', () => {
      menu.classList.toggle('menu-active');

      navLinks.forEach((link, index) => {
        if(link.style.animation){
          link.style.animation = ''
        }else{
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
        }
      });
       burger.classList.toggle("toggle");
    });
  }

  menuSlide();


  /* ! current page marker */

  const elems = Array.from( document.querySelectorAll( '.link') );//crea la lista di tutti gli elementi (li) con classe .link
    elems.forEach( element => {//ciclo su tutti gli elementi del menu


    var a = element.getElementsByTagName('a')[0];
    if(a.href === window.location.href)// se l'url corrente è uguale alla voce del menu allora aggiungo la classe .corrente
     element.classList.add('current');
   });
})
