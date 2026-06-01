// Navigation between screens
function showScreen(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show selected screen
    document.getElementById(screenId).classList.add('active');
}

function goToMemories() {
    showScreen('memories');
}

function goToPhotos() {
    showScreen('photos');
}

function goToMessages() {
    showScreen('messages');
}

function goToFinal() {
    showScreen('final');
}

function restart() {
    showScreen('intro');
}

// Add smooth scrolling for timeline
document.addEventListener('DOMContentLoaded', function() {
    console.log('Birthday website loaded! 🎉');
});