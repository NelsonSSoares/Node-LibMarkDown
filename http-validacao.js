const fetch = require('node-fetch');

function manejaError(error) {
    throw new Error(error.message);
}

async function checaStatus(arrayURLs) {
    try {
        const arrayStatus = await Promise
            .all(arrayURLs.map(async url => {
                const res = await fetch(url)
                return res.status;
            }))
        return arrayStatus
    } catch (error) {
        manejaError(error)
    }
}

function geraArrayURL(arrayLink) {
    return arrayLink.map(objetoLink => Object.values(objetoLink).join())
}

async function validaURLs(arrayLink) {
    const links = geraArrayURL(arrayLink)
    const statusLinks = await checaStatus(links);

    const resultados = arrayLink.map((objeto, index) => ({
        ...objeto, status: statusLinks[index]
    }))
    return resultados;
}

module.exports = validaURLs;