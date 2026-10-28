import React from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Waves,
  ShieldCheck,
  Leaf,
  Snowflake,
  Utensils,
  Store,
  Truck,
  Users,
  Eye,
  Heart,
  Package,
  ClipboardCheck,
} from "lucide-react";
import { Button, Link } from "./Navigation";
import { photos, journey, faqs } from "../data/content";
export function SectionTitle({ label, title, accent, children }) {
  return (
    <div className="section-title">
      <div className="eyebrow">{label}</div>
      <h2>
        {title}
        {accent && (
          <>
            <br />
            <em>{accent}</em>
          </>
        )}
      </h2>
      {children && <p>{children}</p>}
    </div>
  );
}
export function Photo({ src, alt, className = "" }) {
  return (
    <figure className={"editorial-photo " + className}>
      <img
        src={src}
        alt={alt + " — imagem ilustrativa criada com IA"}
        loading="lazy"
        width="1536"
        height="1024"
      />
      <figcaption>Imagem ilustrativa · Criada com IA</figcaption>
    </figure>
  );
}
export function PageHero({ label, title, accent, text, image }) {
  return (
    <section className="inner-hero">
      <div className="inner-hero-copy">
        <div className="breadcrumb">
          <Link to="/">Início</Link>
          <span>/</span>
          <span>{label}</span>
        </div>
        <div className="eyebrow">{label}</div>
        <h1>
          {title}
          <br />
          <em>{accent}</em>
        </h1>
        <p>{text}</p>
        <a className="scroll-link" href="#conteudo">
          CONTINUE EXPLORANDO <ArrowRight size={16} />
        </a>
      </div>
      <Photo src={image} alt={label} />
    </section>
  );
}
export function ProductionJourney() {
  return (
    <section className="section journey-section" id="producao">
      <div className="section-heading">
        <SectionTitle
          label="UM CAMINHO, MUITOS CUIDADOS"
          title="Antes de chegar ao prato,"
          accent="existe toda uma jornada."
        />
        <p className="heading-description">
          Entenda as etapas que aproximam a produção, a indústria e a cozinha.
          Um olhar sobre a cadeia do camarão, do cultivo à conservação.
        </p>
      </div>
      <div className="journey-grid">
        {journey.map((item, i) => (
          <article key={item.label}>
            <div className="journey-step-number">0{i + 1}</div>
            <div className="eyebrow">{item.label}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
      <p className="section-footnote">
        Etapas apresentadas como visão geral do setor. Os procedimentos
        específicos da empresa serão definidos com os dados oficiais.
      </p>
    </section>
  );
}
export function QualitySection() {
  return (
    <section className="section quality-section">
      <Photo
        src={photos.factory}
        alt="Seleção de camarões em linha de beneficiamento"
      />
      <div>
        <SectionTitle
          label="QUALIDADE É UM PROCESSO"
          title="Cuidado que começa cedo."
          accent="E acompanha cada etapa."
        >
          Uma produção bem conduzida depende da conexão entre pessoas, ambiente
          e processos. Cada fase tem seu papel na construção do produto final.
        </SectionTitle>
        <div className="quality-points">
          {[
            [
              Waves,
              "Atenção ao ambiente",
              "A água e o manejo fazem parte da rotina de acompanhamento do cultivo.",
            ],
            [
              ClipboardCheck,
              "Organização dos processos",
              "Identificar os lotes e acompanhar as etapas ajuda a manter as informações conectadas.",
            ],
            [
              Snowflake,
              "Conservação e integridade",
              "Embalagens íntegras e condições adequadas de armazenamento são pontos de atenção em toda a cadeia.",
            ],
          ].map(([Icon, t, d]) => (
            <div key={t}>
              <Icon size={23} />
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function AudienceSection() {
  return (
    <section className="section audience-section">
      <SectionTitle
        label="DIFERENTES COZINHAS, A MESMA INSPIRAÇÃO"
        title="Do seu negócio"
        accent="aos seus melhores momentos."
      >
        Apresentações diferentes para necessidades diferentes. Veja o que
        considerar na escolha de camarão para cada contexto.
      </SectionTitle>
      <div className="audience-grid">
        {[
          [
            Utensils,
            "Restaurantes e chefs",
            "A escolha da apresentação acompanha o cardápio, o porcionamento e a rotina da equipe. Avalie o rendimento e o resultado desejado em cada prato.",
          ],
          [
            Store,
            "Varejo e distribuição",
            "Identificação clara, embalagem, conservação e especificação do produto ajudam a organizar a compra e a apresentação ao consumidor.",
          ],
          [
            Users,
            "Para preparar em casa",
            "De um almoço especial a uma receita prática, o camarão abre espaço para explorar combinações, texturas e formas de servir.",
          ],
        ].map(([Icon, t, d], i) => (
          <article key={t}>
            <span className="audience-number">0{i + 1}</span>
            <Icon size={29} />
            <h3>{t}</h3>
            <p>{d}</p>
            <Link to="/produtos" className="text-button">
              Explore as apresentações <ArrowUpRight size={17} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
export function RecipeSection() {
  return (
    <section className="recipe-section">
      <Photo
        src={photos.recipe}
        alt="Risoto de camarão servido em prato branco"
      />
      <div className="recipe-copy">
        <div className="eyebrow white">UM INGREDIENTE, MUITAS DESCOBERTAS</div>
        <h2>
          Da receita de família
          <br />à sua próxima criação.
        </h2>
        <p>
          O camarão encontra seu lugar em preparos simples e em pratos cheios de
          personalidade. A apresentação certa acompanha sua ideia e facilita o
          caminho até a mesa.
        </p>
        <div className="recipe-tags">
          <span>Grelhados</span>
          <span>Massas e risotos</span>
          <span>Receitas regionais</span>
        </div>
        <Button to="/produtos" light>
          Encontre sua inspiração
        </Button>
      </div>
    </section>
  );
}
export function FaqSection({ product = false }) {
  return (
    <section className="section faq-section">
      <div>
        <SectionTitle
          label="PARA SABER MAIS"
          title={product ? "Escolha com mais informação." : "Boas perguntas."}
          accent={
            product ? "Prepare com mais confiança." : "Respostas que aproximam."
          }
        >
          Reunimos informações para ajudar você a conhecer as apresentações e
          entender melhor o universo do camarão.
        </SectionTitle>
        <Waves className="faq-wave" size={70} />
      </div>
      <div className="faq-list">
        {faqs.map(([q, a], i) => (
          <details key={q}>
            <summary>
              <span className="faq-number">0{i + 1}</span>
              {q}
              <span className="faq-plus">+</span>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
export function ClosingBanner() {
  return (
    <section className="closing-banner">
      <div>
        <div className="eyebrow white">CONTINUE ESSA DESCOBERTA</div>
        <h2>
          Conheça a origem.
          <br />
          Explore as possibilidades.
        </h2>
      </div>
      <div className="closing-links">
        <Button to="/quem-somos" light>
          Por dentro da produção
        </Button>
        <Link to="/produtos" className="white-link">
          Conheça nossos produtos <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}
export function Gallery({ compact = false }) {
  const images = [
    [photos.farm, "O universo do cultivo", "Água, ambiente e manejo"],
    [photos.factory, "Por dentro da indústria", "Pessoas e processos"],
    [photos.shrimp, "Da seleção ao produto", "Atenção à apresentação"],
    [photos.food, "O encontro com a cozinha", "Criatividade e sabor"],
  ];
  return (
    <section
      className={
        "section gallery-section " + (compact ? "compact-gallery" : "")
      }
    >
      <div className="section-heading">
        <SectionTitle
          label="UM OLHAR MAIS DE PERTO"
          title="Imagens que contam"
          accent="o universo do camarão."
        />
        <p className="heading-description">
          Um percurso visual pelo cultivo, pelo ambiente industrial e pelas
          possibilidades à mesa. Imagens conceituais criadas para este projeto.
        </p>
      </div>
      <div className="gallery-grid">
        {images.map(([src, t, d]) => (
          <figure key={t}>
            <img
              src={src}
              alt={t + " — imagem ilustrativa criada com IA"}
              loading="lazy"
            />
            <figcaption>
              <span>{d}</span>
              <h3>{t}</h3>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
export function Principles() {
  return (
    <section className="section principles">
      <SectionTitle
        label="O QUE ORIENTA NOSSA PROPOSTA"
        title="Um propósito claro."
        accent="Um caminho compartilhado."
      />
      <div className="principles-grid">
        {[
          [
            Heart,
            "Propósito",
            "Valorizar o camarão e aproximar as pessoas da sua origem, trazendo clareza sobre as etapas que conectam a produção ao consumo.",
          ],
          [
            Eye,
            "Visão",
            "Construir uma marca que une informação, cuidado e inspiração, com atenção às necessidades de quem produz, compra e prepara.",
          ],
          [
            Leaf,
            "Princípios",
            "Respeito às pessoas, atenção ao ambiente, transparência nas informações e busca por melhoria contínua.",
          ],
        ].map(([Icon, t, d]) => (
          <article key={t}>
            <Icon />
            <h3>{t}</h3>
            <p>{d}</p>
          </article>
        ))}
      </div>
      <p className="section-footnote">
        Proposta editorial de posicionamento, sujeita à validação da empresa.
      </p>
    </section>
  );
}
