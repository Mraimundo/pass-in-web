import { NavLink } from "./nav-link";

export function Header() {
  return (
    <div className="flex items-center gap-5 py-3">
      <img src="" alt="Logo" />

      <nav className="flex items-center gap-5">
        <NavLink href="/eventos">Eventos</NavLink>
        <NavLink href="/participantes">Participantes</NavLink>
      </nav>
    </div>
  );
}
