document.addEventListener("DOMContentLoaded", function() {
    // Function to load research publications dynamically
    fetch('research.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('research-container');
            data.publications.forEach(pub => {
                const div = document.createElement('div');
                div.classList.add('publication');
                div.innerHTML = `
                    <h3>${pub.title}</h3>
                    <p><strong>Authors:</strong> ${pub.authors}</p>
                    <p>${pub.details}</p>
                    <a href="${pub.link}" target="_blank">Read more</a>
                `;
                container.appendChild(div);
            });
        });

    // Smooth scrolling for navbar links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 50, // Adjust this offset as needed
                behavior: 'smooth'
            });
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Show the first tab content by default
    if (window.location.hash) {
        document.querySelector(window.location.hash).style.opacity = 1;
    } else {
        document.querySelector('.tabcontent').style.opacity = 1;
    }
});
