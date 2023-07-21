const blob = document.getElementById("blob")

window.onpointermove = event =>{
  const {clientX, clientY} = event
  blob.animate({
    left :  `${clientX}px`,
    top:  `${clientY}px`
    //fill is to not reset the properies at the end
  }, {duration:3000, fill:"forwards"})
}