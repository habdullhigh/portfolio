// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.toggle(
                    'active',
                    link.getAttribute('href') === `#${entry.target.id}`
                );
            });
        }
    });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

// Contact form → Google Apps Script
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzVoBWQfOSlTjJiTdL2Iv0TaQRJwYkdszkZ-YA_TEcBvzO7uXGZoWV7EMmP0yZl6F7bjA/exec';

const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    formStatus.className = 'form-status';
    formStatus.textContent = '';

    const payload = {
        name: contactForm.name.value.trim(),
        email: contactForm.email.value.trim(),
        message: contactForm.message.value.trim(),
    };

    try {
        await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        formStatus.className = 'form-status form-status--ok';
        formStatus.textContent = '// Message sent. I\'ll get back to you soon.';
        contactForm.reset();
    } catch {
        formStatus.className = 'form-status form-status--err';
        formStatus.textContent = '// Failed to send. Try emailing me directly.';
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'SendMessage()';
    }
});
