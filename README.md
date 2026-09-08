# MozHub

Portal estático com conteúdos sobre oportunidades, educação, tecnologia, inteligência artificial e negócios em Moçambique.

## Publicar com GitHub Pages

### 1. Criar o repositório

1. Entre em [github.com](https://github.com/) e crie um repositório público.
2. Dê um nome simples, por exemplo `mozhub`.
3. Não precisa adicionar README, `.gitignore` ou licença pelo GitHub, porque este projecto já contém o necessário.

### 2. Enviar os ficheiros

Na pasta do projecto, abra o terminal e execute:

```bash
git init
git add .
git commit -m "Publica o MozHub"
git branch -M main
git remote add origin https://github.com/SEU-UTILIZADOR/mozhub.git
git push -u origin main
```

Substitua `SEU-UTILIZADOR` pelo seu nome de utilizador do GitHub.

### 3. Activar o site

No repositório:

1. Abra **Settings**.
2. Entre em **Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**.
4. Seleccione a branch `main` e a pasta `/ (root)`.
5. Clique em **Save**.

Depois de alguns minutos, o site ficará disponível em:

```text
https://SEU-UTILIZADOR.github.io/mozhub/
```

## Estrutura

- `index.html` — página inicial.
- `oportunidades.html`, `educacao.html`, `tecnologia-ia.html` e `dinheiro-negocios.html` — guias principais.
- `artigo.html` — página dinâmica para os artigos do `artigos.js`.
- `style.css` — identidade visual e responsividade.
- `script.js` — pesquisa e modo escuro.
- Ficheiros `.jpg` — imagens utilizadas no site.
- `sitemap.xml` e `robots.txt` — apoio à indexação nos motores de busca.

## Para alcançar mais visitantes

- Publique novos conteúdos regularmente e actualize os artigos existentes.
- Partilhe links directos para cada guia no WhatsApp, Facebook e LinkedIn.
- Registe o site no Google Search Console depois de publicar.
- Adicione um domínio próprio quando o projecto crescer.
- Confirme sempre datas, bolsas, vagas e informações financeiras nas fontes oficiais.
