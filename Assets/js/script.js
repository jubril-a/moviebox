let hearts = document.querySelectorAll(".heart-wrapper");

for (let heart of hearts) {
    heart.addEventListener('click', () => {
        if (heart.classList.contains('clicked')) {
            heart.classList.remove('clicked');
        } else {
            heart.classList.add('clicked');
        }
    })
}