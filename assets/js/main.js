document.addEventListener("DOMContentLoaded", () => {
    const baseUrl = "https://julioanizio.github.io/emanuel-escultor/";

    fetch(baseUrl + 'components/header.html')
        .then(res => res.text())
        .then(html => {
            document.getElementById('header-placeholder').innerHTML = html;

            const path = window.location.pathname;
            const pagina = path.split("/").pop() || "index.html";

            document.querySelectorAll('.lang-link').forEach(link => {
                const lang = link.textContent.trim().toLowerCase();
                link.href = baseUrl + lang + "/" + pagina;
            });

            // Menu hamburguer
            const btn = document.getElementById("menu-hamburguer");
            const menu = document.getElementById("menu-mobile");
            if (btn && menu) {
                btn.addEventListener("click", () => {
                    btn.classList.toggle("ativo");
                    menu.classList.toggle("ativo");
                });
            }
        })
        .catch(err => console.error("Erro no header:", err));

    fetch(baseUrl + 'components/footer.html')
        .then(res => res.text())
        .then(html => document.getElementById('footer-placeholder').innerHTML = html)
        .catch(err => console.error("Erro no footer:", err));
});