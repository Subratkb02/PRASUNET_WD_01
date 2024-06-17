document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector('.nav');
    const links = document.querySelectorAll('.nav .links a');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = '#ffce63';
            nav.style.transition = 'background-color 0.3s';
        } else {
            nav.style.backgroundColor = '#fff';
        }
    });

    links.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = '#8B0000';
            this.style.fontWeight = 'bold';
        });
        link.addEventListener('mouseout', function() {
            this.style.color = this.classList.contains('mainlink') ? '#e0501b' : '#000';
            this.style.fontWeight = '600';
        });
    });
});
