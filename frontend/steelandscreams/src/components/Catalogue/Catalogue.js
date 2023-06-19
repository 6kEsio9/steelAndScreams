import { Item } from './Item';

import { Link } from 'react-router-dom';

import useItems from '../../hooks/useItems';

export const Catalogue = () => {

    const [ items, setItems ] = useItems();

    return (
        <div className="catalogue">
            {items ? items.map(x => <Item key={x._id} item={x}></Item>) : <h2>Noting available in stock.</h2>}
        </div>
    );
};