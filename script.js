const btn = document.querySelector(".btn");
const sectionText = document.querySelector('.section-text')


function toSpin() {
  const roleta = document.querySelector(".roleta");

  function spinning() {
    roleta.classList.add("spin");
    setTimeout(function () {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) =>{
        section.classList.remove('ativo')
        sectionText.classList.add('ativo')
        const link = sectionText.querySelector('a')
        link.href = 'https://sshortly.net/dlspSo'
      })
    }, 3000);
  }

  btn.addEventListener("click", spinning);
}
toSpin();

