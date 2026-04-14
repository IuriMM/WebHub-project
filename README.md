# WebHub Project

Landing page institucional da WebHub com foco em design visual, animações com GSAP e cena 3D com Three.js.

## Visao geral

O projeto e uma pagina estatica (sem backend) composta por:
- Secao hero com videos e CTA.
- Transicoes animadas por scroll com GSAP + ScrollTrigger.
- Animacao de textos com SplitText.
- Secao de destaques com modelo 3D de diamante em Three.js (arquivo GLB), com rotacao continua via JavaScript.
- Rodape com composicao visual e chamadas de conversao.

## Stack atual

- HTML5
- CSS3
- SCSS (fonte de estilos em `scss/styles.scss`)
- JavaScript ES Modules
- GSAP (CDN)
  - ScrollTrigger
  - ScrollSmoother
  - SplitText
- Three.js (CDN via importmap)
- GLTFLoader (Three examples)

## Estrutura de arquivos

- `index.html`: estrutura principal da pagina.
- `styles.css`: estilos compilados e utilizados no HTML.
- `scss/styles.scss`: fonte SCSS dos estilos.
- `script.js`: animacoes de scroll, videos e renderizacao/animacao do diamante 3D.
- `img/`: imagens, videos e modelo 3D (`diamond-compressed.glb`).
- `fonts/`: arquivos de fonte locais.

## Como rodar localmente

Como o projeto usa modulos ES e importmap, rode com servidor local.

1. Abra a pasta do projeto.
2. Inicie um servidor HTTP local (qualquer um dos exemplos):

```bash
# Python 3
python -m http.server 5500

# ou Node (serve)
npx serve .
```

3. Acesse no navegador:

- `http://localhost:5500` (Python)
- ou a URL exibida pelo `serve`

## Observacoes importantes

- O `index.html` ja carrega GSAP e plugins via CDN.
- O Three.js e importado via `importmap`.
- A animacao do diamante e aplicada em `script.js` dentro do loop de render (`animate`), com rotacao continua no eixo Y e leve oscilacao no eixo X.
- Para manter consistencia, alteracoes de estilo devem priorizar `scss/styles.scss` e depois recompilar para `styles.css`.

## Proximos passos sugeridos

- Ajustar responsividade para telas menores (tipografia e espacamentos).
- Organizar pipeline de build para SCSS (ex.: Vite ou script npm com Sass).
- Melhorar acessibilidade (alt text, contrastes e foco de teclado).
- Adicionar SEO basico (meta tags Open Graph, descricao e favicon variants).
