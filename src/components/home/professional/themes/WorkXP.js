import AnimatedContent from "./AnimatedContent";

const WorkXP = () => {
  const workSteps = [
    {
      site: "Niku Tecnología S.A. de C.V.",
      name: "React JS & React Native Developer",
      date: "Today",
      delay: 1500,
    },
    {
      site: "Armatis Ic, French Software Development Company France",
      name: "React Native Developer",
      date: "2020",
      delay: 700,
    },
  ];

  return <AnimatedContent contentRender={workSteps} />;
};

export default WorkXP;
