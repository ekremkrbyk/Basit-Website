// scripts.js

// Modal gösterme işlevi
function openModal(modalId) {
    document.getElementById('modalBackground').style.display = 'block';
    document.getElementById(modalId).style.display = 'block';
}

// Modal kapama işlevi
function closeModal(modalId) {
    document.getElementById('modalBackground').style.display = 'none';
    document.getElementById(modalId).style.display = 'none';
}

// Butonlara tıklama olaylarını ekleyelim
document.getElementById('loginBtn').onclick = function() {
    openModal('loginModal');
};

document.getElementById('signupBtn').onclick = function() {
    openModal('signupModal');
};

// Modal dışına tıklayınca kapatma
window.onclick = function(event) {
    if (event.target == document.getElementById('modalBackground')) {
        closeModal('loginModal');
        closeModal('signupModal');
    }
};
