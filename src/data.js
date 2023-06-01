// import icons
import { IoIosCheckmarkCircle, IoIosArrowRoundForward } from "react-icons/io";

// import images
import Features1Img from "./assets/img/features-1.png";
import Features2Img from "./assets/img/features-2.png";
import ChairImg from "./assets/img/chair.png";
import BedImg from "./assets/img/bed.png";
import CupboardImg from "./assets/img/cupboard.png";
import LightingImg from "./assets/img/lighting.png";

export const hero = {
  title: " Maison Creative Simplifiez Vos Meubles",
  subtitle:
    "Do i have consent to record this meeting gain locaion, root-and-branch, review, nor game plan who’s the goto",
  buttonText: "Shop Now",
};

export const stats = [
  {
    value: "7",
    text: 'Année d"experience',
  },
  {
    value: "2",
    text: "Ouvert dans le pays",
  },
  {
    value: "10k+",
    text: "Meubles vendus",
  },
  {
    value: "260+",
    text: "Variantes de meubles",
  },
];

export const features = {
  image: <Features1Img />,
  title: "Nous créons votre maison plus esthétique",
  subtitle:
    "Furniture power est un logiciel en tant que service pour un systeme de gection d'entreprise polyvalent",
  buttonText: "Show Now",
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: "Valuation Services",
      subtitle:
        "Sometimes features require a short description.  This can be detailed description",
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: "Development of Furniture Models",
      subtitle:
        "Sometimes features require a short description.  This can be detailed description",
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: "The Best Furniture Manufacturer of your choice",
    subtitle:
      "Furnitre power is a software as services for multiperpose business management system, expecially for them who are running two or more business exploree the future Furnitre power is a software as services.",
  },
};

export const newInStore = {
  title: "New In Store Now",
  subtitle: "Get the latest items immediately with promo prices",
  link: "Check all",
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: "chair",
      image: <ChairImg />,
    },
    {
      name: "bed",
      image: <BedImg />,
    },
    {
      name: "cupboard",
      image: <CupboardImg />,
    },
    {
      name: "lighting",
      image: <LightingImg />,
    },
  ],
};
