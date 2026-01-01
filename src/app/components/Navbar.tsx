const Navbar = () => {
  const navBarLinks: string[] = [
    'Inicio',
    'Biografía',
    'Servicios',
    'Fotografía',
    'Marcas',
    'Edición',
    'Content Creator',
  ];

  return (
    <nav className="fixed top-0 z-30 w-full px-10 py-4">
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]">
        <ul className="flex items-center justify-between px-8 py-4">
          {navBarLinks.map((link, index) => (
            <li
              key={index}
              className="group relative cursor-pointer text-[10px] font-light uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:text-white"
            >
              {link}
              {/* Línea minimalista que aparece abajo en hover */}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-white/40 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
