document.addEventListener("DOMContentLoaded", () => {
    console.log("Script carregado. Iniciando busca de componentes...");

    // Caminho absoluto usando o nome do seu repositório
    const baseUrl = '/emanuel-escultor/'; 

    function carregarComponente(url, elementoId) {
        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error(`Erro ${response.status} ao carregar ${url}`);
                return response.text();
            })
            .then(html => {
                const el = document.getElementById(elementoId);
                if (el) {
                    el.innerHTML = html;
                    console.log(`Sucesso: ${elementoId} carregado.`);
                } else {
                    console.error(`Erro: Elemento '${elementoId}' não encontrado no HTML.`);
                }
            })
            .catch(err => console.error("Falha no fetch:", err));
    }

    // Carrega os arquivos
    carregarComponente(baseUrl + 'components/header.html', 'header-placeholder');
    carregarComponente(baseUrl + 'components/footer.html', 'footer-placeholder');
});
