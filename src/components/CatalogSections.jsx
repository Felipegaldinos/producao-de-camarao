import React from "react";
import { Package, Store, Utensils, ArrowUpRight } from "lucide-react";
import { SectionTitle, Photo } from "./Sections";
import { Button, Link } from "./Navigation";

export function PackagingSection() {
  return (
    <section className="section packaging-section">
      <div className="section-heading">
        <SectionTitle
          label="APRESENTAÇÕES PARA DIFERENTES ROTINAS"
          title="Da sua cozinha"
          accent="ao seu negócio."
        />
        <p className="heading-description">
          Uma proposta visual de embalagens para consumo doméstico, revenda e
          cozinhas profissionais.
        </p>
      </div>
      <Photo
        src="/images/embalagens-conceito.jpg"
        alt="Conceitos de embalagens de camarão em pacotes e bandeja"
        className="packaging-photo"
      />
      <div className="packaging-options">
        {[
          [
            Utensils,
            "Na cozinha profissional",
            "Apresentações que podem acompanhar o volume de preparo, o porcionamento e a organização da operação.",
          ],
          [
            Store,
            "No varejo",
            "Formatos que ajudam a apresentar o produto e a orientar a escolha de quem compra.",
          ],
          [
            Package,
            "Para compartilhar",
            "Bandejas e porções para diferentes ocasiões, da entrada ao encontro com amigos.",
          ],
        ].map(([Icon, title, text]) => (
          <article key={title}>
            <Icon size={25} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <p className="section-footnote">
        Embalagens conceituais criadas com IA. Pesos, materiais, validade e
        disponibilidade serão definidos no catálogo oficial.
      </p>
    </section>
  );
}
export function ProductQuote() {
  return (
    <section className="section product-quote">
      <div>
        <div className="eyebrow white">ESCOLHA SUA APRESENTAÇÃO</div>
        <h2>
          Um cardápio de possibilidades.
          <br />
          Uma conversa para começar.
        </h2>
        <p>
          Conte qual apresentação procura, a quantidade estimada e onde pretende
          receber. Esses detalhes ajudam a orientar a consulta comercial.
        </p>
      </div>
      <Button to="/#contato" light>
        Consultar produtos e condições
      </Button>
    </section>
  );
}
