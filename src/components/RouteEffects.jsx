import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
export default function RouteEffects({ onNavigate }) {
  const location = useLocation();
  const previous = useRef(null);
  useEffect(() => {
    const page = location.pathname.replace(/\/$/, "") || "/";
    document.title =
      ({ "/": "Início", "/quem-somos": "Quem somos", "/produtos": "Produtos" }[
        page
      ] || "Página não encontrada") + " | Produção de Camarão";
    onNavigate();
    const frame = requestAnimationFrame(() => {
      if (location.hash)
        document
          .getElementById(decodeURIComponent(location.hash.slice(1)))
          ?.scrollIntoView({ behavior: "instant" });
      else window.scrollTo({ top: 0, behavior: "instant" });
      if (previous.current && !location.hash)
        document.getElementById("principal")?.focus({ preventScroll: true });
      previous.current = location.key;
    });
    return () => cancelAnimationFrame(frame);
  }, [location.key, location.pathname, location.hash, onNavigate]);
  return null;
}
