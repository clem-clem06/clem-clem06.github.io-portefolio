// SMOOTH SCROLL
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute("href"));
        if(section){ section.scrollIntoView({ behavior:"smooth" }); }
    });
});

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
    card.addEventListener("click", () => {
        const descriptionDiv = card.nextElementSibling; // la div juste après
        const description = card.getAttribute("data-description");

        // toggle affichage
        if(descriptionDiv.classList.contains("hidden")) {
            descriptionDiv.textContent = description;
            descriptionDiv.classList.remove("hidden");
        } else {
            descriptionDiv.classList.add("hidden");
        }

        descriptionDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

// Gérer la classe 'active' pour chaque élément du menu et fermer le menu après un clic
const menuItems = document.querySelectorAll('.site-header .menu li a');
menuItems.forEach(item => {
    item.addEventListener('click', function (e) {
        // Supprimer la classe 'active' de tous les autres éléments
        menuItems.forEach(i => i.classList.remove('active'));
        // Ajouter la classe 'active' à l'élément cliqué
        e.target.classList.add('active');

        // Fermer le menu après avoir cliqué sur un élément du menu
        const menu = document.querySelector('.site-header .menu');
        const containerLarge = document.querySelector('.site-header .container-large');
        menu.classList.remove('active');
        containerLarge.classList.remove('active');
    });
});
