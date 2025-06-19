function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

function toHome(){
    const home = document.querySelector('#logo-image');
    home.addEventListener('click', () => {
        window.location.href = 'index.html';
    })
}

// Call the function after the DOM is loaded
document.addEventListener('DOMContentLoaded', toHome);