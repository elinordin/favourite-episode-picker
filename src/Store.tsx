import React, {useReducer} from "react";
import { Episodes, Action } from './interfaces'

const initialState:Episodes = {all: [], favourites: []}

export const Store = React.createContext<Episodes | any>(initialState)

function reducer(episodes: Episodes, action: Action):Episodes {
    switch (action.type) {
        case 'FETCH_DATA': return {...episodes, all: action.payload}
        case 'ADD_FAV': return {...episodes, favourites: [...episodes.favourites, action.payload]}
        case 'REMOVE_FAV': return {...episodes, favourites: [...episodes.favourites.filter(episode => episode != action.payload)]}
        default: return episodes
    }
}

export function StoreProvider(props: any):JSX.Element {
    const [episodes, dispatch] = useReducer(reducer, initialState)
    return <Store.Provider value={{episodes, dispatch}}>{props.children}</Store.Provider>
}