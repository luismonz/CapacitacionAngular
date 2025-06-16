import type { HeroModel } from "../Models/HeroModel";

export const initialHeroes: HeroModel[] = [
    {
        id: 1,
        name: "Spider-Man",
        realName: "Peter Parker",
        powers: ["Agility", "Wall-Crawling", "Spider-Sense"],
        affiliation: "Avengers",
        firstAppearance: "Amazing Fantasy #15",
        image: "spiderman.jpg"
    },
    {
        id: 2,
        name: "Iron Man",
        realName: "Tony Stark",
        powers: ["Powered Armor", "Genius Intellect"],
        affiliation: "Avengers",
        firstAppearance: "Tales of Suspense #39",
        image: "ironman.jpg"
    }
]