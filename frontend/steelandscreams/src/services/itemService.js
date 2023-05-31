const url = 'http://localhost:3030/items';

exports.getAll = () => {
    return fetch(url)
        .then(res => res.json())
};

exports.getOne = (itemId) => {
    return fetch(`${url}/${itemId}`)
        .then(res => res.json())
};