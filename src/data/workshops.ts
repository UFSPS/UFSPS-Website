import img1 from '../assets/Auto_Dependent_Surv_Band_Radar.png';
import img2 from '../assets/Connecting_Characteristic_Function_Info_Theory.png';
import img3 from '../assets/Internal_Neuro_Representations.png';
import img4 from '../assets/Neural_Event_Extraction.png';

export interface Workshop {
  title: string;
  location: string;
  date: string;
  time: string;
  description: string;
  image: string;
}

export const workshops: Workshop[] = [
  {
    title: "Intro to Quantum Computing",
    location: "UF",
    date: "March 1, 2026",
    time: "2:00 PM",
    description: "A beginner-friendly introduction to quantum computing principles.",
    image: img1,
  },
  {
    title: "Advanced AI Ethics",
    location: "UF",
    date: "March 15, 2026",
    time: "3:00 PM",
    description: "Discussion on ethical considerations in artificial intelligence.",
    image: img2,
  },
  {
    title: "Robotics Lab",
    location: "UF",
    date: "April 5, 2026",
    time: "1:00 PM",
    description: "Hands-on robotics workshop with live demos.",
    image: img3,
  },
  {
    title: "Data Science Fundamentals",
    location: "UF",
    date: "April 20, 2026",
    time: "4:00 PM",
    description: "Learn the basics of data analysis and visualization techniques.",
    image: img4,
  },
];
