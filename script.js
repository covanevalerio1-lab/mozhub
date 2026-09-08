function pesquisarArtigos() {
    var campo = document.getElementById("campoPesquisa");
    var resultados = document.getElementById("resultados");
    var pesquisa = campo.value.trim().toLowerCase();

    resultados.innerHTML = "";

    if (pesquisa === "") {
        return;
    }

    var encontrados = artigos.filter(function (artigo) {
        var texto = (artigo.titulo + " " + artigo.categoria + " " + artigo.resumo)
            .toLowerCase();
        return texto.indexOf(pesquisa) !== -1;
    });

    if (encontrados.length === 0) {
        var vazio = document.createElement("p");
        vazio.textContent = "Nenhum artigo encontrado. Experimente outra palavra.";
        resultados.appendChild(vazio);
        return;
    }

    encontrados.forEach(function (item) {
        var cartao = document.createElement("article");
        var titulo = document.createElement("h3");
        var categoria = document.createElement("p");
        var resumo = document.createElement("p");
        var link = document.createElement("a");

        titulo.textContent = item.titulo;
        categoria.textContent = item.categoria;
        resumo.textContent = item.resumo;
        link.href = "artigo.html?id=" + encodeURIComponent(item.id);
        link.textContent = "Ler artigo →";

        cartao.appendChild(titulo);
        cartao.appendChild(categoria);
        cartao.appendChild(resumo);
        cartao.appendChild(link);
        resultados.appendChild(cartao);
    });
}

function configurarTema() {
    var botao = document.getElementById("alternarTema");
    if (!botao) {
        return;
    }

    var temaGuardado = localStorage.getItem("mozhub-tema");
    if (temaGuardado === "escuro") {
        document.body.classList.add("tema-escuro");
    }
    botao.setAttribute(
        "aria-label",
        document.body.classList.contains("tema-escuro")
            ? "Ativar modo claro"
            : "Ativar modo escuro"
    );

    botao.addEventListener("click", function () {
        var escuro = document.body.classList.toggle("tema-escuro");
        localStorage.setItem("mozhub-tema", escuro ? "escuro" : "claro");
        botao.setAttribute("aria-label", escuro ? "Ativar modo claro" : "Ativar modo escuro");
    });
}

var botaoPesquisa = document.getElementById("botaoPesquisa");
var campoPesquisa = document.getElementById("campoPesquisa");

if (botaoPesquisa && campoPesquisa) {
    botaoPesquisa.addEventListener("click", pesquisarArtigos);
    campoPesquisa.addEventListener("keydown", function (evento) {
        if (evento.key === "Enter") {
            pesquisarArtigos();
        }
    });
}

configurarTema();