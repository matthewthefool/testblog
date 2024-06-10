document.addEventListener("DOMContentLoaded", function() {
    // Function to open tabs
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

    // Open the "About" tab by default
    document.getElementsByClassName("tablinks")[0].click();

    // Function to load research items
    function loadResearchItems() {
        const researchContainer = document.querySelector('.research-container');

        // Clear existing research items
        researchContainer.innerHTML = '';

        // Add background tile
        const backgroundTile = document.createElement('div');
        backgroundTile.classList.add('research-item-background');
        researchContainer.appendChild(backgroundTile);
    }

    // Load research items on page load
    loadResearchItems();
});
