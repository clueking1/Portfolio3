window.onscroll = function() {myFunction()};
const itemA = document.querySelector('.a')
const itemB = document.querySelector('.b')
const itemC = document.querySelector('.c')
const itemD = document.querySelector('.d')
const itemE = document.querySelector('.e')
const itemF = document.querySelector('.f')
const itemG = document.querySelector('.g')

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    
    if(window.getComputedStyle(itemA).visibility === "visible") {
        itemA.style.visibility = 'hidden'
        itemB.style.visibility = 'visible'
    } else if (window.getComputedStyle(itemB).visibility === "visible") {
        itemB.style.visibility = 'hidden'
        itemC.style.visibility = 'visible'
    } else if (window.getComputedStyle(itemC).visibility === "visible") {
        itemC.style.visibility = 'hidden'
        itemD.style.visibility = 'visible'
    } else if (window.getComputedStyle(itemD).visibility === "visible") {
        itemD.style.visibility = 'hidden'
        itemE.style.visibility = 'visible'
    } else if (window.getComputedStyle(itemE).visibility === "visible") {
        itemE.style.visibility = 'hidden'
        itemF.style.visibility = 'visible'
    } else if (window.getComputedStyle(itemF).visibility === "visible") {
        itemF.style.visibility = 'hidden'
        itemG.style.visibility = 'visible'
    } else {
        itemG.style.visibility = 'hidden'
        itemA.style.visibility = 'visible'
    }
    window.scrollTo(0, 0)
 
  }
}




