var btn = document.getElementById('btn')

var ul = document.getElementById('ul')

btn.addEventListener('click', (e) => {
    e.preventDefault();

    var li = document.createElement('li');
    var title = document.getElementById('title').value
    var desc = document.getElementById('desc').value

    li.innerHTML =
        `Title : ${title} <button id="btnXTitle">✖</button> <br>
             Description : ${desc} `;

    ul.appendChild(li);

    btnXTitle.addEventListener("click", () => {
        for (let index = 0; index < ul.children.length; index++) {
            ul.children[index].remove();
        }
    })
})