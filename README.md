# Produção de Camarão

Site institucional em React, Vite e Lucide. Três páginas: Início, Quem Somos e Produtos.

## Executar

```sh
npm install
npm run dev
```

## Compilar

```sh
npm run build
npm run preview
```

O servidor de produção deve encaminhar `/quem-somos` e `/produtos` para `index.html`.

## Organização

- `src/pages`: páginas completas Home, About e Products.
- `src/components`: cabeçalho, rodapé, navegação, cartões, modal e seções editoriais compartilhadas.
- `src/data/content.js`: imagens, catálogo, etapas e perguntas frequentes.
- `src/styles.css`: estilo e adaptação para celular.
- `public/images`: dezesseis fotografias ilustrativas geradas com IA, otimizadas em JPEG.
- `output/imagegen`: originais PNG e prompts finais.

Nome, história institucional, instalações e catálogo são demonstrativos. Não há dados oficiais de contato, certificações ou condições comerciais. Validar esses conteúdos antes da publicação. As fontes usam Google Fonts; imagens são servidas localmente.

## Referências consultadas

Camanor: início, empresa, produtos inteiro, sem cabeça e tail off. Aquatec: início, história, nossa força, produtos e contato. Camarão do Sol: início, indústria, produtos, atendimento a empresas, sobre, contato e páginas de petiscos. A estrutura foi usada como referência; o texto e as imagens são próprios. Algumas páginas das referências não puderam ser carregadas na consulta.



## Contato

Os contatos fictícios autorizados pelo usuário estão centralizados em `src/data/contact.js`. O telefone +55 (00) 00000-0000 e o e-mail com domínio `.invalid` são demonstrativos e não recebem atendimento. Substituir pelos dados oficiais antes da publicação. O botão flutuante de WhatsApp aparece globalmente e a seção de contato está em `/#contato`.

## Rotas e catálogo

Navegação com React Router DOM: BrowserRouter, Routes, Route e Link. Rotas `/`, `/quem-somos`, `/produtos` e fallback de página não encontrada. O componente RouteEffects cuida de título, foco e rolagem para âncoras como `/#contato`. Não há mais navegação manual com pushState.

Catálogo demonstrativo: três apresentações de camarão e quatro petiscos. Fotos em `public/images`; dados em `src/data/content.js`. Embalagens conceituais sem alegações de certificação ou pesos oficiais. Confirmar formulação, alergênicos e condições de preparo antes de publicar.

Banner inicial: componente `HeroCarousel.jsx`, quatro imagens (original e três novas), troca automática a cada cinco segundos e transição de opacidade. Pausa ao passar o mouse, respeita redução de movimento e aguarda carregamento da próxima imagem. Sem texto ou controles visíveis.
