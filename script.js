document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('click', () => {
        const name = member.getAttribute('data-name');
        const role = member.getAttribute('data-role');
        const bio = member.getAttribute('data-bio');

        document.getElementById('modal-name').textContent = name;
        document.getElementById('modal-role').textContent = role;
        document.getElementById('modal-bio').textContent = bio;

        document.getElementById('modal').style.display = 'block';
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
