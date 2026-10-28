import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  X,
  Waves,
  Users,
  ClipboardCheck,
} from "lucide-react";
import { SectionTitle, Photo } from "./Sections";

const productionScenes = [
  {
    src: "/images/despesca.jpg",
    title: "O momento da despesca",
    label: "DO VIVEIRO À PRÓXIMA ETAPA",
    alt: "Trabalhadores levantando uma rede com camarões na borda de um viveiro",
  },
  {
    src: "/images/analise-agua.jpg",
    title: "Um olhar atento à água",
    label: "ACOMPANHAMENTO DO CULTIVO",
    alt: "Técnico coletando uma amostra de água em um viveiro",
  },
  {
    src: "/images/manejo.jpg",
    title: "Cuidado no dia a dia",
    label: "MANEJO E ALIMENTAÇÃO",
    alt: "Profissional distribuindo alimento em um viveiro de camarão",
  },
];

function GalleryViewer({ index, onClose, onChange }) {
  const ref = useRef(null);
  const scene = productionScenes[index];
  useEffect(() => {
    if (index === null) return;
    const dialog = ref.current;
    if (!dialog.open) dialog.showModal();
  }, [index]);
  if (index === null) return null;
  const change = (direction) =>
    onChange(
      (index + direction + productionScenes.length) % productionScenes.length,
    );
  return (
    <dialog
      ref={ref}
      className="gallery-dialog"
      aria-labelledby="gallery-title"
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          change(-1);
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          change(1);
        }
      }}
    >
      <div className="gallery-viewer">
        <button
          className="viewer-close"
          autoFocus
          onClick={onClose}
          aria-label="Fechar galeria"
        >
          <X />
        </button>
        <img
          src={scene.src}
          alt={scene.alt + " — imagem ilustrativa criada com IA"}
        />
        <div className="viewer-caption">
          <div aria-live="polite">
            <small>{scene.label}</small>
            <h3 id="gallery-title">{scene.title}</h3>
            <p>Imagem ilustrativa criada com IA.</p>
          </div>
          <div className="viewer-controls">
            <button onClick={() => change(-1)} aria-label="Imagem anterior">
              <ArrowLeft size={20} />
            </button>
            <span>
              {index + 1} / {productionScenes.length}
            </span>
            <button onClick={() => change(1)} aria-label="Próxima imagem">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export function ProductionGallery() {
  const [selected, setSelected] = useState(null);
  return (
    <section className="section production-gallery" id="producao">
      <div className="section-heading">
        <SectionTitle
          label="GALERIA DA PRODUÇÃO"
          title="O cuidado visto"
          accent="de perto."
        />
        <p className="heading-description">
          Do acompanhamento da água à despesca, um percurso em imagens pelo
          cotidiano do cultivo. Clique para ampliar.
        </p>
      </div>
      <div className="production-mosaic">
        {productionScenes.map((scene, index) => (
          <button
            className="production-scene"
            key={scene.src}
            onClick={() => setSelected(index)}
            aria-label={"Ampliar: " + scene.title}
          >
            <img
              src={scene.src}
              alt={scene.alt + " — imagem ilustrativa criada com IA"}
              loading="lazy"
              width="1536"
              height="1024"
            />
            <span className="scene-caption">
              <span>
                <small>{scene.label}</small>
                <strong>{scene.title}</strong>
              </span>
              <span className="scene-expand">
                <ArrowUpRight size={22} />
              </span>
            </span>
          </button>
        ))}
      </div>
      <p className="section-footnote">
        Cenas ilustrativas criadas com IA para apresentar o universo da
        produção. Não são registros da operação real da empresa.
      </p>
      <GalleryViewer
        index={selected}
        onClose={() => setSelected(null)}
        onChange={setSelected}
      />
    </section>
  );
}

export function TeamSection() {
  return (
    <section className="section team-section">
      <div className="section-heading">
        <SectionTitle
          label="PESSOAS QUE FAZEM ACONTECER"
          title="Por trás de cada etapa,"
          accent="existe uma equipe."
        />
        <p className="heading-description">
          Campo, acompanhamento técnico e indústria: diferentes olhares
          conectados pelo trabalho de todos os dias.
        </p>
      </div>
      <Photo
        src="/images/equipe.jpg"
        alt="Grupo ilustrativo de profissionais do cultivo e da indústria"
        className="team-photo"
      />
      <div className="team-roles">
        {[
          [
            Waves,
            "No campo",
            "Manejo dos viveiros e acompanhamento do cultivo.",
          ],
          [
            ClipboardCheck,
            "Na área técnica",
            "Observação, registros e apoio aos processos.",
          ],
          [
            Users,
            "Na indústria",
            "Seleção, beneficiamento e organização da operação.",
          ],
        ].map(([Icon, title, text]) => (
          <article key={title}>
            <Icon size={25} />
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="section-footnote">
        Pessoas e cenários gerados com IA. A apresentação da equipe real será
        feita com fotografias e informações oficiais.
      </p>
    </section>
  );
}
