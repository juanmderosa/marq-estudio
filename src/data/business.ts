export const business = {
  name: "Marq Estudio",
  professional: "Mariana Toledo",
  location: "Gral. Las Heras",
  phone: "+54 9 11 7363-6120",
  telephone: "+541173636120",
  whatsapp: "5491173636120",
};

export const services = [
  {
    id: "proyecto",
    title: "Proyecto arquitectónico",
    description: "Proyectos pensados según cada necesidad.",
    label: "Pensar el espacio",
    icon: "plan",
  },
  {
    id: "direccion",
    title: "Dirección de obra",
    description:
      "Seguimiento y coordinación del proceso constructivo para la materialización del proyecto.",
    label: "Del plano a la obra",
    icon: "build",
  },
  {
    id: "remodelaciones",
    title: "Remodelaciones y ampliaciones",
    description:
      "Intervenciones en espacios existentes para mejorar su funcionamiento o proyectar nuevas etapas.",
    label: "Nuevas posibilidades",
    icon: "expand",
  },
  {
    id: "planos",
    title: "Planos municipales",
    description:
      "Documentación técnica y gestión de trámites necesarios para habilitar o regularizar las obras.",
    label: "Documentación y gestión",
    icon: "document",
  },
  {
    id: "asesoramiento",
    title: "Asesoramiento profesional",
    description:
      "Acompañamiento para evaluar ideas, resolver dudas y tomar decisiones antes de comenzar una obra.",
    label: "Un punto de partida",
    icon: "talk",
  },
] as const;

export const serviceOptions: string[] = [
  ...services.map((service) => service.title),
  "Quiero asesoramiento",
];
