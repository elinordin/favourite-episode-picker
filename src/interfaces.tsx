
export interface Episodes {
    all: Episode[]
    favourites: Episode[]
}

export interface Episode {
    id: number,
    image: {medium: string, original: string},
    name: string,
    season: number,
    number: number
}

 export interface Action {
    type: string
    payload: Episode[] | any
}