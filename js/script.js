// API
const urlApi = "http://touiteur.cefim-formation.org/"

// SETTING DES TRENDINGS
const ulTrending = document.querySelector('.title-trending');

getTrendingWords();
async function getTrendingWords() {
    try {
        const responseWord = await fetch(urlApi + "trending");
        const dataWord = await responseWord.json();
        let allWord = Object.entries(dataWord).sort((a, b) => b[1] - a[1]);

        for (let i = 0; i < 10; i++) {
            const liWord = document.createElement('li');
            liWord.classList.add('trending-word');
            const keyAllWord = allWord[Object.keys(allWord)[i]];
            liWord.textContent = `#${keyAllWord[0]}`;
            ulTrending.appendChild(liWord);
        }

    } catch (error) {
        return console.log(error)
    }
}

// SETTING DU FAMOUS USER
const ulFamous = document.querySelector('.title-famous-user');

getFamousUser();
async function getFamousUser() {
    try {
        const responseFamous = await fetch(urlApi + "influencers");
        const dataFamous = await responseFamous.json();
        let allFamous = Object.entries(dataFamous.influencers)
        allFamous.sort((a, b) => b[1] - a[1]);

        const liFamous = document.createElement('li');
        liFamous.classList.add('famous-user');
        const keyAllFamous = allFamous[Object.keys(allFamous)[0]];
        liFamous.textContent = keyAllFamous[0];
        ulFamous.appendChild(liFamous);

    } catch (error) {
        return console.log(error)
    }
}

// SETTING DE L'INPUT
const sendBtn = document.querySelector('.send-btn');
const pseudoInput = document.getElementById('pseudoInput');
const textInput = document.getElementById('textInput');

sendBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const message = {
        name: pseudoInput.value,
        message: textInput.value
    };

    fetch(urlApi + 'send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
});



// SETTING DU FEED
const mainFeed = document.querySelector('.main-feed');

getAndDisplayMessages();

function getAndDisplayMessages() {
    getMessages();

    async function getMessages() {
        try {
            const responseMessages = await fetch(urlApi + 'list');
            const dataMessages = await responseMessages.json();

            const sortedMessages = dataMessages.messages.sort((a, b) => b.ts - a.ts);

            const latestMessages = sortedMessages.slice(0, 20).reverse();

            mainFeed.innerHTML = '';

            latestMessages.forEach((message) => {
                const liMessage = document.createElement('li');
                liMessage.classList.add('feed-container');

                const userContainer = document.createElement('div');
                userContainer.classList.add('user-container');

                const userImg = document.createElement('img');
                userImg.setAttribute('src', 'img/user-solid.svg');
                userImg.setAttribute('alt', '');
                userImg.classList.add('pp-friend');
                userContainer.appendChild(userImg);

                const userName = document.createElement('p');
                userName.classList.add('name-author');
                const userNameText = document.createTextNode(message.name);
                userName.appendChild(userNameText);
                userContainer.appendChild(userName);

                liMessage.appendChild(userContainer);

                const messageText = document.createElement('p');
                messageText.classList.add('text-author');
                const messageTextContent = document.createTextNode(message.message);
                messageText.appendChild(messageTextContent);
                liMessage.appendChild(messageText);

                const iconsPost = document.createElement('ul');
                iconsPost.classList.add('icons-post');

                const likeBtn = document.createElement('li');
                likeBtn.innerHTML = '<img src="img/icon-like.svg" alt="" id="likeBtn" class="emote" />';
                iconsPost.appendChild(likeBtn);

                const loveBtn = document.createElement('li');
                loveBtn.innerHTML = '<img src="img/icon-heart.svg" alt="" id="loveBtn" class="emote" />';
                iconsPost.appendChild(loveBtn);

                const laughBtn = document.createElement('li');
                laughBtn.innerHTML = '<img src="img/icon-laugh.svg" alt="" id="laughBtn" class="emote" />';
                iconsPost.appendChild(laughBtn);

                const surpriseBtn = document.createElement('li');
                surpriseBtn.innerHTML = '<img src="img/icon-surprised.svg" alt="" id="surpriseBtn" class="emote" />';
                iconsPost.appendChild(surpriseBtn);

                const angryBtn = document.createElement('li');
                angryBtn.innerHTML = '<img src="img/icon-angry.svg" alt="" id="angryBtn" class="emote" />';
                iconsPost.appendChild(angryBtn);

                const commentBtn = document.createElement('li');
                commentBtn.innerHTML = '<img src="img/comment-solid.svg" alt="" id="commentBtn" class="emote" />';

                iconsPost.appendChild(commentBtn);

                liMessage.appendChild(iconsPost);

                mainFeed.appendChild(liMessage);

            });

            const contentHeight = mainFeed.scrollHeight;
            const visibleHeight = mainFeed.clientHeight;
            mainFeed.scrollTop = contentHeight - visibleHeight;

        } catch (error) {
            console.log(error);
        }
    }

    setInterval(() => {
        getMessages();
    }, 300000);
}