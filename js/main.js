const homeSwiper = new Swiper(".Home__Swiper", {
    spacebtween: 30,
    loop: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: 'true'
    },
  });
  
  const arrivalsSwiper = new Swiper(".arrivals__Swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',
    spaceBetween: 16,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: 'true'
    // },
});

const sr = ScrollReveal({origin: "top" , distance: '60px' , duration: 2500 , delay: 500});

sr.reveal(".Home__Swiper , .arrivals__Swiper , .news-section")
sr.reveal(".cat-box , .trick-box , footer ul" , {interval: 100})
sr.reveal(".about-content , .product-cover" , {origin: "left"})
sr.reveal(".about-cover , .product-content" , {origin: "right"})

const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight,
//               sectionTop = current.offsetTop - 58,
//               sectionId = current.getAttribute('id')

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.header-menu a[href*=' + sectionId + ']').className = 'show'
//         }else{
//             document.querySelector('.header-menu a[href*=' + sectionId + ']').classList.remove('show')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)

const menu_items = document.querySelectorAll('.header-menu li a');
const scrollUp_btn = document.querySelector('.scroll-up');
const ourHeader = document.querySelector('header');
const toggle_btn = document.querySelector('.btn-toggle');
const close_btn = document.querySelector('.close-btn');
const menu_nav = document.querySelector('header nav');
 
menu_items.forEach(link => {
    link.addEventListener('click' , function(){
      menu_items.forEach(item => {
        item.classList.remove('show')
      })
      link.classList.add('show');
      
      if(menu_nav.className === 'show-menu'){
        menu_nav.classList.remove('show-menu')
      }
    })
})

window.addEventListener('scroll' , function(){
  if (window.scrollY > 0) {
    scrollUp_btn.classList.add('show-btn');
    ourHeader.classList.add('bk-header')
  }else{
    scrollUp_btn.classList.remove('show-btn')
    ourHeader.classList.remove('bk-header')
  }
})

scrollUp_btn.addEventListener('click' , function () {
  window.scrollTo(0 , 0)
})


toggle_btn.addEventListener('click' , function () {
  menu_nav.classList.add('show-menu')
  
})

close_btn.addEventListener('click' , function () {
  menu_nav.classList.remove('show-menu')
  
})

document.addEventListener('click' , function (e) {
  
  if(e.target.tagName !== 'NAV' && e.target.className !== 'fas fa-bars'){
    if(menu_nav.classList.contains('show-menu')){
      menu_nav.classList.remove('show-menu')
    }
  }
  
})