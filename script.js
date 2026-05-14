javascript
// Кнопка "Читать далее"
const readMoreBtn = document.getElementById('readMoreBtn');
const extraText = document.getElementById('extraText');

readMoreBtn.addEventListener('click', function() {
    if (extraText.style.display === 'none') {
        extraText.style.display = 'block';
        readMoreBtn.textContent = '📖 Свернуть';
    } else {
        extraText.style.display = 'none';
        readMoreBtn.textContent = '📖 Читать далее';
    }
});

// Счётчик лайков
let likeCount = localStorage.getItem('likes');
if (likeCount === null) likeCount = 0;
else likeCount = Number(likeCount);

document.getElementById('likeCount').textContent = likeCount;

document.getElementById('likeBtn').addEventListener('click', function() {
    likeCount++;
    document.getElementById('likeCount').textContent = likeCount;
    localStorage.setItem('likes', likeCount);
});
