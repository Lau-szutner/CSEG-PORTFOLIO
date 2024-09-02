// imagesLoader.js
const imageModules = import.meta.glob(
  "../../assets/fotografia/fotografia-*.jpg"
);

const arrayImagenes = Object.keys(imageModules).map((key) =>
  imageModules[key]().then((module) => module.default)
);

// Exporta directamente el resultado de Promise.all que es una promesa que resuelve en un array de imágenes.
export const imagenesFotografia = Promise.all(arrayImagenes);
