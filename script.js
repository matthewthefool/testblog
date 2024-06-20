document.addEventListener('DOMContentLoaded', () => {
    // Load research items
    fetch('research.json')
        .then(response => response.json())
        .then(data => {
            const researchContainer = document.querySelector('.research-container');
            data.publications.forEach(publication => {
                const researchItem = document.createElement('div');
                researchItem.classList.add('research-item');
                researchItem.innerHTML = `
                    <img src="${publication.image}" alt="${publication.title}">
                    <div class="research-item-content">
                        <h3>${publication.title}</h3>
                        <p>${publication.details}</p>
                        <a href="${publication.link}" target="_blank">Read more</a>
                    </div>
                `;
                researchContainer.appendChild(researchItem);
            });
        })
        .catch(error => console.error('Error fetching research items:', error));

    // Load posts
    fetch('posts.json')
        .then(response => response.json())
        .then(data => {
            const postsContainer = document.querySelector('.posts-container');
            data.posts.forEach(post => {
                const postItem = document.createElement('div');
                postItem.classList.add('post-item');
                postItem.innerHTML = `
                    <img src="${post.image}" alt="${post.title}">
                    <div class="post-item-content">
                        <h3>${post.title}</h3>
                        <p>${post.content}</p>
                    </div>
                `;
                postsContainer.appendChild(postItem);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Set the default tab to be opened
document.getElementById("About").style.display = "block";
document.querySelector(".tablinks").className += " active";
