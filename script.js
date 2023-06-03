let postTitle = document.querySelector('.post__title');
let postText = document.querySelector('.post__text');
const postWrapper = document.querySelector('.post__wrapper');
const btn = document.querySelector('.post__button');

function post () {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: postTitle,
            body: postText,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    })
    .then(response => response.json())
    .then((json) => {
        console.log(json.title);
        postWrapper.innerHTML = `
        <p class="posted__title">${json.title}</p>
        <p class="posted__text">${json.body}</p>
    `;
        
    })
}

btn.addEventListener ('click', event => {
    event.preventDefault();
    postTitle = document.querySelector('.post__title').value;
    postText = document.querySelector('.post__text').value;
    post();
});
