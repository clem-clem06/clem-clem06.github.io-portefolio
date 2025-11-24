document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. GESTION DU MENU MOBILE (BURGER) ---
    const burger = document.getElementById('burger');
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu li a');

    if (burger) {
        burger.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });


    // --- 2. SCROLL SPY (Active le lien au défilement) ---
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        menuLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });


    // --- 3. SMOOTH SCROLL ---
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            
            if(targetSection){ 
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });


    // --- 4. GESTION DES PROJETS ---
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card) => {
        card.addEventListener("click", () => {
            const descriptionDiv = card.nextElementSibling;
            const description = card.getAttribute("data-description");

            if (descriptionDiv.innerHTML === "") {
                descriptionDiv.textContent = description;
            }

            if(descriptionDiv.classList.contains("hidden")) {
                descriptionDiv.classList.remove("hidden");
            } else {
                descriptionDiv.classList.add("hidden");
            }
        });
    });

});