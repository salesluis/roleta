
function toSpin() {
  const btn = document.querySelector(".btn");
  const roleta = document.querySelector(".roleta");

  function spinning(){
    roleta.classList.add('spin')
  }
  
  btn.addEventListener('click', spinning)
}
toSpin()


