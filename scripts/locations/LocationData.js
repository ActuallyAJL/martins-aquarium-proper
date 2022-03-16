const locationCollection = [
    {
        catchOrder: 0,
        image: "https://upload.wikimedia.org/wikipedia/commons/8/89/National_Park_de_Tiede%2C_Tenerife%2C_Canary_Islands%2C_Spain_-_panoramio.jpg",
        species: "Grimpoteuthis umbellata",
        length: 15,
        location: "Dumbo Octopus",
        properName: "Brendan Carlisle",
        name: "Canary Islands",
        diet: "carnivore",
        webData: {
            class: "location",
            id: "canary",
            link: "https://en.wikipedia.org/wiki/Canary_Islands"
        }
    },
    {
        catchOrder: 1,
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Brown_bear_AK.jpg",
        species: "Lontra canadensis",
        length: 28,
        location: "North American River Otter",
        properName: "Lucius and Franco O'Doyle",
        name: "Kodiak Island",
        diet: "carnivore",
        webData: {
            class: "location",
            id: "kodiak",
            link: "https://en.wikipedia.org/wiki/Kodiak_Island"
        }
    },
    {
        catchOrder: 2,
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Radiocentro_CMQ_Building._Havana%2C_Cuba.jpg",
        species: "Diploria labyrinthiformis",
        length: 72,
        location: "Brain Coral",
        properName: "MODOK",
        name: "Havana",
        diet: "symbiotroph",
        webData: {
            class: "location",
            id: "havana",
            link: "https://en.wikipedia.org/wiki/Havana"
        }
    },
    {
        catchOrder: 3,
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Points_triples_entre_plaques_continentales.svg",
        species: "Chrysomallon squamiferum",
        length: 3,
        location: "Scaly-Foot Snail",
        properName: "Mickey Frankfurt",
        name: "Rodrigues Triple Junction",
        diet: "symbiotroph",
        webData: {
            class: "location",
            id: "junction",
            link: "https://en.wikipedia.org/wiki/Triple_junction#:~:text=The%20junction%20of%20the%20Red%20Sea%2C%20the%20Gulf,only%20Ridge-Ridge-Ridge%20%28R-R-R%29%20triple%20junction%20above%20sea%20level."
        }
    },
    {
        catchOrder: 4,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Bristol_Bay_shore.jpg",
        species: "Lithodes longispina",
        length: 65,
        location: "Spiny Stone King Crab",
        properName: "Lief Lutz",
        name: "Bristol Bay",
        diet: "omnivore",
        webData: {
            class: "location",
            id: "bristol",
            link: "https://en.wikipedia.org/wiki/Bristol_Bay"
        }
    },
    {
        catchOrder: 5,
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Sand_beaches_of_northern_Roebuck_Bay%2C_Broome%2C_Western_Australia.jpg",
        species: "Hydrophis platurus",
        length: 23,
        location: "Yellow-Bellied Sea Snake",
        properName: "Leopold Moritz",
        name: "Roebuck Bay",
        diet: "carnivore",
        webData: {
            class: "location",
            id: "sears",
            link: "https://en.wikipedia.org/wiki/Roebuck_Bay"
        }
    },
    {
        catchOrder: 6,
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Mt_Rainier_distant-600px.jpg",
        species: "Pycnopodia helianthoides",
        length: 33,
        location: "Sunflower sea star",
        properName: "Adam Milhouse",
        name: "Puget Sound",
        diet: "carnivore",
        webData: {
            class: "location",
            id: "puget",
            link: "https://en.wikipedia.org/wiki/Puget_Sound"
        }
    },
    {
        catchOrder: 7,
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/1958_photo_of_Zimmer_trailer_in_a_trailer_park_in_Tampa_Florida.jpg",
        species: "Gephyrocapsa oceanica",
        length: 0.00019685,
        location: "Green Algae",
        properName: "Dwayne Johnson",
        name: "Back Yard",
        diet: "photoautroph",
        webData: {
            class: "locatiion",
            id: "yard",
            link: "https://en.wikipedia.org/wiki/Trailer_park"
        }
    },
]

// This is new code. Add this.
export const getLocation = () => {
    return locationCollection
}