document.addEventListener("DOMContentLoaded", () => {
    const prefixo = "../../";
    const baseUrl = "https://julioanizio.github.io/emanuel-escultor/";

    fetch(prefixo + 'components/header.html')
        .then(res => res.text())
        .then(html => {
            document.getElementById('header-placeholder').innerHTML = html;

            const path = window.location.pathname;
            const pagina = path.split("/").pop() || "index.html";

            document.querySelectorAll('.lang-link').forEach(link => {
                const lang = link.textContent.trim().toLowerCase();
                console.log("lang:", lang, "href será:", baseUrl + lang + "/" + pagina);
                link.href = baseUrl + lang + "/" + pagina;
            });
        })
        .catch(err => console.error("Erro no header:", err));

    fetch(prefixo + 'components/footer.html')
        .then(res => res.text())
        .then(html => document.getElementById('footer-placeholder').innerHTML = html)
        .catch(err => console.error("Erro no footer:", err));
});