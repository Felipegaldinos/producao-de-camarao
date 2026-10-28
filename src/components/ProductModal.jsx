import React, { useEffect, useRef } from "react";
import { X, ArrowRight, Check } from "lucide-react";
export default function ProductModal({ product, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!product) return;
    const dialog = ref.current;
    dialog.showModal();
    return () => dialog.close();
  }, [product]);
  if (!product) return null;
  return (
    <dialog
      ref={ref}
      className="product-dialog"
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      aria-labelledby="product-title"
    >
      <div className="modal">
        <button
          className="modal-close"
          autoFocus
          onClick={onClose}
          aria-label="Fechar detalhes"
        >
          <X />
        </button>
        <img
          src={product.image}
          alt={product.name + " — imagem ilustrativa criada com IA"}
        />
        <div className="modal-copy">
          <div className="eyebrow">{product.tag}</div>
          <h2 id="product-title">{product.name}</h2>
          <p>{product.text}</p>
          <dl className="product-specs">
            <dt>Apresentação</dt>
            <dd>{product.presentation}</dd>
            <dt>Inspiração para o preparo</dt>
            <dd>{product.preparation}</dd>
          </dl>
          <p className="editorial-note">
            Catálogo demonstrativo. Disponibilidade, gramaturas, validade e
            embalagem dependem da ficha oficial.
          </p>
          <button className="button" onClick={onClose}>
            Voltar aos produtos <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </dialog>
  );
}
