const input = document.getElementById('input')
const button = document.getElementById('button')
const qrImg = document.getElementById('qrImg')

const link = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='

button.addEventListener('click', generateQR)

function generateQR() {
    if(input.value.length > 0 ){

        let text = input.value;
    
        qrImg.src = link + text;
    
        console.log(qrImg.src);
    }

}