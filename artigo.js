let parametros = new URLSearchParams(window.location.search);

let id = parametros.get("id");

let artigoSelecionado = artigos.find(function(artigo) {
    return artigo.id == id;
});


if (artigoSelecionado) {

    document.getElementById("titulo").innerHTML =
        artigoSelecionado.titulo;

    document.getElementById("categoria").innerHTML =
        artigoSelecionado.categoria;

    document.getElementById("resumo").innerHTML =
        artigoSelecionado.resumo;

    document.getElementById("conteudo").innerHTML =
        artigoSelecionado.conteudo;


    if (artigoSelecionado.imagem) {

        let imagem = document.getElementById("imagemArtigo");

        imagem.src = artigoSelecionado.imagem;

        imagem.alt = artigoSelecionado.titulo;

    }

} else {

    document.getElementById("titulo").innerHTML =
        "Artigo não encontrado";

    document.getElementById("resumo").innerHTML =
        "";

    document.getElementById("conteudo").innerHTML =
        "<p>O artigo solicitado não existe.</p>";

}