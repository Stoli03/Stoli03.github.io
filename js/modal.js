function openModal(id) {
    const modal = document.getElementById(id);
    if(modal) modal.style.display = "flex"; // flex für Zentrierung
}

function closeModal() {
    document.querySelectorAll(".modal").forEach(modal => modal.style.display = "none");
}

window.addEventListener("click", function(event) {
    document.querySelectorAll(".modal").forEach(modal => {
        if(event.target === modal) modal.style.display = "none";
    });
});