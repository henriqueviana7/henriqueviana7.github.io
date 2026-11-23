/* =========================================================
   PORTFÓLIO - Projeto Final
   Arquivo JavaScript principal
   ========================================================= */

// ---------- 1. Menu hambúrguer (celular) ----------
const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");

btnMenu.addEventListener("click", function () {
  btnMenu.classList.toggle("aberto");
  menu.classList.toggle("aberto");
});

// Fecha o menu quando clicar em algum link
const linksMenu = document.querySelectorAll(".menu a");
linksMenu.forEach(function (link) {
  link.addEventListener("click", function () {
    btnMenu.classList.remove("aberto");
    menu.classList.remove("aberto");
  });
});

// ---------- 2. Animação ao rolar a página ----------
// Todo elemento com a classe "animar" aparece suavemente
// quando entra na tela.
const elementosAnimados = document.querySelectorAll(".animar");

const observador = new IntersectionObserver(function (entradas) {
  entradas.forEach(function (entrada) {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("mostrar");
      observador.unobserve(entrada.target); // anima só uma vez
    }
  });
}, { threshold: 0.15 });

elementosAnimados.forEach(function (elemento) {
  observador.observe(elemento);
});

// ---------- 3. Lightbox (ampliar imagens) ----------
// Funciona em qualquer imagem com a classe "abrir-lightbox".
const lightbox = document.querySelector(".lightbox");

if (lightbox) {
  const imagemLightbox = lightbox.querySelector("img");
  const btnFechar = lightbox.querySelector(".lightbox-fechar");
  const imagens = document.querySelectorAll(".abrir-lightbox");

  imagens.forEach(function (imagem) {
    imagem.addEventListener("click", function () {
      imagemLightbox.src = imagem.src;
      imagemLightbox.alt = imagem.alt;
      lightbox.classList.add("ativo");
    });
  });

  function fecharLightbox() {
    lightbox.classList.remove("ativo");
  }

  btnFechar.addEventListener("click", fecharLightbox);

  // Fecha ao clicar fora da imagem
  lightbox.addEventListener("click", function (evento) {
    if (evento.target === lightbox) {
      fecharLightbox();
    }
  });

  // Fecha com a tecla ESC
  document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") {
      fecharLightbox();
    }
  });
}

// ---------- 4. Botão voltar ao topo ----------
const btnTopo = document.querySelector(".btn-topo");

window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    btnTopo.classList.add("visivel");
  } else {
    btnTopo.classList.remove("visivel");
  }
});

btnTopo.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ---------- Extra: ano automático no rodapé ----------
document.querySelector("#ano").textContent = new Date().getFullYear();
