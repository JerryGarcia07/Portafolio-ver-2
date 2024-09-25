/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import Proyectweb from "../api/db.json";
import ProyectMaque from "../api/db_maque.json";

const LenguageContext = createContext();
// const initialLenguage = "es";
const initialProyectEs = Proyectweb["ProyectWebEs"].slice().reverse();
const initialProyectEn = Proyectweb["ProyectWebEn"].slice().reverse();
const initialMaqueEs = ProyectMaque["ProyectMaqEs"].slice().reverse();
const initialMaqueEn = ProyectMaque["ProyectMaqEn"].slice().reverse();
const translations = {
  es: {
    homeTitle: "Hola, Soy Jerry Garcia",
    homeSubTitle: "Soy",
    homeSubTitle1: "Programador Front-End",
    homeContent:
      "Soy egresado de Ingeniería de Sistemas (UCV) con experiencia en desarrollo web a través de prácticas en la USS y Ocassione. Me considero perseverante, comprometido, creativo y con habilidades en trabajo en equipo y comunicación. Actualmente, busco desarrollar una línea de carrera en el ámbito web.",
    homebutton: "Ver mi CV",
    navHome: "Home",
    navProyect: "Proyectos",
    navSkill: "Habilidades",
    navforma: "Formación",
    proyectTitle: "Proyectos",
    proyectWeb: "Webs",
    proyectLayout: "Maquetación",
    proyectGame: "Videojuegos",
    skillTitle: "Habilidades y herramientas",
    formaTitle: "Formación",
    formaSubtitle01: "Educación",
    formaSubtitle02: "Experiencia",
    formList01: [
      {
        id: "ed01",
        carrera: "Ingeneria de Sistema",
        lugar: "Univercidad césar vallejo, Lima",
        fecha: "(Jun-2014/Jun-2023)",
      },
      {
        id: "ed02",
        carrera: "Diseñador Gráfico",
        lugar: "Instituto americano, Lima.",
        fecha: "(Ene-2012/Jun-2014)",
      },
    ],
    formList02: [
      {
        id: "wo01",
        trabajo: "Desarrollador de software",
        empresa: "Universidad Señor de Sipan (2022)",
        area: "Programador front-end, maquetador del software y diseñador.",
        tecno: "Unreal engine, Photoshop, Illustrator y Figma.",
      },
      {
        id: "wo02",
        trabajo: "Desarrollador web",
        empresa: "Ocassione (2019) - E-commerce",
        area: "Programador front-end, edición de fotografías, actualización de la base de datos y  maquetación de la web.",
        tecno: "Photoshop, html, css, JavaScript, MySql y WordPress.",
      },
      {
        id: "wo03",
        trabajo: "Desarrollador front-end",
        empresa: "Sociable oft (2018) - Servicio de Desarrollo Web",
        area: "Programador front end, maquetación web, diseñador y edición de fotografías .",
        tecno: "Photoshop, Illustrator, Abode XD, html, css y JavaScript.",
      },
      {
        id: "wo04",
        trabajo: "Desarrollador de software",
        empresa: "Proyecto Personal (2021-2022)",
        area: "Programador front-end, maquetación y diseño del software.",
        tecno: "Unreal engine, photoshop, illustrator y figma.",
      },
    ],
    footer: "©2024 | Diseñado y codificado por Jerry Garcia",
    technoligi: "Tecnologías",
    viewWeb: "Ir a la web",
    viewgit: "Ir a github",
    viewLayout: "ver maquetación",
    rol: "Rol",
  },
  en: {
    homeTitle: "hello, I am Jerry",
    homeSubTitle: "I am",
    homeSubTitle1: "Front End developer",
    homeContent:
      "I am a graduate of the Systems Engineering degree at the UCV. Over the last year, I have applied self-learning to specialize in Frontend. I did an internship at Sociable-Oft and occasionally worked as a web developer. I consider myself a persevering, cheerful, patient person with teamwork skills. ",
    homebutton: "Download CV",
    navHome: "Home",
    navProyect: "Projects",
    navSkill: "Skills",
    navforma: "Education",
    proyectTitle: "Projects",
    proyectWeb: "Webs",
    proyectLayout: "Layout",
    proyectGame: "Video Games",
    skillTitle: "Skills & tools",
    formaTitle: "Education",
    formaSubtitle01: "Academic training",
    formaSubtitle02: "Experience",
    formList01: [
      {
        id: "ed01",
        carrera: "Systems engineer",
        lugar: "Univercidad césar vallejo, Lima",
        fecha: "(Jun-2014/Dic-2022)",
      },
      {
        id: "ed02",
        carrera: "Graphic designer",
        lugar: "Instituto americano, Lima.",
        fecha: "(Ene-2012/Jun-2014)",
      },
    ],
    formList02: [
      {
        id: "wo01",
        trabajo: "Software developer",
        empresa: "Universidad Señor de Sipan (2022)",
        area: "Front-end programmer, layout and software design.",
        tecno: "Unreal engine, Photoshop, Illustrator y Figma.",
      },
      {
        id: "wo02",
        trabajo: "Web developer",
        empresa: "Ocassione (2019) - E-commerce",
        area: "Front-end programmer, photo editing and upgrade of data base.",
        tecno: "Unreal engine, Photoshop, Illustrator y Figma.",
      },
      {
        id: "wo03",
        trabajo: "Front-end developer",
        empresa: "Sociable oft (2018) - Web Development Service",
        area: "Front-end programmer, web layout and photo editing.",
        tecno: "Photoshop, Illustrator, Abode XD, html, css y JavaScript.",
      },
      {
        id: "wo04",
        trabajo: "Software developer",
        empresa: "Personal project (2021-2022)",
        area: "Front-end programmer, layout and software design.",
        tecno: "Unreal engine, photoshop, illustrator y figma.",
      },
    ],
    footer: "©2024 | Designed and coded by Jerry Garcia",
    technoligi: "Technologies",
    viewWeb: "go to website",
    viewgit: "go to github",
    viewLayout: "see layout",
    rol: "Role",
  },
};

const LenguageProvider = ({ children }) => {
  const [texts, setText] = useState(translations.es);
  const [proWeb, setProWeb] = useState(initialProyectEs);
  const [proMaque, setProMaque] = useState(initialMaqueEs);

  useEffect(() => {
    if (localStorage.getItem("lenguage") === null) {
      localStorage.setItem("lenguage", "es");
    }

    if (localStorage.getItem("lenguage") === "es") espanol();

    if (localStorage.getItem("lenguage") === "en") english();
  }, []);

  const espanol = () => {
    setText(translations.es);
    setProWeb(initialProyectEs);
    setProMaque(initialMaqueEs);
    localStorage.setItem("lenguage", "es");
  };

  const english = () => {
    setText(translations.en);
    setProWeb(initialProyectEn);
    setProMaque(initialMaqueEn);
    localStorage.setItem("lenguage", "en");
  };

  const handleLanguage = (e) => {
    if (e.target.value === "es") {
      espanol();
    } else {
      english();
    }
  };
  const data = { texts, handleLanguage, proWeb, proMaque };
  return (
    <LenguageContext.Provider value={data}>{children}</LenguageContext.Provider>
  );
};
export { LenguageProvider };
export default LenguageContext;
