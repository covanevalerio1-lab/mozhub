/* ==========================================
   MOZHUB - JAVASCRIPT PRINCIPAL
   ========================================== */


var conteudos = [
    {
        titulo: "Oportunidades",
        categoria: "Oportunidades",
        resumo: "Empregos, bolsas, estágios, cursos e outras oportunidades, com orientação para pesquisar, candidatar-se e evitar fraudes.",
        palavras: "emprego trabalho bolsa bolsas estágio estagio cursos oportunidades candidatura cv currículo vagas",
        url: "oportunidades.html"
    },

    {
        titulo: "Educação",
        categoria: "Educação",
        resumo: "Como aprender programação do zero, estudar melhor, praticar, criar projetos e desenvolver competências úteis.",
        palavras: "educação educacao estudar estudo programação programacao aprender curso html css javascript competências",
        url: "educacao.html"
    },

    {
        titulo: "Tecnologia & IA",
        categoria: "Tecnologia & IA",
        resumo: "Como usar inteligência artificial e ferramentas digitais para aprender, pesquisar, programar e trabalhar com mais eficiência.",
        palavras: "tecnologia ia inteligência artificial inteligencia artificial chatgpt ai programação programacao pesquisa prompts ferramentas digitais",
        url: "tecnologia-ia.html"
    },

    {
        titulo: "Dinheiro & Negócios",
        categoria: "Dinheiro & Negócios",
        resumo: "Como validar ideias, controlar custos, definir preços, encontrar clientes, vender e cuidar melhor do dinheiro.",
        palavras: "dinheiro negócios negocios empreendedor empreendedorismo empresa vendas clientes preço preco custos lucro marketing finanças financas",
        url: "dinheiro-negocios.html"
    },

    {
        titulo: "Primeiro Emprego",
        categoria: "Primeiro Emprego",
        resumo: "Como construir competências, criar projetos, preparar currículo, candidatar-se e enfrentar entrevistas mesmo sem experiência profissional.",
        palavras: "primeiro emprego emprego trabalho experiência experiencia currículo curriculo cv entrevista entrevistas projetos competências competencias carreira",
        url: "primeiro-emprego.html"
    }
];


function normalizarTexto(texto) {
    return String(texto)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}


function pesquisarArtigos() {
    var campo = document.getElementById("campoPesquisa");
    var resultados = document.getElementById("resultados");

    if (!campo || !resultados) {
        return;
    }

    var pesquisaOriginal = campo.value.trim();
    resultados.innerHTML = "";

    if (pesquisaOriginal === "") {
        return;
    }

    var pesquisa = normalizarTexto(pesquisaOriginal);

    var encontrados = conteudos.filter(function (conteudo) {
        var textoCompleto = normalizarTexto(
            conteudo.titulo + " " +
            conteudo.categoria + " " +
            conteudo.resumo + " " +
            conteudo.palavras
        );

        return textoCompleto.indexOf(pesquisa) !== -1;
    });

    if (encontrados.length === 0) {
        var vazio = document.createElement("article");
        var tituloVazio = document.createElement("h3");
        var mensagemVazia = document.createElement("p");

        tituloVazio.textContent = "Nenhum conteúdo encontrado.";
        mensagemVazia.textContent =
            'Não encontramos resultados para "' +
            pesquisaOriginal +
            '". Experimente outra palavra.';

        vazio.appendChild(tituloVazio);
        vazio.appendChild(mensagemVazia);
        resultados.appendChild(vazio);
        return;
    }

    encontrados.forEach(function (item) {
        var cartao = document.createElement("article");
        var categoria = document.createElement("p");
        var titulo = document.createElement("h3");
        var resumo = document.createElement("p");
        var link = document.createElement("a");

        categoria.textContent = item.categoria;
        titulo.textContent = item.titulo;
        resumo.textContent = item.resumo;
        link.href = item.url;
        link.textContent = "Explorar conteúdo →";

        cartao.appendChild(categoria);
        cartao.appendChild(titulo);
        cartao.appendChild(resumo);
        cartao.appendChild(link);

        resultados.appendChild(cartao);
    });
}


function atualizarEtiquetaTema(botao) {
    var escuro = document.body.classList.contains("tema-escuro");

    botao.setAttribute(
        "aria-label",
        escuro ? "Ativar modo claro" : "Ativar modo escuro"
    );

    botao.setAttribute(
        "title",
        escuro ? "Ativar modo claro" : "Ativar modo escuro"
    );

    botao.textContent = escuro ? "☀️" : "🌙";
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

    atualizarEtiquetaTema(botao);

    botao.addEventListener("click", function () {
        var escuro = document.body.classList.toggle("tema-escuro");

        localStorage.setItem(
            "mozhub-tema",
            escuro ? "escuro" : "claro"
        );

        atualizarEtiquetaTema(botao);
    });
}


document.addEventListener("DOMContentLoaded", function () {
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
});
