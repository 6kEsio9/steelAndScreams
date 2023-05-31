import { createContext, useState, useEffect } from 'react';

import * as itemService from '../services/itemService';

const ItemContext = createContext();

export const ItemProvider = ({
    children
}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        itemService.getAll()
            .then(res => setItems(res))
            .catch(err => console.error(err))
    });

    return (
        <ItemContext.Provider value={{ items, setItems }}>
            {children}
        </ItemContext.Provider>
    )
};

export default ItemContext;