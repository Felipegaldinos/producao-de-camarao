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
export default function Header({ page }) {
  const [menu, setMenu] = React.useState(false);
  React.useEffect(() => setMenu(false), [page]);
  return (
    <>
      <div className="topbar">
        <span>Da origem à sua mesa. Cuidado em cada etapa.</span>
        <span>
          PRODUÇÃO BRASILEIRA <span className="brazil-dot" />
        </span>
      </div>
      <header>
        <Link to="/" className="brand">
          <span className="brand-icon">
            <Waves size={33} />
          </span>
          <span>
            PRODUÇÃO<span className="brand-sub">DE CAMARÃO</span>
          </span>
        </Link>
        <button
          className="menu-toggle"
          aria-label={menu ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
        <nav className={menu ? "open" : ""}>
          {[
            ["/", "Início"],
            ["/quem-somos", "Quem somos"],
            ["/produtos", "Produtos"],
          ].map(([to, label]) => (
            <Link key={to} to={to} className={page === to ? "active" : ""}>
              {label}
            </Link>
          ))}
          <Link to="/#contato" className="nav-cta">
            Entre em contato <ArrowUpRight size={16} />
          </Link>
        </nav>
      </header>
    </>
  );
}
