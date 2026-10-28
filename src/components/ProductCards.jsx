import React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { products } from "../data/content";

export default function ProductCards({ items = products, onSelect }) {
  return (
    <div className="product-grid">
      {items.map((product) => (
        <article className="product" key={product.name}>
          <button
            className="product-image"
            onClick={() => onSelect(product)}
            aria-label={"Conhecer " + product.name}
          >
            <img
              src={product.image}
              alt={product.name + " — imagem ilustrativa criada com IA"}
              loading="lazy"
              width="1536"
              height="1024"
            />
            <span className="product-index">
              {String(products.indexOf(product) + 1).padStart(2, "0")}
            </span>
            <span className="round">
              <ArrowUpRight size={22} />
            </span>
          </button>
          <small>{product.tag}</small>
          <h3>{product.name}</h3>
          <p>{product.text}</p>
          <button className="text-button" onClick={() => onSelect(product)}>
            Ver detalhes <ArrowRight size={16} />
          </button>
        </article>
      ))}
    </div>
  );
}
