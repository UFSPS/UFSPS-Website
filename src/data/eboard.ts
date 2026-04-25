interface Profile {
    name: string;
    githubLink?: string;
    linkedinLink?: string;
}

export const eboardProfiles: Record<string, Profile> = 
{
    "President": {
        name: "Raul Valle",
        githubLink: "https://github.com/Jibby2k1",
        linkedinLink: "https://www.linkedin.com/in/raul-valle1/"
    },
    "Vice President": {
        name: "Matheus Kunzler Maldaner"
    },
    "Chief of Operations": {
        name: "Tiffany Huang",
        githubLink: "https://github.com/narcistiq",
        linkedinLink: "https://www.linkedin.com/in/tiffanyhuang1010/"
    },
    "Chief of Education": {
        name: "Awwab Azam",
        githubLink: "https://github.com/narcistiq",
        linkedinLink: "https://www.linkedin.com/in/tiffanyhuang1010/"
    },
     "Chief of Research": {
        name: "Jack Payne",
        githubLink: "https://github.com/JackPayne123",
        linkedinLink: "https://www.linkedin.com/in/jack-payne-5968b41a5/"
    },
    "Chief of Networking": {
        name: "Luke Slaughter",
        linkedinLink: "https://www.linkedin.com/in/luke-slaughter/"
    },
    "Treasurer": {
        name: "Divij Goyal",
        githubLink: "https://github.com/DIVIJGOYAL7080",
        linkedinLink: "https://www.linkedin.com/in/divijgoyal/"
    }
}
