function getHeaders() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
}

async function getRequest(url) {
    const response = await fetch(url, {
        method: 'GET',
        headers: getHeaders(),
    });

    const result = await response.json();

    if(!response.ok) {
        throw new Error(result.message);
    }
    return result;
}

async function postRequest(body, url) {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: getHeaders(),
    });

    const result = await response.json();

    if(!response.ok) {
        throw new Error(result.message);
    }
    return result;
}

async function putRequest(url, body) {
    const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: getHeaders(),
    });

    if(response.status !== 204) {
        throw new Error("Erro ao editar notícia!");
    }
}

async function deleteRequest(url) {
    const response = await fetch(url, {
        method: 'DELETE',
        headers: getHeaders(),
    });

    if(response.status !== 204) {
        throw new Error("Erro ao editar notícia!");
    }
}

export const request = {
    getRequest,
    postRequest,
    putRequest,
    deleteRequest,
}
