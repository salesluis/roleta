const btn = document.querySelector(".btn");
const sectionText = document.querySelector(".section-text");

  function spinning() {
    const roleta = document.querySelector(".roleta");
    roleta.classList.add("spin");
    const audio = document.querySelector("audio");
    audio.play();
    setTimeout(function () {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        section.classList.remove("ativo");
        sectionText.classList.add("ativo");
        const link = sectionText.querySelector("a");
        link.href = "https://sshortly.net/dlspSo";
      });
    }, 9400);
    setTimeout(function(){
      const btnText = document.querySelector('.btn-text')
      btnText.classList.add('ativo')
    }, 13000)
  }

  btn.addEventListener("click", spinning);
