const galleryPhotos = document.querySelectorAll('.gallery-photo');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const currentPageSpan = document.getElementById('current-page');
const totalPagesSpan = document.getElementById('total-pages');

let currentPhotoIndex = 0;

function showPhoto(index) {
    galleryPhotos.forEach((photo, idx) => {
        if (idx === index) {
            photo.style.display = 'block';
        } else {
            photo.style.display = 'none';
        }
    });

    const formattedIndex = (index + 1).toString().padStart(2, '0'); 
    currentPageSpan.textContent = formattedIndex;
}

prevButton.addEventListener('click', () => {
    currentPhotoIndex = (currentPhotoIndex - 1 + galleryPhotos.length) % galleryPhotos.length;
    showPhoto(currentPhotoIndex);
});

nextButton.addEventListener('click', () => {
    currentPhotoIndex = (currentPhotoIndex + 1) % galleryPhotos.length;
    showPhoto(currentPhotoIndex);
});

totalPagesSpan.textContent = galleryPhotos.length.toString().padStart(2, '0'); 
showPhoto(currentPhotoIndex);