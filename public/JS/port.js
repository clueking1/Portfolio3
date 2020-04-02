window.onscroll = function() {myFunction()};
const itemA = document.querySelector('.a')
const itemB = document.querySelector('.b')
const itemC = document.querySelector('.c')
const itemD = document.querySelector('.d')
const itemE = document.querySelector('.e')
const itemF = document.querySelector('.f')
const itemG = document.querySelector('.g')

const item1 = document.querySelector('.one')
const item2 = document.querySelector('.two')
const item3 = document.querySelector('.three')
const item4 = document.querySelector('.four')
const item5 = document.querySelector('.five')
const item6 = document.querySelector('.six')
const item7 = document.querySelector('.seven')

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    
    if(window.getComputedStyle(itemA).opacity === "1") {
        itemA.style.opacity = '0'
        itemB.style.opacity = '1'

        item1.style.backgroundColor = '#bbb'
        item2.style.backgroundColor = '#474747'

    } else if (window.getComputedStyle(itemB).opacity=== "1") {
        itemB.style.opacity= '0'
        itemC.style.opacity= '1'

        item2.style.backgroundColor = '#bbb'
        item3.style.backgroundColor = '#474747'

    } else if (window.getComputedStyle(itemC).opacity=== "1") {
        itemC.style.opacity= '0'
        itemD.style.opacity= '1'


        item3.style.backgroundColor = '#bbb'
        item4.style.backgroundColor = '#474747'        

    } else if (window.getComputedStyle(itemD).opacity=== "1") {
        itemD.style.opacity= '0'
        itemE.style.opacity= '1'

        item4.style.backgroundColor = '#bbb'
        item5.style.backgroundColor = '#474747'

    } else if (window.getComputedStyle(itemE).opacity=== "1") {
        itemE.style.opacity= '0'
        itemF.style.opacity= '1'

        item5.style.backgroundColor = '#bbb'
        item6.style.backgroundColor = '#474747'

    } else if (window.getComputedStyle(itemF).opacity=== "1") {
        itemF.style.opacity= '0'
        itemG.style.opacity= '1'

        item6.style.backgroundColor = '#bbb'
        item7.style.backgroundColor = '#474747'

    } else {
        itemG.style.opacity= '0'
        itemA.style.opacity= '1'

        item7.style.backgroundColor = '#bbb'
        item1.style.backgroundColor = '#474747'

    }
    window.scrollTo(0, 0)
 
  }
}




