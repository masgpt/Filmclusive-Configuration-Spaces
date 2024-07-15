
/* scripts.js */
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('active');
}

function saveSpaceSettings() {
    // Implement saving logic here
    alert('Settings saved successfully!');
}

function deleteSpace() {
    // Implement delete logic here
    if (confirm('Are you sure you want to delete this space?')) {
        alert('Space deleted successfully!');
    }
}
