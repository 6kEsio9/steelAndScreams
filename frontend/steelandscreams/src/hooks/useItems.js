import { useState, useEffect } from 'react';

import * as itemService from '../services/itemService';

const useItems = (arg) => {
    const [state, setState] = useState([]);

    useEffect(() => {
        if (arg == null) {
            itemService.getAll()
                .then(res => setState(res))
                .catch(err => console.error(err))
        } else {
            itemService.getOne(arg)
                .then(res => setState(res))
                .catch(err => console.error(err))
        }
    }, [arg])

    const setItem = (data) => {
        setState(data);
    };

    return [state, setItem];
};

export default useItems;