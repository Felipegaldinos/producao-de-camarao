export const photos = {
  homeAbout: "/images/produtor.jpg",
  homeProducts: "/images/apresentacoes.jpg",
  productsHero: "/images/selecao.jpg",
  recipe: "/images/risoto.jpg",
  hero: "/images/gastronomia.jpg",
  farm: "/images/cultivo.jpg",
  factory: "/images/industria.jpg",
  shrimp: "/images/inteiro.jpg",
  headless: "/images/sem-cabeca.jpg",
  peeled: "/images/descascado.jpg",
  food: "/images/gastronomia.jpg",
};
export const shrimpProducts = [
  {
    name: "Camarão inteiro",
    type: "Inteiro",
    tag: "ORIGEM E SABOR",
    text: "Com cabeça e casca, uma apresentação que valoriza o ingrediente por completo. Para preparos marcantes, da grelha a caldos e receitas regionais.",
    image: photos.shrimp,
    preparation: "Grelhados, moquecas e caldos",
    presentation: "Com cabeça, casca e cauda",
    benefit: "Presença no prato e possibilidades de aproveitamento na cozinha.",
  },
  {
    name: "Camarão sem cabeça",
    type: "Sem cabeça",
    tag: "VERSATILIDADE NA COZINHA",
    text: "Com a casca preservada e sem cabeça, une versatilidade de preparo e facilidade de porcionamento. Uma boa opção para receitas variadas.",
    image: photos.headless,
    preparation: "Salteados, ensopados e preparos na manteiga",
    presentation: "Sem cabeça, com casca e cauda",
    benefit: "Flexibilidade para finalizar o preparo de acordo com a receita.",
  },
  {
    name: "Camarão descascado",
    type: "Descascado",
    tag: "PRATICIDADE NO PREPARO",
    text: "Sem cabeça e sem casca, deixa o protagonismo para a criatividade. Uma apresentação prática para massas, risotos, recheios e molhos.",
    image: photos.peeled,
    preparation: "Massas, risotos, recheios e molhos",
    presentation: "Sem cabeça, sem casca e sem cauda",
    benefit: "Menos etapas de limpeza durante o preparo na cozinha.",
  },
];
export const journey = [
  {
    title: "O começo está na água",
    label: "CULTIVO",
    text: "O cultivo reúne manejo da água, alimentação e observação do desenvolvimento dos animais. A rotina de acompanhamento ajuda a compreender as condições de cada viveiro.",
  },
  {
    title: "Um olhar para cada lote",
    label: "SELEÇÃO",
    text: "Após a despesca, seleção e classificação organizam a matéria-prima por características e tamanho. A identificação dos lotes conecta as etapas da cadeia produtiva.",
  },
  {
    title: "Cuidado que ganha forma",
    label: "BENEFICIAMENTO",
    text: "A apresentação final orienta as etapas de preparo: inteiro, sem cabeça ou descascado. Organização do fluxo e higiene são temas centrais no ambiente industrial.",
  },
  {
    title: "Pronto para seguir caminho",
    label: "CONSERVAÇÃO",
    text: "Embalagem, identificação e conservação acompanham o produto até o próximo destino. As condições indicadas pelo fabricante devem ser respeitadas em toda a cadeia.",
  },
];
export const faqs = [
  [
    "Qual é a diferença entre as apresentações?",
    "O camarão inteiro preserva cabeça e casca. O sem cabeça mantém a casca e a cauda. O descascado remove a casca e pode ser apresentado com ou sem cauda, conforme a especificação de cada produto. Confira os detalhes de cada item.",
  ],
  [
    "Como escolher o camarão para uma receita?",
    "Considere a apresentação desejada no prato e o tempo disponível para o preparo. O inteiro funciona bem em receitas que valorizam o ingrediente completo; o descascado facilita o uso em massas, risotos e recheios.",
  ],
  [
    "O que significa a classificação por tamanho?",
    "É uma indicação de quantidade de peças por unidade de peso. A unidade pode variar entre apresentações e fornecedores. Compare sempre produtos com a mesma unidade e consulte a ficha técnica antes de comprar.",
  ],
  [
    "Onde consultar embalagens e disponibilidade?",
    "As apresentações desta versão são ilustrativas. Embalagens, gramaturas, estoque e condições comerciais serão adicionados a partir do catálogo oficial da empresa.",
  ],
  [
    "As imagens mostram as instalações reais?",
    "As fotografias de cultivo, indústria e produtos foram criadas com inteligência artificial para ilustrar o projeto. Elas não documentam instalações, equipes ou lotes reais.",
  ],
];

export const snackProducts = [
  {
    name: "Coxinha de camarão",
    type: "Petiscos",
    tag: "CLÁSSICO COM UM NOVO SABOR",
    text: "O formato tradicional da coxinha encontra o camarão em uma proposta para entradas e momentos de compartilhar.",
    image: "/images/coxinha.jpg",
    presentation: "Salgado em formato de coxinha com recheio de camarão",
    preparation: "Entradas, porções e mesas de petiscos",
    benefit: "Uma apresentação familiar para explorar novos sabores.",
  },
  {
    name: "Camarão empanado",
    type: "Petiscos",
    tag: "TEXTURA E SABOR",
    text: "Camarão envolto em uma camada crocante. Uma inspiração para porções acompanhadas de molhos e finalizações.",
    image: "/images/empanado.jpg",
    presentation: "Camarão com cobertura empanada e cauda aparente",
    preparation: "Porções, entradas e acompanhamento de molhos",
    benefit: "Contraste entre o camarão e a textura da cobertura.",
  },
  {
    name: "Camarão recheado",
    type: "Petiscos",
    tag: "UM RECHEIO PARA SURPREENDER",
    text: "Uma proposta que combina camarão, recheio cremoso e cobertura empanada para servir em ocasiões especiais.",
    image: "/images/recheado.jpg",
    presentation: "Porção de camarão recheada e empanada",
    preparation: "Entradas e porções para compartilhar",
    benefit: "Uma alternativa para variar o cardápio de petiscos.",
  },
  {
    name: "Bolinho de camarão",
    type: "Petiscos",
    tag: "PARA COMPARTILHAR",
    text: "Pequenos bolinhos com camarão em uma apresentação que convida a reunir pessoas ao redor da mesa.",
    image: "/images/bolinho.jpg",
    presentation: "Bolinho redondo com recheio de camarão",
    preparation: "Petiscos, porções e eventos",
    benefit: "Formato de porção para compor diferentes combinações.",
  },
];
export const products = [...shrimpProducts, ...snackProducts];
