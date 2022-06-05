const btnMobile = document.getElementsByClassName('btn-mobile')
const subUl = document.getElementsByClassName('sub-ul-nav')


function toggleMenu(){
    const nav = document.getElementById('nav')

    nav.classList.toggle('active')
    // for (let i = 0; i < subUl.length; i++) {
    //     subUl[i].classList.toggle('show')
        
    // }
    for (let i = 0; i < subUl.length; i++) {
        if(subUl[i].classList.contains('show-line')){
            subUl[i].classList.remove('show-line')
        }
        
    }

    console.log("btn funcionou")
}

for (let i = 0; i < btnMobile.length; i++) {
    btnMobile[i].addEventListener('click', toggleMenu)
    
}



const subLis = document.querySelectorAll('.li-sub')
for (let i = 0; i < subLis.length; i++) {   

subLis[i].onclick = function(){
    const subList = this.querySelector('.sub-ul-nav')
    if(subList){
        subList.classList.toggle('show-line')
        console.log('tudo ok')
    }
}
}