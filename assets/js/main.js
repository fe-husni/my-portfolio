/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header');
    // Ketika scroll lebih besar dari 50 view height, menambahkan class scroll-header ke tag header
    this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== SERVICES MODAL ===============*/
const   modalViews = document.querySelectorAll('.experiences__modal'),
        modalBtns = document.querySelectorAll('.experiences__button'),
        modalClose = document.querySelectorAll('.experiences__modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click', () =>{
        modal(i)
    })
})

modalClose.forEach((mc) =>{
    mc.addEventListener('click', () =>{
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
    })
})

/* Link active work */ 
const linkWork = document.querySelectorAll('.work__item')
function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l => l.addEventListener('click', activeWork))

/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll(`section[id]`)
    
const scrollActive = () =>{
    const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const   sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
                    sectionId = current.getAttribute('id'),
                    sectionsClass = document.querySelector(`.nav__menu a[href*=${sectionId} ]`)

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
		} else{
            sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Topik yang dipilih sebelumnya (ketika user memilih)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//Get current theme (dengan memvalidasi class light-theme)
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// Validasi jika pengguna sebelumnya memilih tema
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Mengaktifkan / menonaktifkan tema dengan toogle button
themeButton.addEventListener('click', () => {
    // menambah atau menghapus icon light theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // Menyimpan tema dan icon saat ini yang dipilih oleh user
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
})


/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 500
    }
});

// Reusable-component
sr.reveal(`.section__title, .section__subtitle, .button`, {delay: 350})
// home
sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, {delay: 700, origin: 'bottom'})
sr.reveal(`.home__social, .home__scroll`, {delay: 900, origin: 'bottom'})
// about
sr.reveal(`.about__img`)
sr.reveal(`.about, .about__description`, {origin: 'left'})
sr.reveal(`.about__info`, {delay: 400, origin: 'right'})
// My-skill
sr.reveal(`.skills`, {delay: 600})
// Recent-work
sr.reveal(`.work__filters, .work__card`)
// Contact
sr.reveal(`.contact__title`)
sr.reveal(`.sr__contact-card1, .sr__contact-card2, .sr__contact-card3`, {origin: 'top'})
sr.reveal(`.contact__content`)