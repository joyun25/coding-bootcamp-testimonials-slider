// Selectors
const person = document.querySelector('.person');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const content = document.querySelector('.content');
const author = document.querySelector('.author');
let data = [
    {
        "content": "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
        "name": "Tanya Sinclair",
        "position": "UX Engineer",
        "imgSrc": "images/image-tanya.jpg",
        "imgAlt": "a woman"
    },
    {
        "content": "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
        "name": "John Tarkpor",
        "position": "Junior Front-end Developer",
        "imgSrc": "images/image-john.jpg",
        "imgAlt": "a man"
    }
];

let renderNum = 0;

function render(i) {
    person.setAttribute("src", data[i].imgSrc);
    person.setAttribute("alt", data[i].imgAlt);
    person.dataset.num = i;
    content.textContent = `“ ${data[i].content} ”`;
    author.innerHTML = `${data[i].name} <br class="smallScreenOnly"><span>${data[i].position}</span>`;
}

render(renderNum);

prev.addEventListener('click', () => {
    if(renderNum == 0) {
        renderNum = data.length;
    }
    render(renderNum - 1);
    renderNum = renderNum - 1;
})

next.addEventListener('click', () => {
    if(renderNum == data.length - 1) {
        renderNum = -1;
    }
    render(renderNum + 1);
    renderNum = renderNum + 1;
})
