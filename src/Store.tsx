import React from "react";

interface episodes {
    all: [],
    favourites: []
}

const initialState:episodes = {all: [], favourites: []}

export const Store = React.createContext<episodes>(initialState)

function reducer():void {
    //TBC
}

export function StoreProvider(props: any):JSX.Element {
    return <Store.Provider value={initialState}>{props.children}</Store.Provider>
}