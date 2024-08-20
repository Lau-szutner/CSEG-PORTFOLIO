import styled from "./header.module.css";

export default function Header() {
  return (
    <header className={styled.header}>
      <h1 className={styled.h1}>CSEG</h1>
      <h2 className={styled.h2}>Catalina Segalini</h2>
      <p>Licenciada en Artes Digitales</p>
      <p>Edición de video | Filmmaking | Fotografía | Diseño</p>
    </header>
  );
}
