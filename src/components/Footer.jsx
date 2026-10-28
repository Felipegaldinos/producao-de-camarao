import React from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Waves,
  Fish,
  ShieldCheck,
  Snowflake,
  Leaf,
  Menu,
  X,
  ChevronDown,
  Check,
  Package,
  Anchor,
} from "lucide-react";
import { Link, Button } from "./Navigation";
export default function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <Link to="/" className="brand">
          <span className="brand-icon">
            <Waves size={33} />
          </span>
          <span>
            PRODUÇÃO<span className="brand-sub">DE CAMARÃO</span>
          </span>
        </Link>
        <p>
          Da origem à sua mesa.
          <br />
          Uma conexão feita de cuidado e sabor.
        </p>
        <div className="footer-links">
          <Link to="/">Início</Link>
          <Link to="/quem-somos">Quem somos</Link>
          <Link to="/produtos">Produtos</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Produção de Camarão.</span>
        <span>Projeto demonstrativo · Nome e imagens ilustrativos.</span>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Voltar ao topo ↑
        </a>
      </div>
    </footer>
  );
}
