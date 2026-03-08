interface Profile {
    name: string;
    githubLink?: string;
    linkedinLink?: string;
}

export const eboardProfiles: Record<string, Profile> = 
{
    "President": {
        "name": "Raul Valle",
        "githubLink": "https://github.com/Jibby2k1",
        "linkedinLink": "https://www.linkedin.com/in/raul-valle1/"
    },
    "Vice President": {
        "name": "Matheus Kunzler Maldaner",
        "githubLink": "https://github.com/matheusmaldaner",
        "linkedinLink": "https://www.linkedin.com/in/matheusmaldaner/"
    },
    "Chief of Operations": {
        "name": "Tiffany Huang",
        "githubLink": "https://github.com/narcistiq",
        "linkedinLink": "https://www.linkedin.com/in/tiffanyhuang1010/"
    },
    "Chief of Education": {
        "name": "Awwab Azam",
        "githubLink": "https://github.com/kaddu341",
        "linkedinLink": "https://www.linkedin.com/in/awwab-ali-azam-101a4b257"
    }
}