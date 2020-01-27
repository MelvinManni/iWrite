var saveBtn = document.getElementById('save');
var saveOv = document.getElementById('sent-overlay');


saveBtn.addEventListener('click', (e) => {
    saveOv.style.display = 'block';
    setTimeout(closeOv, 2700)
    e.preventDefault;
});

closeOv = () => {
    saveOv.style.display = 'none';
}