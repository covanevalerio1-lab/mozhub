let parametros = new URLSearchParams(window.location.search);

let id = parametros.get("id");

let artigoSelecionado = artigos.find(function(artigo) {
    return artigo.id == id;
});

if (artigoSelecionado) {

    document.getElementById("titulo").innerHTML = artigoSelecionado.titulo;

    document.getElementById("categoria").innerHTML = artigoSelecionado.categoria;

    document.getElementById("conteudo").innerHTML = artigoSelecionado.conteudo;

} else {

    document.getElementById("titulo").innerHTML = "Artigo não encontrado";

    document.getElementById("conteudo").innerHTML =
        "O artigo solicitado não existe.";

}