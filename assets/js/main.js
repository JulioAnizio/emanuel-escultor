document.addEventListener("DOMContentLoaded", () => {
    // 1. Identifica o idioma e onde estamos
    const pathName = window.location.pathname;
    const isRoot = pathName === '/' || pathName.endsWith('index.html') || pathName === '/emanuel-escultor/' || pathName === '/emanuel-escultor/index.html';
    
    const lang = pathName.includes('/en/') ? 'en' : pathName.includes('/es/') ? 'es' : 'pt';

    // 2. Define o prefixo dinamicamente: se for raiz, usa 'components/', se for pasta, usa '../components/'
    const prefixoComponente = isRoot ? 'components/' : '../components/';

    // 3. Injeção Dinâmica
    fetch(`${prefixoComponente}header.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById('header-placeholder').innerHTML = html;
            marcarLinkAtivo(lang);
        });

    fetch(`${prefixoComponente}footer.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer-placeholder').innerHTML = html;
        });
});

function marcarLinkAtivo(idiomaAtual) {
    const paginaAtual = window.location.pathname.split("/").pop() || 'index.html';
    const linksMenu = document.querySelectorAll('.nav-links a');
    linksMenu.forEach(link => {
        if (link.getAttribute('href') === paginaAtual) {
            link.classList.add('active');
        }
    });

    const botaoIdioma = document.getElementById(`lang-${idiomaAtual}`);
    if (botaoIdioma) {
        botaoIdioma.classList.add('active-lang');
    }
}
