import React, { useState } from "react";
import { ShieldCheck, ArrowDown } from "lucide-react";
import {
  products,
  shrimpProducts,
  snackProducts,
  photos,
} from "../data/content";
import ProductCards from "../components/ProductCards";
import {
  PageHero,
  SectionTitle,
  RecipeSection,
  FaqSection,
} from "../components/Sections";
import { PackagingSection, ProductQuote } from "../components/CatalogSections";

export default function Products({ onSelect }) {
  const [filter, setFilter] = useState("Todos");
  const visibleShrimp =
    filter === "Petiscos"
      ? []
      : shrimpProducts.filter(
          (p) =>
            filter === "Todos" || filter === "Camarões" || p.type === filter,
        );
  const visibleSnacks =
    filter === "Todos" || filter === "Petiscos" ? snackProducts : [];
  const count = visibleShrimp.length + visibleSnacks.length;
  return (
    <>
      <PageHero
        label="Produtos"
        title="Camarões e petiscos."
        accent="Sabor em muitas formas."
        text="Dos camarões para suas receitas aos petiscos para compartilhar. Explore as apresentações e encontre inspiração para a sua próxima escolha."
        image={photos.productsHero}
      />
      <section className="section expanded-catalog" id="conteudo">
        <div className="catalog-introduction">
          <SectionTitle
            label="CONHEÇA AS LINHAS"
            title="Mais possibilidades à mesa."
            accent="Mais motivos para experimentar."
          />
          <p>
            Uma seleção que reúne o camarão em diferentes apresentações e uma
            linha de petiscos. Explore cada item para conhecer sua proposta e
            suas possibilidades de uso.
          </p>
          <span className="catalog-demo-label">
            Catálogo demonstrativo · Imagens ilustrativas
          </span>
        </div>
        <div className="catalog-top">
          <div className="filters" aria-label="Filtrar produtos">
            {[
              "Todos",
              "Camarões",
              "Inteiro",
              "Sem cabeça",
              "Descascado",
              "Petiscos",
            ].map((option) => (
              <button
                key={option}
                className={filter === option ? "selected" : ""}
                aria-pressed={filter === option}
                onClick={() => setFilter(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <span aria-live="polite">
            {count} {count === 1 ? "produto" : "produtos"}
          </span>
        </div>
        {visibleShrimp.length > 0 && (
          <div className="catalog-line shrimp-line">
            <div className="catalog-line-heading">
              <span>01 / LINHA CAMARÕES</span>
              <h2>O ingrediente é o protagonista.</h2>
              <p>
                Inteiro, sem cabeça ou descascado: cada apresentação abre um
                caminho para a sua receita.
              </p>
            </div>
            <ProductCards items={visibleShrimp} onSelect={onSelect} />
          </div>
        )}
        {visibleSnacks.length > 0 && (
          <div className="catalog-line snack-line">
            <div className="catalog-line-heading">
              <span>02 / LINHA PETISCOS</span>
              <h2>Para reunir, provar e compartilhar.</h2>
              <p>
                Texturas e formatos que dão um novo lugar ao camarão no seu
                cardápio.
              </p>
            </div>
            <ProductCards items={visibleSnacks} onSelect={onSelect} />
          </div>
        )}
        <div className="catalog-note">
          <ShieldCheck />
          <div>
            <strong>Conheça a proposta. Confirme os detalhes.</strong>
            <p>
              Produtos demonstrativos. Formulação, alergênicos, modo de preparo,
              gramaturas e disponibilidade dependem das informações oficiais de
              cada item.
            </p>
          </div>
        </div>
      </section>
      <PackagingSection />
      <section className="section catalog-inspiration">
        <div className="centered-heading">
          <SectionTitle
            label="DO PRIMEIRO PREPARO À ÚLTIMA MORDIDA"
            title="Uma escolha para cada ocasião."
          />
          <p>
            O ingrediente muda de apresentação. A vontade de reunir pessoas ao
            redor da mesa continua.
          </p>
        </div>
        <div className="occasion-grid">
          {[
            [
              "Para criar",
              "Camarões inteiros ou limpos para desenvolver receitas, explorar temperos e dar sua assinatura ao prato.",
            ],
            [
              "Para receber",
              "Petiscos para inspirar entradas, porções e combinações de molhos em encontros especiais.",
            ],
            [
              "Para o seu negócio",
              "Opções para pensar o cardápio, a apresentação e a rotina de preparo da sua operação.",
            ],
          ].map(([title, text], i) => (
            <article key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <RecipeSection />
      <FaqSection product />
      <ProductQuote />
    </>
  );
}
