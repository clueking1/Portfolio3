window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.nodeType.scrollTop = 0
 
  }
}