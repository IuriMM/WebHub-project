# WebHub-project

Landing page da equipe WebHub com foco em UI/UX, performance visual e animações.

## Estrutura de arquivos

```text
/
├── index.html
├── README.md
└── assets
    ├── css
    │   ├── styles.scss
    │   ├── styles.css
    │   └── styles.css.map
    ├── js
    │   └── script.js
    ├── img
    │   ├── imagens (.webp)
    │   ├── vídeos (.mp4)
    │   ├── ícones (.svg)
    │   └── modelos 3D (.glb)
    └── fonts
        └── fontes ClashDisplay (.ttf)
```

## Seções da página

- **Header:** identidade da marca (nome e logotipo).
- **Hero:** mensagem principal, fundo visual e CTA inicial.
- **Transição:** bloco de destaque com animação durante o scroll.
- **Projetos Recentes:** vitrine com cards/imagens de projetos.
- **Ideais:** seção com animações de texto e objeto 3D.
- **Footer:** reforço de proposta de valor e CTAs finais.

## Tecnologias usadas

- **HTML5:** estrutura semântica da landing page.
- **SCSS/CSS3:** estilização e organização dos estilos.
- **JavaScript (ES Modules):** comportamento e integração das animações.
- **GSAP (ScrollTrigger, ScrollSmoother, SplitText):** animações de entrada, scroll e texto.
- **Three.js + GLTFLoader:** renderização do modelo 3D no canvas.
- **CDN (jsDelivr):** carregamento de bibliotecas externas.
