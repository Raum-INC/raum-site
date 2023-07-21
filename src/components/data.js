import Assets from "../assets";

const {
  services_build,
  services_40,
  sustainable,
  betterliving,
  transforming,
  test,
} = Assets;

export const services = [
  {
    id: 1,
    title: "4/5 people encounter issues renting houses in Nigeria.",
    description: `Finding a suitable home that is affordable, sustainable,
    and tailored to your unique needs can be a daunting task.
    The traditional housing market often falls short, with
    limited options, skyrocketing costs, and a lack of consideration
    for environmental impact.`,
    image: services_build,
    alt: "raum_services_image1",
  },
  {
    id: 2,
    title: "40% are left dissatisfied after their purchase.",
    description: `Don't settle for less when it comes to your home.
    With Raum, you have the power to find affordable,
    sustainable, and personalized housing options that align with your values and aspirations.`,
    image: services_40,
    alt: "raum_services_image2",
  },
  {
    id: 3,
    title: "40% are left dissatisfied after their purchase.",
    description: `Don't settle for less when it comes to your home.
    With Raum, you have the power to find affordable,
    sustainable, and personalized housing options that align with your values and aspirations.`,
    image: services_40,
    alt: "raum_services_image3",
  },
];

export const features = [
  {
    id: 1,
    title: `We believe \nin sustainable living`,
    description: `Raum offers eco-friendly homes designed to reduce environmental impact, promoting a greener future for you and the planet.
    No two individuals are alike, and your housing needs shouldn't be either. With Raum, you'll receive personalized recommendations tailored to your preferences, ensuring you find a home that suits your lifestyle and requirements.`,
    image: sustainable,
    link: "#",
    alt: "features images",
  },
  {
    id: 2,
    title: `The key to better\nliving`,
    description: `Raum offers eco-friendly homes designed to reduce environmental impact, promoting a greener future for you and the planet.
    No two individuals are alike, and your housing needs shouldn't be either. With Raum, you'll receive personalized recommendations tailored to your preferences, ensuring you find a home that suits your lifestyle and requirements.`,
    image: betterliving,
    link: "#",
    alt: "features images",
  },
  {
    id: 3,
    title: `Transforming the\nprocess`,
    description: `Raum offers eco-friendly homes designed to reduce environmental impact, promoting a greener future for you and the planet.
    No two individuals are alike, and your housing needs shouldn't be either. With Raum, you'll receive personalized recommendations tailored to your preferences, ensuring you find a home that suits your lifestyle and requirements.`,
    image: transforming,
    link: "#",
    alt: "features images",
  },
];
