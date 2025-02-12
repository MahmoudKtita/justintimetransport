const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if(bar)
{
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close)
    {
        close.addEventListener('click',()=>{
            event.preventDefault();
            nav.classList.remove('active');
        })
    }

    new Swiper('.card-wrapper', {
        loop: true,
        autoplay: {
            delay: 1500, // Time between slides in milliseconds
            disableOnInteraction: false, // Continue autoplay even after interaction
          },
        spaceBetween:30,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable:true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        breakpoints:{
            0:{
                slidesPerView : 1
            },
            768:{
                slidesPerView : 2
            },
            1024:{
                slidesPerView : 3
            },
        }
      });
    
window.addEventListener("load", function () {
const loader = document.getElementById("preloader");
loader.classList.add("hidden");
setTimeout(() => loader.style.display = "none", 500);
});
      
document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');

        // Vérifie si le lien est une ancre interne (commence par '#')
        if (targetId.startsWith("#")) {
            e.preventDefault(); // Empêche le comportement par défaut pour les ancres internes
            const targetSection = document.getElementById(targetId.substring(1));

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 100, // Ajuste l'offset si nécessaire
                    behavior: 'smooth' // Défilement fluide
                });
            }

            // Ferme le menu après le clic sur une rubrique (pour mobile)
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        }
    });
});

