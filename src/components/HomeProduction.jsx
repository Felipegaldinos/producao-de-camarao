import React from "react";
import { Button } from "./Navigation";
import { SectionTitle } from "./Sections";
const scenes = [
  {
    src: "/images/acompanhamento.jpg",
    title: "Da origem",
    text: "Um olhar atento ao desenvolvimento do camarão.",
  },
  {
    src: "/images/lavagem.jpg",
    title: "À indústria",
    text: "Preparo e organização em cada passagem.",
  },
  {
    src: "/images/embalagem.jpg",
    title: "Ao produto",
    text: "Apresentações pensadas para diferentes cozinhas.",
  },
];
export default function HomeProduction() {
  return (
    <section className="section home-production">
      <div className="centered-heading">
        <SectionTitle
          label="POR DENTRO DO NOSSO UNIVERSO"
          title="Um percurso de cuidado."
          accent="Da água à sua mesa."
        />
        <p>
          Conheça um pouco do caminho que conecta o cultivo, o beneficiamento e
          a apresentação final.
        </p>
      </div>
      <div className="home-production-grid">
        {scenes.map((scene, i) => (
          <article key={scene.src}>
            <img
              src={scene.src}
              alt={scene.title + " — imagem ilustrativa criada com IA"}
              loading="lazy"
              width="1536"
              height="1024"
            />
            <div>
              <small>0{i + 1}</small>
              <h3>{scene.title}</h3>
              <p>{scene.text}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="centered-action">
        <Button to="/quem-somos">Conheça a produção e a estrutura</Button>
        <p>Imagens ilustrativas criadas com IA.</p>
      </div>
    </section>
  );
}
