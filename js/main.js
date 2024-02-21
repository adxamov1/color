elInp = document.querySelector('.inp')

function fn(){
    var vel = elInp.value
    if(vel % 2 == 0){
        elInp.classList.add('juft')
        elInp.classList.remove('toq')
    }else{
        elInp.classList.add('toq')
        elInp.classList.remove('juft')
    }
}