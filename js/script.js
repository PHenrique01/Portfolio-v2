function menuAnimacao() {
  const menuLink = document.querySelectorAll("#header-menu a");

  menuLink.forEach((link) => {
    const menuUrl = window.location.href;
    const menuHref = link.href;

    if (menuUrl.includes(menuHref)) {
      link.classList.add("ativo");
    }
    console.log(link);
  });
}

menuAnimacao();
new SimpleAnime();