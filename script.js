const btn = document.querySelector(".btn");

function toSpin() {
  const roleta = document.querySelector(".roleta");

  function spinning() {
    roleta.classList.add("spin");
    setTimeout(function () {
      const link = btn.querySelector('.link');
      link.innerHTML = 'pegue já seu bônus';
      link.href = 'https://sshortly.net/dlspSo'
    }, 3000);
  }

  btn.addEventListener("click", spinning);
}
toSpin();
