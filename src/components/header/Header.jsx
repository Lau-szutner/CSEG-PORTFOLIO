import styled from "./header.module.css";

export default function Header() {
  return (
    <header className={`container col-8 my-5 ${styled.header}`}>
      <div className={styled.div}>
        <h1 className={`${styled.h1}`}>CSEG</h1>
        <h2 className={`${styled.h2} `}>Catalina Segalini</h2>
      </div>
      <p className={`${styled.p1} ${styled.fadeIn}`}>
        Licenciada en Artes Digitales
      </p>
      <p className={styled.p2}>
        Edición de video | Filmmaking | Fotografía | Diseño
      </p>
    </header>
  );
}
