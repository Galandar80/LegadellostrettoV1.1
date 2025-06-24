// Script per gestire l'inclusione del footer e altre utilità
document.addEventListener('DOMContentLoaded', function() {
    const includeFooters = document.querySelectorAll('.include-footer');
    
    includeFooters.forEach(footerContainer => {
        footerContainer.innerHTML = `
            <footer class="main-footer">
                <div class="footer-container">
                    <div class="footer-content">
                        <!-- Logo e descrizione -->
                        <div class="footer-section footer-brand">
                            <div class="footer-logo">
                                <img src="magic-logo.png" alt="Magic: The Gathering Logo">
                                <span>Magic: The Gathering</span>
                            </div>
                            <p class="footer-description">
                                La community ufficiale di Magic: The Gathering dello Stretto di Messina. 
                                Dal 2019 organizziamo tornei competitivi e promuoviamo la crescita dei Planeswalker del territorio.
                            </p>
                            <div class="footer-social">
                                <a href="#" class="social-link"><i class="fab fa-discord"></i></a>
                                <a href="#" class="social-link"><i class="fab fa-facebook"></i></a>
                                <a href="#" class="social-link"><i class="fab fa-telegram"></i></a>
                                <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        
                        <!-- Links rapidi -->
                        <div class="footer-section">
                            <h4>Navigazione</h4>
                            <ul class="footer-links">
                                <li><a href="index.html"><i class="fas fa-home"></i> Home</a></li>
                                <li><a href="classifica.html"><i class="fas fa-trophy"></i> Ranking</a></li>
                                <li><a href="tornei.html"><i class="fas fa-calendar"></i> Tornei</a></li>
                                <li><a href="eventi.html"><i class="fas fa-star"></i> Eventi</a></li>
                                <li><a href="regolamento.html"><i class="fas fa-scroll"></i> Regolamento</a></li>
                                <li><a href="contatti.html"><i class="fas fa-envelope"></i> Contatti</a></li>
                            </ul>
                        </div>
                        
                        <!-- Formati supportati -->
                        <div class="footer-section">
                            <h4>Formati MTG</h4>
                            <ul class="footer-links">
                                <li><a href="magic-formats.html#standard"><i class="fas fa-bolt"></i> Standard</a></li>
                                <li><a href="magic-formats.html#modern"><i class="fas fa-fire"></i> Modern</a></li>
                                <li><a href="magic-formats.html#commander"><i class="fas fa-chess-king"></i> Commander/EDH</a></li>
                                <li><a href="magic-formats.html#limited"><i class="fas fa-gift"></i> Limited</a></li>
                                <li><a href="magic-formats.html#pioneer"><i class="fas fa-rocket"></i> Pioneer</a></li>
                                <li><a href="magic-formats.html#legacy"><i class="fas fa-gem"></i> Legacy</a></li>
                            </ul>
                        </div>
                        
                        <!-- Contatti e info -->
                        <div class="footer-section">
                            <h4>Contatti</h4>
                            <div class="footer-contact">
                                <p><i class="fas fa-envelope"></i> legadellostretto@mtg.it</p>
                                <p><i class="fas fa-phone"></i> +39 328 724 1502</p>
                                <p><i class="fas fa-map-marker-alt"></i> Games Academy Messina<br>Via Nicola Fabrizi 11, Messina</p>
                                <p><i class="fas fa-clock"></i> Mar-Dom: 17:00-01:00<br>Lun: Chiuso</p>
                            </div>
                        </div>
                        
                        <!-- Newsletter -->
                        <div class="footer-section footer-newsletter">
                            <h4>Resta Aggiornato</h4>
                            <p>Iscriviti alla newsletter per ricevere aggiornamenti sui tornei e eventi speciali.</p>
                            <form class="newsletter-form" action="#" method="post">
                                <input type="email" placeholder="La tua email" required>
                                <button type="submit"><i class="fas fa-paper-plane"></i></button>
                            </form>
                            <div class="footer-badges">
                                <span class="badge-mtg">WPN Store</span>
                                <span class="badge-mtg">Official Events</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Copyright -->
                    <div class="footer-bottom">
                        <div class="footer-bottom-content">
                            <p>&copy; 2019-2024 Lega dello Stretto - Magic: The Gathering Community. Tutti i diritti riservati.</p>
                            <p class="footer-disclaimer">
                                Magic: The Gathering è un marchio registrato di Wizards of the Coast LLC. 
                                Questa è una community non ufficiale dedicata al gioco.
                            </p>
                            <div class="footer-legal">
                                <a href="#privacy">Privacy Policy</a> • 
                                <a href="#terms">Termini di Servizio</a> • 
                                <a href="#cookies">Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    });
});

// Funzioni utility per gestire le interazioni del sito
function showLoading(element) {
    if (element) {
        element.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Caricamento...</div>';
    }
}

function hideLoading(element) {
    if (element) {
        const loading = element.querySelector('.loading');
        if (loading) {
            loading.remove();
        }
    }
}

function showMessage(message, type = 'info', duration = 5000) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `alert ${type}`;
    messageDiv.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-triangle' : 'info-circle'}"></i>
        ${message}
    `;
    
    document.body.appendChild(messageDiv);
    
    // Rimuovi il messaggio dopo la durata specificata
    setTimeout(() => {
        messageDiv.remove();
    }, duration);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('it-IT', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

function formatTime(timeString) {
    return timeString.slice(0, 5); // Restituisce HH:MM
}

// Gestione del tema
function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    const themeIcon = document.querySelector('.theme-toggle i');
    if (themeIcon) {
        themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

// Carica il tema salvato
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    }
}

// Animazioni di entrata per le sezioni
function animateOnScroll() {
    const elements = document.querySelectorAll('.section, .card, .event-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Gestione smooth scroll per i link interni
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Gestione della validazione form
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('error');
            isValid = false;
        } else {
            field.classList.remove('error');
        }
    });
    
    return isValid;
}

// Gestione del countdown per eventi
function createCountdown(targetDate, element) {
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance < 0) {
            element.innerHTML = "Evento iniziato!";
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        
        element.innerHTML = `${days}g ${hours}h ${minutes}m`;
    }
    
    updateCountdown();
    return setInterval(updateCountdown, 60000); // Aggiorna ogni minuto
}

// Funzione per formattare i numeri con separatori di migliaia
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Gestione delle notifiche
function createNotification(title, body, icon = 'magic-logo.png') {
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification(title, {
            body: body,
            icon: icon,
            badge: icon
        });
    }
}

// Richiedi permessi per le notifiche
function requestNotificationPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
}

// Gestione del localStorage per i dati utente
const UserData = {
    save: function(key, data) {
        localStorage.setItem(`mtg_${key}`, JSON.stringify(data));
    },
    
    load: function(key) {
        const data = localStorage.getItem(`mtg_${key}`);
        return data ? JSON.parse(data) : null;
    },
    
    remove: function(key) {
        localStorage.removeItem(`mtg_${key}`);
    }
};

// Inizializzazione al caricamento della pagina
document.addEventListener('DOMContentLoaded', function() {
    loadSavedTheme();
    animateOnScroll();
    setupSmoothScroll();
    requestNotificationPermission();
    
    // Gestione dei form di contatto
    const contactForms = document.querySelectorAll('form[action*="formspree"]');
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!validateForm(this)) {
                e.preventDefault();
                showMessage('Compila tutti i campi obbligatori', 'error');
            } else {
                showMessage('Messaggio inviato con successo!', 'success');
            }
        });
    });
    
    // Gestione della newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                showMessage('Iscrizione alla newsletter completata!', 'success');
                this.reset();
            }
        });
    }
});

// Esporta le funzioni per l'uso globale
window.MTGUtils = {
    showLoading,
    hideLoading,
    showMessage,
    formatDate,
    formatTime,
    applyTheme,
    createCountdown,
    formatNumber,
    createNotification,
    UserData
}; 