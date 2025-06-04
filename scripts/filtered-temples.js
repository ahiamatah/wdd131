
function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}





// add event listeners to nav links
// Helper functions
function isOld(temple) {
    return new Date(temple.dedicated).getFullYear() < 1900;
}
function isNew(temple) {
    return new Date(temple.dedicated).getFullYear() > 2000;
}
function isLarge(temple) {
    return temple.area > 90000;
}
function isSmall(temple) {
    return temple.area < 10000;
}

// Event binding
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (event) => {
        const filter = event.target.textContent.trim().toLowerCase();

        switch (filter) {
            case "home":
                displayTemples(temples);
                break;
            case "old":
                displayTemples(temples.filter(isOld));
                break;
            case "new":
                displayTemples(temples.filter(isNew));
                break;
            case "large":
                displayTemples(temples.filter(isLarge));
                break;
            case "small":
                displayTemples(temples.filter(isSmall));
                break;
        }
    });
});