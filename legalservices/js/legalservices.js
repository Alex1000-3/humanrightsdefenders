// бургер 
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const titleLogo = document.querySelector('.header__titlelogo')
const headerContainer = document.querySelector('.header__container')
if (iconMenu) {
   iconMenu.addEventListener('click', function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
      titleLogo.classList.toggle('_active');
      headerContainer.classList.toggle('_active');
   })
}
const topDistance = top;
const menuLinks = document.querySelectorAll('.menu__link[data-goto');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLinks => {
      menuLinks.addEventListener('click', onMenuLinksClisk);
   });
   function onMenuLinksClisk(e) {
      const menulink = e.target;
      if (menulink.dataset.goto && document.querySelector(menulink.dataset.goto)) {
         const gotoBlock = document.querySelector(menulink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
         if (iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
            titleLogo.classList.remove('_active');
            headerContainer.classList.remove('_active');
         }
         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}

//меню с fixed
const fixedScorllBlock = () => {
   let scrollDistance = window.scrollY;
   if (scrollDistance > 52) {
      headerContainer.classList.add('-fixed');
   } else {
      headerContainer.classList.remove('-fixed');
   }
}
window.addEventListener('scroll', fixedScorllBlock)

// анимация при скроле 
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffest = offset(animItem).top;
         const animStart = 2;
         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }
         if ((pageYOffset > animItemOffest - animItemPoint) && pageYOffset < (animItemOffest + animItemHeight)) {
            animItem.classList.add('_active');
         } else {
            if (!animItem.classList.contains('_anim-no-hide')) {
               animItem.classList.remove('_active');
            }
         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(), // ,
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }
   // animOnScroll();
   setTimeout(() =>{
      animOnScroll();
   }, 300);
}