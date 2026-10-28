import React from "react";
import HomeProduction from "../components/HomeProduction";
import HeroCarousel from "../components/HeroCarousel";
import ContactSection from "../components/ContactSection";
import { Button } from "../components/Navigation";
import { Photo, SectionTitle } from "../components/Sections";
import { photos } from "../data/content";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <section className="section home-welcome">
        <div className="eyebrow">PRODUÇÃO DE CAMARÃO</div>
        <h1>
          Da origem ao preparo.
          <br />
          <em>Uma história feita de cuidado e sabor.</em>
        </h1>
        <p>
          O universo do camarão reúne a dedicação de quem cultiva, o trabalho da
          indústria e a criatividade de quem prepara. Explore nossa produção e
          conheça as possibilidades para sua cozinha.
        </p>
      </section>
      <section className="section home-preview home-about" id="origem">
        <Photo
          src={photos.homeAbout}
          alt="Produtor observando um viveiro de camarão"
        />
        <div>
          <SectionTitle
            label="01 / QUEM SOMOS"
            title="A origem faz parte"
            accent="de tudo o que somos."
          >
            Por trás do camarão, existe um universo de pessoas, conhecimento e
            cuidado. Conheça a proposta da marca, os ambientes de produção e o
            caminho até a indústria.
          </SectionTitle>
          <Button to="/quem-somos">Conheça nossa história e estrutura</Button>
        </div>
      </section>
      <HomeProduction />
      <section className="section home-preview home-products section-blue">
        <div>
          <SectionTitle
            label="02 / NOSSOS PRODUTOS"
            title="Uma escolha para"
            accent="cada possibilidade."
          >
            Inteiro, sem cabeça ou descascado. Explore as apresentações e
            encontre a opção que combina com sua receita e sua rotina.
          </SectionTitle>
          <div className="preview-product-list">
            <span>Inteiro</span>
            <span>Sem cabeça</span>
            <span>Descascado</span>
          </div>
          <Button to="/produtos" light>
            Conheça o catálogo completo
          </Button>
        </div>
        <Photo
          src={photos.homeProducts}
          alt="Três apresentações de camarão em recipientes brancos"
        />
      </section>
      <ContactSection />
    </>
  );
}
