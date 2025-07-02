function openPopup(name) {
    document.getElementById('popup' + name).style.display = 'block';
}

function closePopup(name) {
    document.getElementById('popup' + name).style.display = 'none';
}

window.addEventListener('click', function(e) {
    const popups = ['popupAzusa', 'popupAiden'];
    popups.forEach(popupId => {
        const popup = document.getElementById(popupId);
        if (e.target === popup) popup.style.display = 'none';
    });
});

