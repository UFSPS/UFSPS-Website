const images: string[] = Array.from({ length: 11 }, (_, i) =>
  new URL(`../assets/past/img${i + 1}.png`, import.meta.url).href
);

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
    title: "Self Attention And Transformer Models and Scratch Workshop",
    location: "Artificial Intelligence and Research Institute",
    date: "November 20, 2025",
    time: "4:30 PM",
    description: "An introduction to core machine learning concepts and algorithms. We'll cover supervised and unsupervised learning, model evaluation techniques, and walk through real-world applications in physics and engineering. By the end, you'll know how to select the right algorithm for your dataset and interpret model performance metrics. No prior ML experience required — just bring your laptop and curiosity.",
    image: images[0]!,
  },
  {
    title: "Real Analysis Workshop",
    location: "Artificial Intelligence and Research Institute",
    date: "October 13, 2025",
    time: "5:30 PM",
    description: "Learn how to use Python for scientific computing and research. This workshop covers NumPy, SciPy, and Matplotlib for data analysis, simulation, and visualization of experimental results. We'll also introduce Jupyter notebooks as a workflow tool and show you how to automate repetitive data processing tasks. Perfect for anyone transitioning from MATLAB or starting fresh with Python.",
    image: images[1]!,
  },
  {
    title: "Analysis of Boolean Functions",
    location: "Artificial Intelligence and Research Institute",
    date: "November 4, 2025",
    time: "5:30 PM",
    description: "A hands-on workshop covering the fundamentals of neural networks. Build and train your own models from scratch, understand backpropagation, activation functions, and loss optimization. We'll walk through a complete example using PyTorch and discuss common pitfalls like overfitting and vanishing gradients. You'll leave with a working classifier you can extend for your own projects.",
    image: images[2]!,
  },
  {
    title: "10x Your Workflow With Claude Code Workshop",
    location: "Artificial Intelligence and Research Institute",
    date: "October 29, 2025",
    time: "5:00-6:00pm",
    description: "A beginner-friendly introduction to quantum computing principles. Explore qubits, superposition, entanglement, and quantum gates while learning how they differ from classical computation. We'll run simple quantum circuits using Qiskit and discuss the current state of quantum hardware. No quantum mechanics background needed — we start from the basics and build up.",
    image: images[3]!,
  },
  {
    title: "Build Transformers from Scratch",
    location: "Artificial Intelligence and Research Institute",
    date: "October 5, 2025",
    time: "2:00 PM",
    description: "Learn to build transformer models from the ground up. We'll implement attention mechanisms, positional encodings, and multi-head attention layers step by step. You'll understand how GPT-style architectures work internally and gain practical experience coding each component. By the end, you'll have a minimal transformer that can process sequential data.",
    image: images[4]!,
  },
  {
    title: "Physically Interpretable World Models",
    location: "Artificial Intelligence & Informatics Research Institute",
    date: "November 21, 2025",
    time: "6:00 PM",
    description: "Ever wondered why calculus is essential in physics? Find out here as we explore derivatives, integrals, and differential equations through real-world physics problems. We'll connect mathematical concepts to motion, electromagnetism, and thermodynamics. Interactive problem-solving sessions will help solidify your understanding of these foundational tools.",
    image: images[5]!,
  },
  {
    title: "Professional Development Workshop",
    location: "UF Artificial Intelligence and Informatics Research Institute",
    date: "November 22, 2025",
    time: "6:00 PM",
    description: "Exploring randomness, probability, and stochastic processes. Dive into Monte Carlo methods, Markov chains, and how randomness underpins modern physics simulations. We'll code up random walk simulations and compare computational results with analytical predictions. This workshop bridges the gap between abstract probability theory and practical computational tools.",
    image: images[6]!,
  },
  {
    title: "Hierarchical Linear Dynamic System",
    location: "Informatics Institute",
    date: "September 24, 2025",
    time: "7:00 PM",
    description: "Join our workshop on physically interpretable machine learning models. Learn how to build ML systems that respect physical laws and produce scientifically meaningful predictions. We'll cover physics-informed neural networks (PINNs), symmetry-preserving architectures, and constraint-based training. Ideal for anyone interested in applying ML to scientific research responsibly.",
    image: images[7]!,
  },
  {
    title: "Real Analysis Workshop",
    location: "UF Artificial Intelligence and Informatics Research Institute",
    date: "October 14, 2025",
    time: "5:00 PM",
    description: "Come discuss the latest research papers with fellow members. This session features papers on condensed matter physics and computational methods in quantum systems. Each presenter gives a brief summary followed by group discussion and critical analysis. It's a great way to stay current with the literature and practice communicating complex ideas.",
    image: images[8]!,
  },
  {
    title: "Stochastic Noise and Methods",
    location: "Artificial Intelligence and Informatics Research Institute",
    date: "November 18, 2025",
    time: "5:00 PM",
    description: "Ready to turn noise into meaningful data? Learn signal processing techniques including Fourier transforms, filtering, and spectral analysis for experimental physics. We'll work with real noisy datasets and apply denoising algorithms to extract clean signals. You'll also learn about windowing functions, sampling theory, and how to avoid common analysis mistakes.",
    image: images[9]!,
  },
  {
    title: "Boolean Function & Algorithm Analysis",
    location: "UF",
    date: "September 26, 2025",
    time: "6:00 PM",
    description: "The SPS workshop series is here — join us for the kickoff event. Meet the organizers, preview upcoming topics, and connect with fellow physics enthusiasts. We'll outline the semester's schedule and take suggestions for new workshop ideas. Refreshments will be provided — come hang out and get excited about what's ahead.",
    image: images[10]!,
  },
];