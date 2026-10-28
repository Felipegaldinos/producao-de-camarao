import React from "react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { contact, whatsappUrl } from "../data/contact";
import { SectionTitle } from "./Sections";

export function WhatsAppIcon({ size = 25 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.04 3a12.8 12.8 0 0 0-11.1 19.2L3 29l7-1.84A12.82 12.82 0 1 0 16.04 3Zm0 23.34a10.5 10.5 0 0 1-5.38-1.48l-.39-.23-4.15 1.09 1.11-4.04-.26-.42a10.5 10.5 0 1 1 9.07 5.08Zm5.77-7.87c-.32-.16-1.89-.93-2.18-1.04-.29-.1-.5-.16-.71.16-.22.32-.82 1.04-1.01 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.5.14-.66.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.66 0 1.56 1.14 3.08 1.3 3.29.16.21 2.24 3.42 5.43 4.8.76.33 1.36.53 1.82.68.76.24 1.45.21 2 .13.61-.09 1.89-.78 2.16-1.52.26-.74.26-1.38.18-1.52-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}
export function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp — contato fictício de demonstração"
      title="WhatsApp · número fictício"
    >
      <WhatsAppIcon size={32} />
      <span>
        Fale pelo WhatsApp<small>Contato de demonstração</small>
      </span>
    </a>
  );
}
export default function ContactSection() {
  return (
    <section className="section contact-section" id="contato">
      <div className="contact-intro">
        <SectionTitle
          label="VAMOS CONVERSAR"
          title="Sua próxima escolha"
          accent="começa com uma conversa."
        />
        <p>
          Conheça as apresentações, tire dúvidas sobre os produtos e encontre o
          melhor ponto de partida para sua necessidade.
        </p>
        <a
          className="button whatsapp-button"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon size={21} /> Falar pelo WhatsApp{" "}
          <ArrowUpRight size={18} />
        </a>
        <p className="contact-demo">
          Contatos fictícios para demonstração. O atendimento será ativado com
          os dados oficiais.
        </p>
      </div>
      <div className="contact-details">
        <article>
          <WhatsAppIcon />
          <div>
            <span>WHATSAPP</span>
            <strong>{contact.phoneDisplay}</strong>
            <small>Número ilustrativo</small>
          </div>
        </article>
        <article>
          <Mail />
          <div>
            <span>E-MAIL</span>
            <strong>{contact.email}</strong>
            <small>Endereço ilustrativo</small>
          </div>
        </article>
        <article>
          <MapPin />
          <div>
            <span>ONDE NOS ENCONTRAR</span>
            <strong>{contact.address}</strong>
            <small>Localização oficial em breve</small>
          </div>
        </article>
      </div>
    </section>
  );
}
