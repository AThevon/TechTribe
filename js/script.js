// SETTING DU FEED
const mainFeed = document.querySelector('.main-feed');

fetch('http://touiteur.cefim-formation.org/list')
    .then(response => response.json())
    .then(data => {
        data.messages.forEach(message => {
            const li = document.createElement('li');
            li.classList.add('feed-container');

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

            li.appendChild(userContainer);

            const messageText = document.createElement('p');
            messageText.classList.add('text-author');
            const messageTextContent = document.createTextNode(message.message);
            messageText.appendChild(messageTextContent);
            li.appendChild(messageText);

            const iconsPost = document.createElement('ul');
            iconsPost.classList.add('icons-post');

            const likeBtn = document.createElement('li');
            likeBtn.innerHTML = '<img src="#" alt="" id="likeBtn" class="emote" />';
            iconsPost.appendChild(likeBtn);

            const loveBtn = document.createElement('li');
            loveBtn.innerHTML = '<img src="#" alt="" id="loveBtn" class="emote" />';
            iconsPost.appendChild(loveBtn);

            const laughBtn = document.createElement('li');
            laughBtn.innerHTML = '<img src="#" alt="" id="laughBtn" class="emote" />';
            iconsPost.appendChild(laughBtn);

            const surpriseBtn = document.createElement('li');
            surpriseBtn.innerHTML = '<img src="#" alt="" id="surpriseBtn" class="emote" />';
            iconsPost.appendChild(surpriseBtn);

            const angryBtn = document.createElement('li');
            angryBtn.innerHTML = '<img src="#" alt="" id="angryBtn" class="emote" />';
            iconsPost.appendChild(angryBtn);

            const commentBtn = document.createElement('li');
            commentBtn.innerHTML = '<img src="#" alt="" id="commentBtn" class="emote" />';
            iconsPost.appendChild(commentBtn);

            li.appendChild(iconsPost);

            mainFeed.appendChild(li);
        });
    })

    .catch(error => console.error(error));


    
