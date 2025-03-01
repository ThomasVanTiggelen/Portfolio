import React, { useState } from "react";
import styles from "../styles/ParchmentAnimation.module.css";

const ParchmentAnimation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.parchmentContainer} onClick={handleOpen}>
      <div className={`${styles.parchment} ${isOpen ? styles.open : ""}`}>
        <div className={styles.content}>
          <h2>Over de Stage</h2>
          <p>
            Tijdens mijn stage werk ik aan een afsluitend project dat mij
            voorbereidt op de arbeidsmarkt. Mijn doel is om als toekomstige web-
            en applicatieontwikkelaar zelfstandig taken uit te voeren en
            waardevolle ervaring op te doen. Hierbij focus ik op
            kerncompetenties zoals samenwerking, technisch ontwerp,
            applicatieontwikkeling, testen en documentatie.
          </p>

          <h2>De Bedoeling van deze Website/Blog</h2>
          <p>
            Deze website dient als een digitaal portfolio waar ik mijn
            stage-ervaringen deel. Via de blog houd ik je op de hoogte van mijn
            voortgang, uitdagingen en successen. Elke week post ik een update
            met de highlights van mijn stage, zoals technische uitdagingen,
            trotsmomenten en nieuwe technologieën.
          </p>

          <h2>Waarom deze Website?</h2>
          <p>
            Deze website is niet alleen een reflectie van mijn stage, maar ook
            een manier om mijn groei als ontwikkelaar te documenteren. Het is
            een plek waar ik mijn ervaringen kan delen, van mijn fouten kan
            leren en mijn successen kan vieren. Na mijn stage kan ik dit
            portfolio gebruiken bij sollicitaties om mijn vaardigheden en
            ervaringen te laten zien.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParchmentAnimation;
