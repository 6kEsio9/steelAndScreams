import { useState, useEffect } from 'react';

import * as itemService from '../services/itemService';

const useItems = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        itemService.getAll()
            .then(res => setState(res))
            .catch(err => console.error(err))
    }, [])

    const setItem = (data) => {
        setState(data);
    };

    return [state, setItem];
};

export default useItems;