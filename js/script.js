// API
const urlApi = "https://touiteur.cefim-formation.org/"

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


sendBtn.addEventListener('click', () => {
    if (pseudoInput.value == '' || textInput.value == '' )  { 
        alert('Typing Error, fields are empty !');
    } else if (pseudoInput.value.length < 3 || pseudoInput.value.length > 16) { 
        alert('Typing Error, pseudo must be between 3 and 16 caracters');

    } else if (textInput.value.length < 3  || textInput.value.length > 256) {
        alert('Typing Error, message must be between 3 and 256 caracters');
    } else {
        name = pseudoInput.value,
        message = textInput.value

        fetch(urlApi + 'send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: "name=" + encodeURIComponent(name) + "&message=" + encodeURIComponent(message)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
        pseudoInput.value = '';
        textInput.value = '';
        
    }
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
            
            const latestMessages = dataMessages.messages.reverse().slice(0, 10);
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

                const smileBtn = document.createElement('li');
                smileBtn.innerHTML = '<img src="img/smile.svg" alt="" id="smileBtn" class="emote" />';
                iconsPost.appendChild(smileBtn);

                const bigSmileBtn = document.createElement('li');
                bigSmileBtn.innerHTML = '<img src="img/big-smile.svg" alt="" id="bigSmileBtn" class="emote" />';
                iconsPost.appendChild(bigSmileBtn);

                const winkBtn = document.createElement('li');
                winkBtn.innerHTML = '<img src="img/wink.svg" alt="" id="winkBtn" class="emote" />';
                iconsPost.appendChild(winkBtn);

                const glassesBtn = document.createElement('li');
                glassesBtn.innerHTML = '<img src="img/glasses.svg" alt="" id="glassesBtn" class="emote" />';
                iconsPost.appendChild(glassesBtn);

                const winkTongBtn = document.createElement('li');
                winkTongBtn.innerHTML = '<img src="img/wink-tong.svg" alt="" id="winkTongBtn" class="emote" />';
                iconsPost.appendChild(winkTongBtn);

                const prayBtn = document.createElement('li');
                prayBtn.innerHTML = '<img src="img/pray.svg" alt="" id="prayBtn" class="emote" />';
                iconsPost.appendChild(prayBtn);

                const commentBtn = document.createElement('li');
                commentBtn.innerHTML = '<img src="img/comment-solid.svg" alt="" id="commentBtn" class="emote" />';

                iconsPost.appendChild(commentBtn);

                liMessage.appendChild(iconsPost);

                mainFeed.appendChild(liMessage);

            // SETTING DES EMOTES
            //setting du like
                
                const emotes = document.querySelectorAll('.emote');
                
                emotes.forEach(emote => {
                    emote.addEventListener('click', (e) => {
                        if (e.currentTarget.id.includes('likeBtn')) {
                            console.log('fdjkvhsdfjh')
                        }
                })
                })
            });

            // const contentHeight = mainFeed.scrollHeight;
            // const visibleHeight = mainFeed.clientHeight;
            // mainFeed.scrollTop = contentHeight - visibleHeight;

        } catch (error) {
            console.log(error);
        }
    }
    setInterval(() => {
        getMessages();
    }, 300000);
}




// likeBtn.addEventListener('click', () => {
//     if (!likeBtn.classList.contains('like-active')) {
//         async function sendLike() {
//             fetch(urlApi + 'send/like', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded'
//                 },
//                 // body: 
//             })
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data);
//             })
//             .catch(error => {
//                 console.log(error);
//             });

//         }

//     }
// })
