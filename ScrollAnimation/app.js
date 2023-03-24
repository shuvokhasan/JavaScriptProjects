const boxes = document.querySelectorAll('.box');

document.addEventListener('scroll', boxPosition);

boxPosition();

function boxPosition(){
    let targetPoint = (window.innerHeight / 5) * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < targetPoint){
            box.classList.add('active');
        } 
        else{
            box.classList.remove('active');
        }
    })

    console.log(window.innerHeight, targetPoint);
}