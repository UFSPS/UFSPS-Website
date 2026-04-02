interface Profile {
    name: string;
    term: string;
    bio: string;
    image: string;
    githubLink?: string;
    linkedinLink?: string;
}

export const eboardProfiles: Record<string, Profile> = 
{
    "President": {
        name: "Raul Valle",
        term: "2025-2026",
        bio: "Leads chapter direction across workshops, research-facing programming, and community building for students who want a rigorous but approachable way into signal processing.",
        image: "/profiles/Raul Valle.jpg",
        githubLink: "https://github.com/Jibby2k1",
        linkedinLink: "https://www.linkedin.com/in/raul-valle1/"
    },
    "Vice President": {
        name: "Matheus Kunzler Maldaner",
        term: "2025-2026",
        bio: "Supports chapter strategy and technical programming, with a focus on keeping research-minded projects connected to accessible student-facing events.",
        image: "/profiles/Matheus Kunzler Maldaner.jpeg",
        githubLink: "https://github.com/matheusmaldaner",
        linkedinLink: "https://www.linkedin.com/in/matheusmaldaner/"
    },
    "Chief of Operations": {
        name: "Tiffany Huang",
        term: "2025-2026",
        bio: "Coordinates logistics and chapter operations so workshops, announcements, and community touchpoints stay consistent throughout the semester.",
        image: "/profiles/Tiffany Huang.jpeg",
        githubLink: "https://github.com/narcistiq",
        linkedinLink: "https://www.linkedin.com/in/tiffanyhuang1010/"
    },
    "Chief of Education": {
        name: "Awwab Azam",
        term: "2025-2026",
        bio: "Develops educational programming and learning pathways that help members build signal-processing fluency through approachable, technically serious workshops.",
        image: "/profiles/Awwab Azam.jpeg",
        githubLink: "https://github.com/kaddu341",
    },
    "Chief of Research": {
        name: "Jack Payne",
        term: "2025-2026",
        bio: "Connects chapter activity to research-facing projects and helps shape opportunities for members who want to explore deeper technical work.",
        image: "/profiles/Jack Payne.jpeg",
        githubLink: "https://github.com/JackPayne123",
        linkedinLink: "https://www.linkedin.com/in/jack-payne-5968b41a5/"
    },
    "Chief of Networking": {
        name: "Luke Slaughter",
        term: "2025-2026",
        bio: "Builds relationships across the chapter community and supports programming that helps members meet collaborators, mentors, and peers across disciplines.",
        image: "/profiles/Luke Slaughter.jpeg",
        githubLink: "https://github.com/LukeSlaughter"
    },
    "Treasurer": {
        name: "Divij Goyal",
        term: "2025-2026",
        bio: "Manages chapter finances and operational planning so events, resources, and chapter initiatives stay organized and sustainable.",
        image: "/profiles/Divij Goyal.jpeg",
        githubLink: "https://github.com/DIVIJGOYAL7080",
        linkedinLink: "https://www.linkedin.com/in/divijgoyal/"
    }
}
