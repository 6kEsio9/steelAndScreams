const url = 'http://localhost:3030/users';

// exports.login = async (data) => {
//     const request = await fetch(`${url}/login`, {
//         method: "POST",
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })

//     const result = await request.json();

//     return result;
// }

exports.login = (data) => {
    return fetch(`${url}/login`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
};

exports.register = (data) => {
    return fetch(`${url}/register`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
};