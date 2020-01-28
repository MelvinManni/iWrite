var saveBtn = document.getElementById('save');
var saveOv = document.getElementById('sent-overlay');


// saveBtn.addEventListener('click', (e) => {
//     saveOv.style.display = 'block';
//     setTimeout(closeOv, 2700)
//     e.preventDefault;
// });

function evtSubmit(e) {
    saveOv.style.display = 'block';
    setTimeout(closeOv, 2700)
    e.preventDefault();
};


var myform = document.getElementById('myform');
myform.setAttribute('action', 'javascript:evtSubmit();');

closeOv = () => {
    saveOv.style.display = 'none';
}



