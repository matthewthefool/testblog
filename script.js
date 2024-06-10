function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.opacity = '0';
        setTimeout(() => {
            tabcontent[i].style.height = '0';
        }, 500); // Wait for the fade out to finish
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    setTimeout(() => {
        document.getElementById(tabName).style.height = 'auto';
        document.getElementById(tabName).style.opacity = '1';
    }, 500); // Delay to allow other content to fade out first

    evt.currentTarget.className += " active";
}
