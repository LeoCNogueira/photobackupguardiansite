// Escolha de idioma das páginas: português para quem usa o navegador em português, inglês para o resto.
// A escolha manual fica guardada neste navegador. Sem JavaScript, os dois idiomas aparecem.
(function () {
  var saved = null;
  try { saved = localStorage.getItem("pbg-lang"); } catch (e) {}
  var browser = (navigator.language || "en").toLowerCase().indexOf("pt") === 0 ? "pt" : "en";
  apply(saved || browser);

  document.addEventListener("click", function (event) {
    var button = event.target.closest("[data-set-lang]");
    if (!button) return;
    var lang = button.getAttribute("data-set-lang");
    try { localStorage.setItem("pbg-lang", lang); } catch (e) {}
    apply(lang);
  });

  function apply(lang) {
    document.body.classList.remove("lang-en", "lang-pt");
    document.body.classList.add("lang-" + lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    var buttons = document.querySelectorAll("[data-set-lang]");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", String(buttons[i].getAttribute("data-set-lang") === lang));
    }
  }
})();
