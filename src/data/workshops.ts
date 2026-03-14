import img1 from '../assets/past/quantum.png';
import img2 from '../assets/past/ai_ethics.png';
import img3 from '../assets/upcoming/robotics.png';
import img4 from '../assets/upcoming/data_science.png';
import img5 from '../assets/past/build_transformers_from_the.jpg';
import img6 from '../assets/past/ever_wondered_why_calculus.jpg';
import img7 from '../assets/past/how_random_is_random.jpg';
import img8 from '../assets/past/join_our_physically_interpretable.jpg';
import img9 from '../assets/past/journal_club_today_come.jpg';
import img10 from '../assets/past/ready_to_turn_noise.jpg';
import img11 from '../assets/past/sps_workshop_series_is.jpg';
import img12 from '../assets/past/theres_no_better_way.jpg';
import img13 from '../assets/past/this_thursday_join_the.jpg';
import img14 from '../assets/past/were_so_back_join.jpg';
import img15 from '../assets/past/workshop_series_tomorrow_originally.jpg';
import img16 from '../assets/past/workshop_this_friday_for.jpg';
import img17 from '../assets/past/workshop_wednesday_10x_your.jpg';
import img18 from '../assets/past/your_next_job_is.jpg';
import img19 from '../assets/past/part_2_of_the.jpg';
import img20 from '../assets/past/join_us_for_an.jpg';
import img21 from '../assets/past/member_spotlight_fernando_e.jpg';
import img22 from '../assets/past/sps_board_positions_open.jpg';
import img23 from '../assets/past/jboard_applications_due_today.jpg';

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
    description: "An introduction to core machine learning concepts and algorithms. We'll cover supervised and unsupervised learning, model evaluation techniques, and walk through real-world applications in physics and engineering. By the end, you'll know how to select the right algorithm for your dataset and interpret model performance metrics. No prior ML experience required — just bring your laptop and curiosity.",
    image: img1,
  },
  {
    title: "Python for Scientists",
    location: "UF",
    date: "January 25, 2026",
    time: "3:00 PM",
    description: "Learn how to use Python for scientific computing and research. This workshop covers NumPy, SciPy, and Matplotlib for data analysis, simulation, and visualization of experimental results. We'll also introduce Jupyter notebooks as a workflow tool and show you how to automate repetitive data processing tasks. Perfect for anyone transitioning from MATLAB or starting fresh with Python.",
    image: img2,
  },
  {
    title: "Neural Networks 101",
    location: "UF",
    date: "February 8, 2026",
    time: "1:00 PM",
    description: "A hands-on workshop covering the fundamentals of neural networks. Build and train your own models from scratch, understand backpropagation, activation functions, and loss optimization. We'll walk through a complete example using PyTorch and discuss common pitfalls like overfitting and vanishing gradients. You'll leave with a working classifier you can extend for your own projects.",
    image: img1,
  },
  {
    title: "Intro to Quantum Computing",
    location: "UF",
    date: "March 1, 2026",
    time: "2:00 PM",
    description: "A beginner-friendly introduction to quantum computing principles. Explore qubits, superposition, entanglement, and quantum gates while learning how they differ from classical computation. We'll run simple quantum circuits using Qiskit and discuss the current state of quantum hardware. No quantum mechanics background needed — we start from the basics and build up.",
    image: img2,
  },
  {
    title: "Build Transformers from Scratch",
    location: "UF",
    date: "October 5, 2025",
    time: "2:00 PM",
    description: "Learn to build transformer models from the ground up. We'll implement attention mechanisms, positional encodings, and multi-head attention layers step by step. You'll understand how GPT-style architectures work internally and gain practical experience coding each component. By the end, you'll have a minimal transformer that can process sequential data.",
    image: img5,
  },
  {
    title: "Why Calculus Matters",
    location: "UF",
    date: "October 12, 2025",
    time: "3:00 PM",
    description: "Ever wondered why calculus is essential in physics? Find out here as we explore derivatives, integrals, and differential equations through real-world physics problems. We'll connect mathematical concepts to motion, electromagnetism, and thermodynamics. Interactive problem-solving sessions will help solidify your understanding of these foundational tools.",
    image: img6,
  },
  {
    title: "How Random is Random?",
    location: "UF",
    date: "October 19, 2025",
    time: "2:00 PM",
    description: "Exploring randomness, probability, and stochastic processes. Dive into Monte Carlo methods, Markov chains, and how randomness underpins modern physics simulations. We'll code up random walk simulations and compare computational results with analytical predictions. This workshop bridges the gap between abstract probability theory and practical computational tools.",
    image: img7,
  },
  {
    title: "Physically Interpretable ML",
    location: "UF",
    date: "October 26, 2025",
    time: "1:00 PM",
    description: "Join our workshop on physically interpretable machine learning models. Learn how to build ML systems that respect physical laws and produce scientifically meaningful predictions. We'll cover physics-informed neural networks (PINNs), symmetry-preserving architectures, and constraint-based training. Ideal for anyone interested in applying ML to scientific research responsibly.",
    image: img8,
  },
  {
    title: "Journal Club",
    location: "UF",
    date: "November 2, 2025",
    time: "3:00 PM",
    description: "Come discuss the latest research papers with fellow members. This session features papers on condensed matter physics and computational methods in quantum systems. Each presenter gives a brief summary followed by group discussion and critical analysis. It's a great way to stay current with the literature and practice communicating complex ideas.",
    image: img9,
  },
  {
    title: "Turning Noise into Signal",
    location: "UF",
    date: "November 9, 2025",
    time: "2:00 PM",
    description: "Ready to turn noise into meaningful data? Learn signal processing techniques including Fourier transforms, filtering, and spectral analysis for experimental physics. We'll work with real noisy datasets and apply denoising algorithms to extract clean signals. You'll also learn about windowing functions, sampling theory, and how to avoid common analysis mistakes.",
    image: img10,
  },
  {
    title: "SPS Workshop Series Kickoff",
    location: "UF",
    date: "November 16, 2025",
    time: "2:00 PM",
    description: "The SPS workshop series is here — join us for the kickoff event. Meet the organizers, preview upcoming topics, and connect with fellow physics enthusiasts. We'll outline the semester's schedule and take suggestions for new workshop ideas. Refreshments will be provided — come hang out and get excited about what's ahead.",
    image: img11,
  },
  {
    title: "Getting Started in Research",
    location: "UF",
    date: "November 23, 2025",
    time: "3:00 PM",
    description: "There's no better way to start your research journey than this workshop. We'll cover finding advisors, writing proposals, and navigating your first research project. Hear from students who have successfully landed research positions and learn what faculty look for in applicants. We'll also share resources for funding and summer research programs.",
    image: img12,
  },
  {
    title: "Thursday Physics Seminar",
    location: "UF",
    date: "November 30, 2025",
    time: "4:00 PM",
    description: "This Thursday, join the physics seminar and discussion. Guest speakers will present on particle physics and astrophysics topics followed by an open Q&A. This is a great opportunity to hear about cutting-edge research directly from experts in the field. Attendance counts toward SPS engagement hours for active members.",
    image: img13,
  },
  {
    title: "We're So Back — Welcome Meeting",
    location: "UF",
    date: "December 7, 2025",
    time: "2:00 PM",
    description: "We're so back! Join us for the welcome-back meeting. Catch up on what's planned for the semester, meet new members, and hear about exciting upcoming events. We'll also hold a brief intro session for anyone new to SPS and explain how to get involved. Stick around after for snacks and socializing with the team.",
    image: img14,
  },
  {
    title: "Workshop Series Recap",
    location: "UF",
    date: "December 14, 2025",
    time: "2:00 PM",
    description: "A recap of the workshop series — originally planned for tomorrow. Review key takeaways from the semester's workshops and share feedback for future topics. We'll highlight the most popular sessions and discuss what worked well. Your input will directly shape next semester's programming.",
    image: img15,
  },
  {
    title: "Friday Workshop",
    location: "UF",
    date: "December 21, 2025",
    time: "1:00 PM",
    description: "Workshop this Friday covering hands-on physics demos. Build circuits, measure magnetic fields, and explore optics experiments in an interactive lab setting. All materials are provided — just show up ready to experiment. This is one of our most popular events, so arrive early to grab a spot at a workstation.",
    image: img16,
  },
  {
    title: "10x Your Productivity",
    location: "UF",
    date: "January 4, 2026",
    time: "3:00 PM",
    description: "Workshop Wednesday — 10x your productivity with these tools and tips. Learn about LaTeX, Git, Jupyter notebooks, and other essential tools for physics students. We'll set up a complete development environment together and walk through common workflows. You'll leave with templates and configurations you can use immediately in your coursework and research.",
    image: img17,
  },
  {
    title: "Your Next Job in Physics",
    location: "UF",
    date: "January 11, 2026",
    time: "2:00 PM",
    description: "Your next job is closer than you think — career prep workshop. Cover resume building, interview skills, and networking strategies for physics careers in industry and academia. We'll review real job postings and practice tailoring applications to different roles. Alumni panelists will share their career journeys and answer your questions live.",
    image: img18,
  },
  {
    title: "Workshop Part 2",
    location: "UF",
    date: "January 18, 2026",
    time: "2:00 PM",
    description: "Part 2 of the continuing workshop series. Pick up where we left off and dive deeper into advanced topics with hands-on exercises and group discussions. We'll tackle more complex problems and introduce additional techniques that build on last session's foundations. Collaboration is encouraged — bring a friend and work through challenges together.",
    image: img19,
  },
  {
    title: "Open Lecture Night",
    location: "UF",
    date: "January 25, 2026",
    time: "6:00 PM",
    description: "Join us for an open lecture night with guest speakers. Faculty and graduate students share their latest research findings across multiple areas of physics. Topics range from condensed matter to cosmology, with something for everyone. Each talk is followed by informal discussion — a perfect chance to explore new research directions.",
    image: img20,
  },
  {
    title: "Member Spotlight: Fernando",
    location: "UF",
    date: "February 1, 2026",
    time: "2:00 PM",
    description: "Member spotlight featuring Fernando E. and his research. Learn about his work in computational physics and the path that led him to his current projects. Fernando will walk through his day-to-day workflow, share tips for getting started in research, and discuss the challenges he's faced along the way. Q&A session included at the end.",
    image: img21,
  },
  {
    title: "Board Positions Open",
    location: "UF",
    date: "February 8, 2026",
    time: "3:00 PM",
    description: "SPS board positions are open — learn how to apply. Find out about available roles, responsibilities, and how you can help shape the future of our chapter. Current board members will share their experiences and what they've gained from serving. Applications are straightforward — we'll walk you through the process step by step.",
    image: img22,
  },
  {
    title: "Board Applications Due",
    location: "UF",
    date: "February 15, 2026",
    time: "11:59 PM",
    description: "Board applications are due today — submit yours! Don't miss the deadline to join the leadership team and make an impact on the SPS community. Positions include president, vice president, treasurer, secretary, and committee chairs. This is your chance to develop leadership skills while contributing to a community you care about.",
    image: img23,
  },
  {
    title: "Advanced AI Ethics",
    location: "UF",
    date: "March 15, 2026",
    time: "3:00 PM",
    description: "Discussion on ethical considerations in artificial intelligence. Explore bias in algorithms, responsible AI development, and the societal implications of autonomous systems. We'll examine real case studies where AI caused unintended harm and debate potential regulatory frameworks. This session encourages open dialogue — all perspectives are welcome.",
    image: img1,
  },
  {
    title: "Robotics Lab",
    location: "UF",
    date: "April 5, 2026",
    time: "1:00 PM",
    description: "Hands-on robotics workshop with live demos. Program microcontrollers, assemble sensors, and build a simple autonomous robot during this interactive session. We'll use Arduino boards and provide all components — no prior robotics experience needed. Take home your creation and continue experimenting on your own time.",
    image: img3,
  },
  {
    title: "Data Science Fundamentals",
    location: "UF",
    date: "April 20, 2026",
    time: "4:00 PM",
    description: "Learn the basics of data analysis and visualization techniques. Work with real datasets using pandas and seaborn to uncover patterns and present findings effectively. We'll cover data cleaning, statistical summaries, and creating publication-quality plots. By the end, you'll have a complete analysis notebook you can adapt for your own data.",
    image: img4,
  },
];
