
document.addEventListener('DOMContentLoaded', function() {
    function openTab(evt, tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    document.querySelector('.tab button:first-child').click(); // Open the first tab by default

    fetch('research.json')
        .then(response => response.json())
        .then(data => {
            const researchContainer = document.getElementById('research-container');
            data.publications.forEach(publication => {
                const publicationDiv = document.createElement('li');
                publicationDiv.className = 'publication';
                publicationDiv.innerHTML = `
                    <h3>${publication.title}</h3>
                    <p>${publication.authors}</p>
                    <p>${publication.details}</p>
                    <a href="${publication.link}" target="_blank">Read more</a>
                `;
                researchContainer.appendChild(publicationDiv);
            });
        });
});
