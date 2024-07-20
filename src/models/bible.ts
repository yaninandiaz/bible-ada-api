interface Language {
    id: string,
    name: string,
    nameLocal: string,
    script: string,
    scriptDirection: string
}

interface Country {
    id: string,
    name: string,
    nameLocal: string,
}

export interface Bible {
    id: string,
    dblId: string,
    relatedDbl: null,
    name: string,
    nameLocal: string,
    abbreviation: string,
    abreviationLocal: string,
    description: string,
    descriptionLocal: string,
    languaje: Language,
    countries: Country[],
    type: string,
}