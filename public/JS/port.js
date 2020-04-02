window.onscroll = function() {myFunction()};
const itemA = document.querySelector('.a')
const itemB = document.querySelector('.b')

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    
    if(window.getComputedStyle(itemA).visibility === "visible") {
        itemA.style.visibility = 'hidden'
        itemB.style.visibility = 'visible'
    }
    window.scrollTo(0, 0)
 
  }
}




