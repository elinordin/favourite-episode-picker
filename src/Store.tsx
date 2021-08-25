import React, {useReducer} from "react";

interface Episodes {
    all: Episode[]
    favourites: Episode[]
}

interface Episode {
    id: number,
    image: {medium: string, original: string},
    name: string,
    season: number,
    number: number
  }

interface Action {
    type: string
    payload: any
}

const initialState:Episodes = {all: [], favourites: []}

export const Store = React.createContext<Episodes | any>(initialState)

function reducer(episodes: Episodes, action: Action):Episodes {
    switch (action.type) {
        case 'FETCH_DATA': return {...episodes, all: action.payload}
        case 'ADD_FAV': return {...episodes, favourites: [...episodes.favourites, action.payload]}
        default: return episodes
    }
}

export function StoreProvider(props: any):JSX.Element {
    const [episodes, dispatch] = useReducer(reducer, initialState)
    return <Store.Provider value={{episodes, dispatch}}>{props.children}</Store.Provider>
}