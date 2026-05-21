/**
 * Emanuel Nunes - Core Navigation & Component Loader
 * Sistema global de injeção dinâmica de componentes assíncronos
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Identifica o idioma atual com base na pasta (pt, en ou es)
    const pathArray = window.location.pathname.split('/');
    // Pega a pasta que antecede o arquivo para saber o idioma
    const lang = pathArray.includes('en') ? 'en' : pathArray.includes('es') ? 'es' : 'pt';

    // 2. Caminho relativo correto para alcançar a pasta components
    // Se estivermos dentro de uma subpasta de idioma, precisamos subir um nível (../)
    const prefixoComponente = '../components/';

    // 3. Injeção Dinâmica do Header Global
    fetch(`${prefixoComponente}header.html`)
        .then(response => {
            if (!response.ok) throw new Error("Falha ao carregar o header institucional.");
            return response.text();
        })
        .then(html => {
            document.getElementById('header-placeholder').innerHTML = html;
            marcarLinkAtivo(lang);
        })
        .catch(error => console.error("Erro crítico no carregamento do cabeçalho:", error));

    // 4. Injeção Dinâmica do Footer Global
    fetch(`${prefixoComponente}footer.html`)
        .then(response => {
            if (!response.ok) throw new Error("Falha ao carregar o footer institucional.");
            return response.text();
        })
        .then(html => {
            document.getElementById('footer-placeholder').innerHTML = html;
        })
        .catch(error => console.error("Erro crítico no carregamento do rodapé:", error));
});

/**
 * Gerencia as classes utilitárias de estilo para links ativos e seletores de idioma
 */
function marcarLinkAtivo(idiomaAtual) {
    // Extrai o nome do arquivo atual (ex: index.html, obras.html)
    const paginaAtual = window.location.pathname.split("/").pop() || 'index.html';
    
    // Procura todos os links de navegação dentro do header injetado
    const linksMenu = document.querySelectorAll('.nav-links a');
    linksMenu.forEach(link => {
        if (link.getAttribute('href') === paginaAtual) {
            link.classList.add('active');
        }
    });

    // Marca visualmente o botão do idioma correto no seletor de linguagem
    const botaoIdioma = document.getElementById(`lang-${idiomaAtual}`);
    if (botaoIdioma) {
        botaoIdioma.classList.add('active-lang');
    }
}
