import img1 from '../assets/past/quantum.png';
import img2 from '../assets/past/ai_ethics.png';
import img3 from '../assets/upcoming/robotics.png';
import img4 from '../assets/upcoming/data_science.png';

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
    title: "Machine Learning Basics",
    location: "UF",
    date: "January 10, 2026",
    time: "2:00 PM",
    description: "An introduction to core machine learning concepts and algorithms.",
    image: img1,
  },
  {
    title: "Python for Scientists",
    location: "UF",
    date: "January 25, 2026",
    time: "3:00 PM",
    description: "Learn how to use Python for scientific computing and research.",
    image: img2,
  },
  {
    title: "Neural Networks 101",
    location: "UF",
    date: "February 8, 2026",
    time: "1:00 PM",
    description: "A hands-on workshop covering the fundamentals of neural networks.",
    image: img1,
  },
  {
    title: "Intro to Quantum Computing",
    location: "UF",
    date: "March 1, 2026",
    time: "2:00 PM",
    description: "A beginner-friendly introduction to quantum computing principles.",
    image: img2,
  },
  {
    title: "Advanced AI Ethics",
    location: "UF",
    date: "March 15, 2026",
    time: "3:00 PM",
    description: "Discussion on ethical considerations in artificial intelligence.",
    image: img1,
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
