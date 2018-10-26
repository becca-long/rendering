
function renderNametag(nametag) {
    return `
        <div class="name-tag">
            <h1>Hello, my name is:</h1>
            <span>${nametag}</span>
        </div>
    `
}

function renderNametags (nametags) {
    return nametags.map(renderNametag).join('')
}



function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}