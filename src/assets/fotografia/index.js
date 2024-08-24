// Importa todas las imágenes de la carpeta
const imageModules = import.meta.glob(
  "../../assets/fotografia/fotografia-*.jpg"
);

// Crea un array con las URLs de las imágenes
const arrayImagenes = Object.keys(imageModules).map((key) =>
  imageModules[key]().then((module) => module.default)
);

// Exporta el array de promesas
export default Promise.all(arrayImagenes);
