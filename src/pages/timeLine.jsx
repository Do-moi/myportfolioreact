import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import GitHub from "@material-ui/icons/GitHub";
import "./timeLine.style.css";
const timeLine = () => {
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "rgb(33, 150, 243)" }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          date="2020 - présent"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<GitHub />}
        >
          <h3 className="vertical-timeline-element-title">
            Développeur Web freelance
          </h3>
          <h4 className="vertical-timeline-element-subtitle">MJ DEV</h4>
          <br />
          <ul>
            <li>
              Création de sites web (site vitrine, e-commerce, institutionnel,
              catalogue, Blog).
            </li>
            <li>Mise en place du cahier des charges</li>
            <li>Réservation nom de domaine et hébergement serveur</li>
            <li>Conception des pages avec liens vers les réseaux sociaux</li>
            <li>Installation de modules</li>
            <li>Formulaires de contact / Google Map</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentStyle={{ background: "white", color: "rgb(33, 150, 243)" }}
        >
          <h3 className="vertical-timeline-element-title">
            Titre Professionnel Développeur Web et Web Mobile - PARIS
          </h3>

          <br />
          <ul>
            <li>Obtention du titre</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentStyle={{ background: "white", color: "rgb(33, 150, 243)" }}
        >
          <h3 className="vertical-timeline-element-title">
            Teacher assistant Développement web
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            La Capsule - PARIS
          </h4>
          <br />
          <ul>
            <li>
              Accompagnement des étudiants dans la compréhension des bases du
              développement web (HTML, CSS, JS, React, ReactNative, Node.JS,
              Git, Github)
            </li>
            <li>
              Transmission des connaissances acquises aux nouveaux arrivants
              nécessitant sens de l’écoute, clarté et adaptabilité
            </li>
            <li>
              Renforcement et validation des connaissances acquises et bonnes
              pratiques
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentStyle={{ background: "white", color: "rgb(33, 150, 243)" }}
        >
          <h3 className="vertical-timeline-element-title">
            Formation Développeur Web et Web mobile Fullstack
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            La Capsule - PARIS
          </h4>
          <br />
          <ul>
            <li>Conception et prototypage d'applications web et mobile</li>
            <li>
              Programmation Front-end: HTML5/ CSS3/ JavaScript/ React/ React
              native/ Redux
            </li>
            <li>Programmation Back-end: Node.JS/ express</li>
            <li>Base de données: Mongo DB</li>
            <li>Workflow: GIT/ Github</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2019"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentStyle={{ background: "white", color: "rgb(33, 150, 243)" }}
        >
          <h3 className="vertical-timeline-element-title">
            Formations OpenClassrooms
          </h3>
          <h4 className="vertical-timeline-element-subtitle">PARIS</h4>
          <ul>
            <li>Conception site avec WordPress</li>
            <li>Programmation Front-end: HTML5/ CSS3 </li>
            <li>Programmation avec PHP et MySQL</li>
            <li>Programmation avec JavaScript </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default timeLine;
