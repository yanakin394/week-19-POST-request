//получаю необходимые элементы
let postTitle = document.querySelector('.post__title');
let postText = document.querySelector('.post__text');
const postContainer = document.querySelector('.post__container');
const btn = document.querySelector('.post__button');

//создаю функцию с фетч запросом
function post () {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: postTitle.value,
            body: postText.value,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    })
    .then(response => response.json())
    .then((json) => {
        let postWrapper = document.createElement('div');    // отрисовка html разметки поста
        postWrapper.classList.add('post__wrapper');
        console.log(json.title);
        postWrapper.innerHTML = `
            <p class="posted__title">${json.title}</p>
            <p class="posted__text">${json.body}</p>
    `;
    postContainer.appendChild(postWrapper);    
    })
    .catch((err) => {
        console.log('Ошибка!' + err);
    })
}

//добавляю обработчик событий для кнопки, для добавления поста
btn.addEventListener ('click', event => {
    event.preventDefault();
    if(postTitle.value === '' || postText.value === '') {  //проверка на пустоту полей
        alert("Заполните поле ввода!");
    } else {
    postTitle = document.querySelector('.post__title');   
    postText = document.querySelector('.post__text');
    post();
    }
});
