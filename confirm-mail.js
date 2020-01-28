var mailOv = document.getElementById('check-mail-overlay');
var mailBtn = document.getElementById('mailBtn');
var closeMailOv = document.getElementById('close');
var resendBtn = document.getElementById('resend');


// mailBtn.addEventListener('submit', (e) => {
//     mailOv.style.display = 'block';
//     e.preventDefault;
// });

closeMailOv.addEventListener('click', () => {
    mailOv.style.display = 'none';
})

resendBtn.addEventListener('click', () => {
    resendBtn.style.cursor = 'wait';
    setTimeout(pointCursor, 3000)
})

pointCursor = () => {
    resendBtn.style.cursor = 'auto';

}

function evtSubmit(e) {
    mailOv.style.display = 'block';
    e.preventDefault();
};

var myform = document.getElementById('myform');
myform.setAttribute('action', 'javascript:evtSubmit();');



