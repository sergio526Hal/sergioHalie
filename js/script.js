document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MENU MOBILE
    ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            nav.classList.toggle("active");

            const isOpen = nav.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            const icon = menuToggle.querySelector("i");

            if (icon) {

                if (isOpen) {
                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-xmark");
                } else {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }

            }

        });


        /* Fermer le menu après clic sur un lien */

        const navLinks = nav.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                nav.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                const icon = menuToggle.querySelector("i");

                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }

            });

        });

    }


    /* =====================================================
       MODE SOMBRE
    ===================================================== */

    const themeToggle =
        document.getElementById("themeToggle");

    if (themeToggle) {

        const themeIcon =
            themeToggle.querySelector("i");

        const savedTheme =
            localStorage.getItem("theme");


        /* Restaurer le thème */

        if (savedTheme === "dark") {

            document.body.classList.add(
                "dark-mode"
            );

            if (themeIcon) {

                themeIcon.classList.remove(
                    "fa-moon"
                );

                themeIcon.classList.add(
                    "fa-sun"
                );

            }

        } else {

            document.body.classList.remove(
                "dark-mode"
            );

            if (themeIcon) {

                themeIcon.classList.remove(
                    "fa-sun"
                );

                themeIcon.classList.add(
                    "fa-moon"
                );

            }

        }


        /* Changer le thème */

        themeToggle.addEventListener(
            "click",
            function () {

                document.body.classList.toggle(
                    "dark-mode"
                );

                const darkMode =
                    document.body.classList.contains(
                        "dark-mode"
                    );


                if (darkMode) {

                    localStorage.setItem(
                        "theme",
                        "dark"
                    );

                    if (themeIcon) {

                        themeIcon.classList.remove(
                            "fa-moon"
                        );

                        themeIcon.classList.add(
                            "fa-sun"
                        );

                    }

                } else {

                    localStorage.setItem(
                        "theme",
                        "light"
                    );

                    if (themeIcon) {

                        themeIcon.classList.remove(
                            "fa-sun"
                        );

                        themeIcon.classList.add(
                            "fa-moon"
                        );

                    }

                }

            }
        );

    }


    /* 
   BARRES DE COMPÉTENCES
========================================================= */

const skillBars = document.querySelectorAll(".progress-line span");

if (skillBars.length > 0) {

    skillBars.forEach(function (bar) {

        const value = bar.getAttribute("data-value");

        if (value) {

            bar.style.width = value + "%";

        }

    });

}


    /* =====================================================
       VARIABLES DU MODAL
    ===================================================== */

    const projectModal =
        document.getElementById(
            "projectModal"
        );

    const projectModalContent =
        document.getElementById(
            "projectModalContent"
        );

    const closeButton =
        document.getElementById(
            "projectModalClose"
        );


    /* =====================================================
       OUVRIR LE MODAL
    ===================================================== */

    window.openProjectModal =
        function (project) {

            if (
                !projectModal ||
                !projectModalContent
            ) {
                return;
            }


            /* =====================================================
   SAVEURS & CUISINE
===================================================== */

 if (project === "saveurs") {

    projectModalContent.innerHTML = `

        <h2 id="projectModalTitle">
            Saveurs & Cuisine
        </h2>

        <p class="modal-description">
            Site web dédié aux recettes de cuisine,
            avec une interface moderne et intuitive.
        </p>

        <h3>Description</h3>

        <p>
            Saveurs & Cuisine est un site web permettant
            de découvrir différentes recettes de cuisine,
            leurs ingrédients ainsi que les étapes de
            préparation.
        </p>

        <h3>Objectif</h3>

        <p>
            L'objectif du projet est de proposer une
            plateforme simple et agréable permettant
            aux utilisateurs de découvrir des recettes
            et de consulter facilement leur préparation.
        </p>

        <h3>Fonctionnalités</h3>

        <ul>

            <li>
                Présentation de recettes de cuisine
            </li>

            <li>
                Affichage des ingrédients
            </li>

            <li>
                Affichage des étapes de préparation
            </li>

            <li>
                Navigation entre les différentes sections
            </li>

            <li>
                Menu mobile responsive
            </li>

            <li>
                Affichage dynamique des recettes
            </li>

            <li>
                Formulaire de contact
            </li>

            <li>
                Design responsive adapté aux mobiles
            </li>

        </ul>

        <h3>Technologies utilisées</h3>

        <div class="modal-technologies">

            <span class="tag">
                HTML5
            </span>

            <span class="tag">
                CSS3
            </span>

            <span class="tag">
                JavaScript
            </span>

            <span class="tag">
                Formspree
            </span>

        </div>

        <div class="modal-actions">

            <a
                href="https://github.com/sergio526Hal/recette"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-navy"
            >
                <i class="fa-brands fa-github"></i>
                Code
            </a>

            <a
                href="https://recette-lq2kzf25j-sergio526hal.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-yellow"
            >
                <i class="fa-solid fa-globe"></i>
                Voir le site
            </a>

        </div>

    `;
}


            /* =============================================
               STOCKMANAGER
            ============================================= */

            else if (
                project === "stockmanager"
            ) {

                projectModalContent.innerHTML = `

                    <h2 id="projectModalTitle">
                        StockManager
                    </h2>

                    <p class="modal-description">
                        Application web de gestion de stock
                        développée avec PHP, CodeIgniter
                        et MySQL.
                    </p>

                    <h3>Description</h3>

                    <p>
                        StockManager est une application web
                        permettant de gérer les produits,
                        les stocks et les opérations liées
                        à la gestion d'une entreprise.
                    </p>

                    <h3>Objectif</h3>

                    <p>
                        Faciliter le suivi des produits et
                        permettre une gestion plus organisée
                        des stocks.
                    </p>

                    <h3>Fonctionnalités</h3>

                    <ul>

                        <li>
                            Gestion des produits
                        </li>

                        <li>
                            Ajout et modification des produits
                        </li>

                        <li>
                            Suppression des produits
                        </li>

                        <li>
                            Gestion des stocks
                        </li>

                        <li>
                            Suivi des entrées et sorties
                        </li>

                        <li>
                            Gestion des données avec MySQL
                        </li>

                    </ul>

                    <h3>Technologies utilisées</h3>

                    <div class="modal-technologies">

                        <span class="tag">
                            PHP
                        </span>

                        <span class="tag">
                            CodeIgniter
                        </span>

                        <span class="tag">
                            MySQL
                        </span>

                        <span class="tag">
                            HTML
                        </span>

                        <span class="tag">
                            CSS
                        </span>

                        <span class="tag">
                            JavaScript
                        </span>

                    </div>

                    <div class="modal-actions">

                        <a
                            href="https://github.com/sergio526Hal/StockManager"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn btn-navy"
                        >
                            <i class="fa-brands fa-github"></i>
                            Code
                        </a>

                    </div>

                `;

            }
            /* =====================================================
   FACEATTEND
===================================================== */

else if (project === "sfigp") {

    projectModalContent.innerHTML = `

        <h2 id="projectModalTitle">
            Sfigp
        </h2>

        <p class="modal-description">
            Application web de gestion des présences
            basée sur la reconnaissance faciale.
        </p>

        <h3>Description</h3>

        <p>
            SFIGP est une application permettant
            d'automatiser la gestion des présences
            grâce à la reconnaissance faciale.
        </p>

        <h3>Objectif</h3>

        <p>
            Faciliter l'enregistrement des présences
            et réduire les tâches manuelles liées
            au suivi des étudiants ou employés.
        </p>

        <h3>Fonctionnalités</h3>

        <ul>

            <li>
                Reconnaissance faciale
            </li>

            <li>
                Enregistrement automatique des présences
            </li>

            <li>
                Gestion des utilisateurs
            </li>

            <li>
                Consultation des présences
            </li>

            <li>
                Interface utilisateur interactive
            </li>

            <li>
                Communication avec une API backend
            </li>

        </ul>

        <h3>Technologies utilisées</h3>

        <div class="modal-technologies">

            <span class="tag">
                Python
            </span>

            <span class="tag">
                Flask
            </span>

            <span class="tag">
                React
            </span>

            <span class="tag">
                Reconnaissance faciale
            </span>

        </div>

        <div class="modal-actions">

            <a
                href="https://github.com/sergio526Hal/faceattend"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-navy"
            >
                <i class="fa-brands fa-github"></i>
                Code
            </a>

        </div>

    `;
}


/* =====================================================
   AGRO-BUSINESS
===================================================== */

else if (project === "agrobusiness") {

    projectModalContent.innerHTML = `

        <h2 id="projectModalTitle">
            Agro-Business
        </h2>

        <p class="modal-description">
            Application mobile dédiée à la gestion
            d'une activité agro-business.
        </p>

        <h3>Description</h3>

        <p>
            Agro-Business est une application mobile
            conçue pour faciliter la gestion d'une
            activité dans le domaine de l'agriculture.
        </p>

        <h3>Objectif</h3>

        <p>
            Permettre une gestion plus simple des activités,
            des produits et des données liées à
            l'exploitation agricole.
        </p>

        <h3>Fonctionnalités</h3>

        <ul>

            <li>
                Gestion des activités agricoles
            </li>

            <li>
                Gestion des produits
            </li>

            <li>
                Enregistrement des données
            </li>

            <li>
                Consultation des informations
            </li>

            <li>
                Gestion des données avec Firebase
            </li>

            <li>
                Interface mobile responsive
            </li>

        </ul>

        <h3>Technologies utilisées</h3>

        <div class="modal-technologies">

            <span class="tag">
                Flutter
            </span>

            <span class="tag">
                Dart
            </span>

            <span class="tag">
                Firebase
            </span>

        </div>

        <div class="modal-actions">

            <a
                href="https://github.com/sergio526Hal/projetagro.git"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-navy"
            >
                <i class="fa-brands fa-github"></i>
                Code
            </a>

        </div>

    `;
}


/* =====================================================
   MADA EYES
===================================================== */

else if (project === "madaeyes") {

    projectModalContent.innerHTML = `

        <h2 id="projectModalTitle">
            Mada Eyes
        </h2>

        <p class="modal-description">
            Site web dynamique développé pour la gestion
            et la présentation de données.
        </p>

        <h3>Description</h3>

        <p>
            Mada Eyes est un site web dynamique permettant
            de présenter des informations à travers une
            interface utilisateur moderne et interactive.
        </p>

        <h3>Objectif</h3>

        <p>
            Créer une plateforme web dynamique permettant
            de gérer et afficher efficacement les données.
        </p>

        <h3>Fonctionnalités</h3>

        <ul>

            <li>
                Interface utilisateur dynamique
            </li>

            <li>
                Affichage des informations
            </li>

            <li>
                Gestion des données
            </li>

            <li>
                Interaction avec une base de données
            </li>

            <li>
                Navigation entre les différentes pages
            </li>

            <li>
                Interface adaptée aux différents écrans
            </li>

        </ul>

        <h3>Technologies utilisées</h3>

        <div class="modal-technologies">

            <span class="tag">
                HTML
            </span>

            <span class="tag">
                CSS
            </span>

            <span class="tag">
                JavaScript
            </span>

            <span class="tag">
                PHP
            </span>

            <span class="tag">
                MySQL
            </span>

        </div>

        <div class="modal-actions">

            <a
                href="https://github.com/sergio526Hal/madaeyes"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-navy"
            >
                <i class="fa-brands fa-github"></i>
                Code
            </a>

        </div>

    `;
}


            /* =============================================
               AFFICHER LE MODAL
            ============================================= */

            projectModal.classList.add(
                "active"
            );

            projectModal.setAttribute(
                "aria-hidden",
                "false"
            );

            document.body.classList.add(
                "modal-open"
            );

        };


    /* =====================================================
       FERMER LE MODAL
    ===================================================== */

    function closeProjectModal() {

        if (!projectModal) {
            return;
        }

        projectModal.classList.remove(
            "active"
        );

        projectModal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "modal-open"
        );

    }


    window.closeProjectModal =
        closeProjectModal;


    /* =====================================================
       BOUTON X
    ===================================================== */

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                closeProjectModal();

            }
        );

    }


    /* =====================================================
       FERMER EN CLIQUANT À L'EXTÉRIEUR
    ===================================================== */

    if (projectModal) {

        projectModal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === projectModal
                ) {

                    closeProjectModal();

                }

            }
        );

    }


    /* =====================================================
       FERMER AVEC ESCAPE
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                projectModal &&
                projectModal.classList.contains(
                    "active"
                )
            ) {

                closeProjectModal();

            }

        }
    );


    /* =====================================================
       FORMSPREE - CONTACT
    ===================================================== */

    const contactForm =
        document.getElementById(
            "contactForm"
        );

    const formMessage =
        document.getElementById(
            "formMessage"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            async function (event) {

                event.preventDefault();


                if (formMessage) {

                    formMessage.textContent =
                        "Envoi du message...";

                    formMessage.className =
                        "form-message";

                }


                const formData =
                    new FormData(
                        contactForm
                    );


                try {

                    const response =
                        await fetch(
                            contactForm.action,
                            {
                                method: "POST",
                                body: formData,
                                headers: {
                                    "Accept":
                                        "application/json"
                                }
                            }
                        );


                    if (response.ok) {

                        if (formMessage) {

                            formMessage.textContent =
                                "Message envoyé avec succès !";

                            formMessage.className =
                                "form-message success";

                        }

                        contactForm.reset();

                    } else {

                        if (formMessage) {

                            formMessage.textContent =
                                "Une erreur est survenue. Veuillez réessayer.";

                            formMessage.className =
                                "form-message error";

                        }

                    }

                } catch (error) {

                    if (formMessage) {

                        formMessage.textContent =
                            "Impossible d'envoyer le message. Vérifiez votre connexion.";

                        formMessage.className =
                            "form-message error";

                    }

                }

            }
        );

    }

});