import React from "react";
import {
  Waves,
  Users,
  Package,
  Snowflake,
  Leaf,
  ArrowUpRight,
} from "lucide-react";
import {
  ProductionGallery,
  TeamSection,
} from "../components/ProductionGallery";
import { photos } from "../data/content";
import { Button } from "../components/Navigation";
import {
  PageHero,
  SectionTitle,
  Photo,
  Principles,
} from "../components/Sections";
export default function About() {
  return (
    <>
      <PageHero
        label="Quem somos"
        title="Nossa essência está na origem."
        accent="Nosso olhar está no futuro."
        text="Conheça o universo que conecta o cultivo, a indústria e as pessoas. Uma história construída com atenção ao que importa em cada etapa."
        image={photos.farm}
      />
      <section className="section story about-intro" id="conteudo">
        <div>
          <SectionTitle
            label="NOSSA ESSÊNCIA"
            title="Uma conexão com a água."
            accent="Uma razão para fazer bem feito."
          />
          <div className="large-quote">
            “Um bom produto começa muito antes de chegar à mesa.”
          </div>
        </div>
        <div>
          <p>
            A produção de camarão reúne conhecimento, rotina e sensibilidade
            para observar o ambiente. Por trás de cada apresentação existe uma
            cadeia de decisões: acompanhar o cultivo, organizar as etapas de
            processamento e cuidar das condições de conservação.
          </p>
          <p>
            É essa conexão que queremos tornar visível. Um espaço para
            apresentar o produto, mas também para mostrar seu percurso e
            valorizar as pessoas que participam dele.
          </p>
          <p>
            Esta proposta institucional nasce da ideia de aproximar origem e
            consumo. Informação clara, imagens que ajudam a compreender o
            processo e conteúdo para escolher com mais consciência.
          </p>
        </div>
      </section>
      <section className="section history-section">
        <div className="history-heading">
          <SectionTitle
            label="HISTÓRIA E EVOLUÇÃO"
            title="Conhecimento que se transforma."
            accent="Um setor em movimento."
          />
          <p>
            Da formação das fazendas à diversificação de apresentações, a
            carcinicultura conecta atividades de campo, indústria e alimentação.
            Conheça os eixos que ajudam a contar essa evolução.
          </p>
        </div>
        <div className="history-track">
          {[
            [
              "Origem",
              "A relação com o cultivo",
              "A criação de camarão organiza o desenvolvimento dos animais em ambientes de produção, com rotinas de manejo e observação.",
            ],
            [
              "Desenvolvimento",
              "A conexão com a indústria",
              "Seleção, classificação e beneficiamento ampliam as formas de apresentar o camarão e de atender diferentes necessidades.",
            ],
            [
              "Transformação",
              "Mais possibilidades à mesa",
              "Produtos com diferentes níveis de preparo aproximam o ingrediente das cozinhas domésticas e profissionais.",
            ],
            [
              "Continuidade",
              "Pessoas, conhecimento e futuro",
              "O aprendizado das equipes e a revisão de processos mantêm a evolução como parte do caminho.",
            ],
          ].map(([n, t, d], i) => (
            <article key={n}>
              <span className="history-dot" />
              <small>
                0{i + 1} / {n}
              </small>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
        <p className="section-footnote">
          Panorama editorial do setor. A trajetória própria da empresa, suas
          datas e seus marcos serão apresentados após confirmação.
        </p>
      </section>
      <Principles />
      <ProductionGallery />
      <section className="section facility-section">
        <div className="section-heading">
          <SectionTitle
            label="ESTRUTURA QUE CONECTA ETAPAS"
            title="Do viveiro ao beneficiamento."
            accent="Cada ambiente tem seu papel."
          />
          <p className="heading-description">
            Conheça os ambientes que compõem uma operação de camarão. A
            estrutura real da empresa será apresentada com suas especificações
            oficiais.
          </p>
        </div>
        <Photo
          src="/images/estrutura-externa.jpg"
          alt="Vista externa ilustrativa de uma unidade industrial de camarão"
          className="facility-overview"
        />
        <div className="facility-grid">
          <article>
            <Photo
              src={photos.factory}
              alt="Ambiente industrial de beneficiamento de camarão"
            />
            <div>
              <small>01 / INDÚSTRIA</small>
              <h3>Da recepção ao beneficiamento</h3>
              <p>
                A recepção conecta o cultivo ao ambiente industrial. Seleção,
                classificação e preparação da matéria-prima organizam o início
                do fluxo de processamento.
              </p>
              <ul>
                <li>Recepção e identificação dos lotes</li>
                <li>Seleção e classificação da matéria-prima</li>
                <li>Organização do fluxo de processamento</li>
              </ul>
            </div>
          </article>
          <article>
            <Photo
              src="/images/camara-fria.jpg"
              alt="Câmara de conservação com caixas e prateleiras organizadas"
            />
            <div>
              <small>02 / CONSERVAÇÃO</small>
              <h3>Estrutura para conservar</h3>
              <p>
                Ambientes de armazenamento conectam o processamento à expedição.
                Organização, identificação e condições adequadas de conservação
                acompanham o produto nessa passagem.
              </p>
              <ul>
                <li>Armazenamento organizado</li>
                <li>Identificação das embalagens</li>
                <li>Preparação para expedição</li>
              </ul>
            </div>
          </article>
        </div>
      </section>
      <TeamSection />
      <section className="section responsibility">
        <div>
          <SectionTitle
            label="UM OLHAR PARA ALÉM DO PRODUTO"
            title="Pessoas e ambiente."
            accent="Parte da mesma história."
          >
            Produzir envolve relações: com a água, com o território e com as
            pessoas que fazem o trabalho acontecer. Esses temas orientam a
            proposta de conteúdo e posicionamento da marca.
          </SectionTitle>
          <p>
            Práticas ambientais, programas sociais e ações de capacitação
            precisam ser apresentados com informações verificáveis. Este espaço
            será ampliado com os projetos reais da empresa.
          </p>
        </div>
        <div className="responsibility-points">
          {[
            [
              Leaf,
              "Atenção aos recursos",
              "Manejo da água, uso dos insumos e organização das rotinas são temas relevantes para o acompanhamento da operação.",
            ],
            [
              Users,
              "Valorização das pessoas",
              "Conhecimento, orientação e condições de trabalho fazem parte da construção de uma equipe preparada.",
            ],
            [
              Waves,
              "Aprendizado contínuo",
              "A observação do processo e a troca de experiências ajudam a identificar oportunidades de melhoria.",
            ],
          ].map(([Icon, t, d]) => (
            <article key={t}>
              <Icon />
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section about-next">
        <div>
          <SectionTitle
            label="DA NOSSA HISTÓRIA PARA A SUA COZINHA"
            title="Agora, conheça"
            accent="as apresentações."
          />
          <p>Explore as opções e veja as características de cada produto.</p>
        </div>
        <Button to="/produtos">Ir para Produtos</Button>
      </section>
    </>
  );
}
