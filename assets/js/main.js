document.addEventListener("DOMContentLoaded", () => {
    console.log("Iniciando carregamento...");

    // Esta é a forma mais simples: caminho relativo direto a partir da raiz
    // Como o main.js está em assets/js/, voltamos duas pastas para a raiz
    const prefixo = "../../"; 

    fetch(prefixo + 'components/header.html')
        .then(res => res.text())
        .then(html => document.getElementById('header-placeholder').innerHTML = html)
        .catch(err => console.error("Erro no header:", err));

    fetch(prefixo + 'components/footer.html')
        .then(res => res.text())
        .then(html => document.getElementById('footer-placeholder').innerHTML = html)
        .catch(err => console.error("Erro no footer:", err));
});
