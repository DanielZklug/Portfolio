 // Menu mobile
        const menuBtn = document.querySelector('.menu-btn');
        const navLinks = document.querySelector('.nav-links');

        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="bi bi-x"></i>' : '<i class="bi bi-list"></i>';
        });

        // Fermer le menu au clic sur un lien
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuBtn.innerHTML = '<i class="bi bi-list"></i>';
            });
        });

        // Animation au défilement
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(element => {
            console.log(element);
        });

        const appearOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            });
        }, appearOptions);

        fadeElements.forEach(element => {
            appearOnScroll.observe(element);
        });

        // Navigation fluide
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Changement de style au scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            header.style.backgroundColor = window.scrollY > 50 ? 
                'rgba(18, 18, 18, 0.95)' : 'rgba(18, 18, 18, 0.9)';
        });
        // Données personnelles
        const title = "CodeCraft | Développeur Junior";
        document.querySelector('title').innerText = title;



        // Données des compétences
        const skills = [
            { name: 'HTML/CSS', level: 80 },
            { name: 'JavaScript/TypeScript', level: 60 },
            { name: 'Angular', level: 40 },
            { name: 'React', level: 20 },
            { name: 'PHP', level: 70 },
            { name: 'Laravel', level: 30 },
            { name: 'MySQL', level: 50 },
            { name: 'Github/GitLab', level: 40 },
            { name: 'Outils IA', level: 80 },
            { name: 'UML/MERISE', level: 50 }
            // ... autres compétences
        ];

        // Fonction pour générer le HTML des compétences
        function renderSkills() {
            let skillsHTML = '';
            
            skills.forEach(skill => {
                skillsHTML += `
                <div class="skill-item">
                    <div class="skill-name">
                        <span>${skill.name}</span>
                        <span>${skill.level}%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" style="width: ${skill.level}%"></div>
                    </div>
                </div>
                `;
            });
            
            return skillsHTML;
        }

        // Pour insérer les compétences dans le DOM (exemple avec un élément ayant l'id 'skills-container')
        document.addEventListener('DOMContentLoaded', function() {
            const container = document.getElementById('skills-container');
            if (container) {
                container.innerHTML = renderSkills();
            }
        });
        // Fonctions pour les modals
function showBadgePreview(imageSrc, title) {
    const modal = document.getElementById('badgeModal');
    const modalImg = document.getElementById('badgeModalImage');
    const modalTitle = document.getElementById('badgeModalTitle');
    const modalLink = document.getElementById('badgeModalLink');
    
    // Trouver le lien original dans les données
    const cert = certifications.find(c => c.title === title && c.type === "badge");
    if (cert) {
        modalLink.href = cert.link;
    }
    
    modalImg.src = imageSrc;
    modalTitle.textContent = title;
    modal.style.display = "block";
}

function showPdfModal(pdfSrc, title) {
    const modal = document.getElementById('pdfModal');
    const modalFrame = document.getElementById('pdfModalFrame');
    const modalTitle = document.getElementById('pdfModalTitle');
    const modalLink = document.getElementById('pdfModalLink');
    
    modalFrame.src = pdfSrc;
    modalTitle.textContent = title;
    modalLink.href = pdfSrc;
    modal.style.display = "block";
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
    
    // Si c'est le modal PDF, on vide l'iframe pour arrêter le chargement
    if (modalId === 'pdfModal') {
        document.getElementById('pdfModalFrame').src = "";
    }
}

// Fermer les modals en cliquant à l'extérieur
window.onclick = function(event) {
    if (event.target.className === "modal") {
        event.target.style.display = "none";
        
        // Si c'est le modal PDF, on vide l'iframe
        if (event.target.id === 'pdfModal') {
            document.getElementById('pdfModalFrame').src = "";
        }
    }
}