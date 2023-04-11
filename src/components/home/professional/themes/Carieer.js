import AnimatedContent from "./AnimatedContent";

const Carieer = () => {
  const carieerSteps = [
    {
      site: "Universidad Tecnológica de Puebla",
      name: "Ingeniería en Desarrollo y Gestión de Software",
      date: "2022",
      delay: 1900,
    },
    {
      site: "Institut Universitaire Technologique du Littoral Côté d'Oppale (ULCO Calais)",
      name: "Licence Professionnelle en Développement Internet et Mobile",
      date: "2020",
      delay: 1350,
    },
    {
      site: "Universidad Tecnológica de Puebla",
      name: "TSU en en Tecnologías de la Información y Comunicación Área Sistemas Informáticos",
      date: "2019",
      delay: 700,
    },
  ];

  return <AnimatedContent contentRender={carieerSteps} />;
};

export default Carieer;
