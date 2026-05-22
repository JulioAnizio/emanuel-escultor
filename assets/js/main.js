document.addEventListener("DOMContentLoaded", () => {
    const prefixo = "../../";

    // Detecta o idioma atual pela URL
    const path = window.location.pathname;
    let idiomaAtual = "pt";
    if (path.includes("/en/")) idiomaAtual = "en";
    if (path.includes("/es/")) idiomaAtual = "es";

    fetch(prefixo + 'components/header.html')
        .then(res => res.text())
        .then(html => {
            document.getElementById('header-placeholder').innerHTML = html;

            // Corrige links do seletor de idioma
            const base = "/emanuel-escultor/";
            const pagina = path.split("/").pop() || "index.html";

            document.querySelector(`a[href="index.html"].lang-link`)?.setAttribute("href", `${base}pt/${pagina}`);
            document.querySelector(`a[href="../en/index.html"].lang-link`)?.setAttribute("href", `${base}en/${pagina}`);
            document.querySelector(`a[href="../es/index.html"].lang-link`)?.setAttribute("href", `${base}es/${pagina}`);
        })
        .catch(err => console.error("Erro no header:", err));

    fetch(prefixo + 'components/footer.html')
        .then(res => res.text())
        .then(html => document.getElementById('footer-placeholder').innerHTML = html)
        .catch(err => console.error("Erro no footer:", err));
});
