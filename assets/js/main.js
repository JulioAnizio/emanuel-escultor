document.addEventListener("DOMContentLoaded", () => {
    // 1. Identifica o idioma
    const pathName = window.location.pathname;
    const lang = pathName.includes('/en/') ? 'en' : pathName.includes('/es/') ? 'es' : 'pt';

    // 2. Caminho fixo e seguro: 
    // Como o main.js está em /assets/js/, precisamos subir 2 níveis para a raiz
    const caminhoComponents = '/emanuel-escultor/components/';

    // 3. Injeção Dinâmica
    fetch(`${caminhoComponents}header.html`)
        .then(response => {
            if (!response.ok) throw new Error("Erro ao carregar header");
            return response.text();
        })
        .then(html => {
            document.getElementById('header-placeholder').innerHTML = html;
            marcarLinkAtivo(lang);
        })
        .catch(err => console.error(err));

    fetch(`${caminhoComponents}footer.html`)
        .then(response => {
            if (!response.ok) throw new Error("Erro ao carregar footer");
            return response.text();
        })
        .then(html => {
            document.getElementById('footer-placeholder').innerHTML = html;
        })
        .catch(err => console.error(err));
});

function marcarLinkAtivo(idiomaAtual) {const caminhoComponents = '/emanuel-escultor/components/';
    const paginaAtual = window.location.pathname.split("/").pop() || 'index.html';
    const linksMenu = document.querySelectorAll('.nav-links a');
    
    linksMenu.forEach(link => {
        // Remove a lógica de path se necessário, comparando apenas o nome do arquivo
        if (link.getAttribute('href') === paginaAtual) {
            link.classList.add('active');
        }
    });

    const botaoIdioma = document.getElementById(`lang-${idiomaAtual}`);
    if (botaoIdioma) {
        botaoIdioma.classList.add('active-lang');
    }
}
