const url = 'http://localhost:3030/items';

exports.getAll = () => {
    return fetch(url)
        .then(res => res.json())
};

exports.getOne = (itemId) => {
    return fetch(`${url}/${itemId}`)
        .then(res => res.json())
};

//only for admin users
exports.create = (data, authToken) => {
    return fetch(`${url}/create`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "X-Authorization": authToken
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
}