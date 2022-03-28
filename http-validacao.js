const fetch = require('node-fetch');


async function checaStatus(arrayURLs) {
    const arrayStatus = await Promise
        .all(arrayURLs.map(async url => {
            const res = await fetch(url)
            return res.status;
        }))
    return arrayStatus
}

function geraArrayURL(arrayLink) {
    return arrayLink.map(objetoLink => Object.values(objetoLink).join())
}

async function validaURLs(arrayLink) {
    const links = geraArrayURL(arrayLink)
    const statusLinks = await checaStatus(links);
    console.log(arrayLink, statusLinks);
    return statusLinks;
}

module.exports = validaURLs;