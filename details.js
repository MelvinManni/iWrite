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


let image = document.getElementById('output');
let cancel = document.getElementById('cancel');

var loadFile = function (event) {
    image.style.display = 'block';
    image.src = URL.createObjectURL(event.target.files[0]);
    document.getElementById('default').style.display = 'none';
    document.getElementById('upload-text').innerHTML = 'Change Image';
    cancel.style.visibility = 'visible';
};

cancel.addEventListener('click', ()=>{
    image.src = '';
    image.style.display = 'none';
    document.getElementById('default').style.display = 'block';
    document.getElementById('upload-text').innerHTML = 'Upload Image';
    cancel.style.visibility = 'collapse'

})