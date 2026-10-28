import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
export function Link({ to, children, className = "", ...props }) {
  return (
    <RouterLink to={to} className={className} {...props}>
      {children}
    </RouterLink>
  );
}
export function Button({ to, children, light = false }) {
  return (
    <Link to={to} className={"button " + (light ? "light" : "")}>
      {children}
      <ArrowUpRight size={18} />
    </Link>
  );
}
