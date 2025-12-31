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
    <nav
      className={`text-white px-15 w-full glassmorphism top-0 absolute z-30`}
    >
      <ul className="flex justify-between py-5">
        {navBarLinks.map((link, index) => (
          <li key={index} className="cursor-pointer">
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
