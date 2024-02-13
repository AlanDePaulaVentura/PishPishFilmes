function pesquisar(event) {
    event.preventDefault();
    var termoPesquisa = document.querySelector('input[type="search"]').value.toLowerCase();
    var resultados = [];

    // Filtra os filmes que correspondem ao termo de pesquisa
    resultados = filmes.filter(function(filme) {
        return filme.titulo.toLowerCase().includes(termoPesquisa);
    });

    // Limpa a lista de resultados
    var listaResultados = document.getElementById('listaResultados');
    listaResultados.innerHTML = '';

    // Insere os resultados na lista
    resultados.forEach(function(resultado) {
        var li = document.createElement('li');
        li.innerHTML = '<a href="' + resultado.link + '" target="_blank" rel="noopener noreferrer"><img src="' + resultado.imagem + '" alt="' + resultado.titulo + '"></a>';
        listaResultados.appendChild(li);
    });

    // Exibe os resultados
    document.getElementById('resultados').style.display = 'block';
}
var filmes = [
    { titulo: 'O Mundo Depois de Nós', imagem: 'img/O Mundo Depois de Nós.jpg' },
    { titulo: 'Interestelar',link: 'https://embedder.net/e/tt0816692', imagem: 'img/Interestelar.jpg' },
    { titulo: 'Guardiões da Galáxia Vol. 3', imagem: 'img/Guardiões da Galáxia Vol. 3.jpg' },
    { titulo: 'Túmulo dos Vagalumes',link:'https://archive.org/download/tumulo-dos-vagalumes-1988/T%C3%BAmulo%20dos%20Vagalumes%20%281988%29.ia.mp4', imagem: 'img/Tumulo dos Vagalumes.jpg' },
    { titulo: 'Até o Último Homem',link: 'https://embedder.net/e/tt2119532', imagem: 'img/Até o Último Homem.jpg' },
    { titulo: 'Homem-Aranha no Aranhaverso', imagem: 'img/Homem aranha no Aranha Verso.jpg' },
    { titulo: 'Rocky Um Lutador', imagem: 'img/Rocky Um Lutador.jpg' },
    { titulo: 'Rocky 2 - A Revanche', imagem: 'img/Rocky 2 - A Revanche.jpg' },
    { titulo: 'Rocky 3 - Desafio Supremo', imagem: 'img/Rocky 3 - Desafio Supremo.jpg' },
    { titulo: 'Rocky 4', imagem: 'img/Rocky 4.jpg' },
    { titulo: 'Rocky 5', imagem: 'img/Rocky 5.jpg' },
    { titulo: 'Rocky Balboa', imagem: 'img/Rocky Balboa.jpg' },
    { titulo: 'Duna',link: 'https://embedder.net/e/tt1160419', imagem: 'img/Duna.jpg' },
    { titulo: 'Camaleões',link: 'https://embedder.net/e/tt13274016', imagem: 'img/Camaleões.jpg' },
    { titulo: 'Wonka', imagem: 'img/Wonka.jpg' },
    { titulo: 'Moonfall',link: 'https://embedder.net/e/tt5834426', imagem: 'img/Moonfall.jpg' },
    { titulo: 'A Guerra do Amanhã',link: 'https://embedder.net/e/tt9777666', imagem: 'img/A Guerra do Amanhã.jpg' },
    { titulo: 'A Sociedade da Neve',link: 'https://embedder.net/e/tt16277242', imagem: 'img/A Sociedade da neve.jpg' },
    { titulo: 'O Vendedor de Passados', imagem: 'img/O Vendedor de Passados.jpg' },
    { titulo: 'Wall-E',link: 'https://embedder.net/e/movie?imdb=tt0910970', imagem: 'img/Wall-E.jpg' }
    // Adicione mais filmes conforme necessário
];
