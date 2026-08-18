function pesquisarArtigos() {

    var campo = document.getElementById("campoPesquisa");
    var resultados = document.getElementById("resultados");

    var pesquisa = campo.value.toLowerCase();

    resultados.innerHTML = "";

    if (pesquisa === "") {
        resultados.innerHTML = "<p>Digite algo para pesquisar.</p>";
        return;
    }

    var encontrados = [];

    for (var i = 0; i < artigos.length; i++) {

        var artigo = artigos[i];

        var titulo = artigo.titulo.toLowerCase();
        var categoria = artigo.categoria.toLowerCase();
        var resumo = artigo.resumo.toLowerCase();

        if (
            titulo.indexOf(pesquisa) !== -1 ||
            categoria.indexOf(pesquisa) !== -1 ||
            resumo.indexOf(pesquisa) !== -1
        ) {
            encontrados.push(artigo);
        }
    }

    if (encontrados.length === 0) {
        resultados.innerHTML = "<p>Nenhum artigo encontrado.</p>";
        return;
    }

    for (var j = 0; j < encontrados.length; j++) {

        var item = encontrados[j];

        resultados.innerHTML +=
            "<article>" +
                "<h3>" + item.titulo + "</h3>" +
                "<p>" + item.categoria + "</p>" +
                "<p>" + item.resumo + "</p>" +
                "<a href='artigo.html?id=" + item.id + "'>Ler artigo →</a>" +
            "</article>";
    }
}