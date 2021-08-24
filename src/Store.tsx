import React from "react";

export const Store = React.createContext({})

function reducer():void {
    //TBC
}

export function StoreProvider(props: any):JSX.Element {
    return <Store.Provider value='test'>{props.children}</Store.Provider>
}