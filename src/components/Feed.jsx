import React, { useState, useEffect } from 'react';
import userIcon from '../assets/user-solid.svg'
import likeIcon from '../assets/user-solid.svg'
import loveIcon from '../assets/user-solid.svg'
import laughIcon from '../assets/user-solid.svg'
import surpriseIcon from '../assets/user-solid.svg'
import angryIcon from '../assets/user-solid.svg'
import commentIcon from '../assets/user-solid.svg'

function Feed() {
    const [authorName, setAuthorName] = useState('');
    const [authorText, setAuthorText] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Récupérer les données de l'API au montage du composant
        fetch('https://touiteur.cefim-formation.org/list')
            .then(response => response.json())
            .then(data => {
                // Mettre à jour les messages récupérés
                setMessages(data.messages);
            })
            .catch(error => console.log(error));

        // Actualiser les données toutes les 5 secondes
        const interval = setInterval(() => {
            fetch('https://touiteur.cefim-formation.org/list')
                .then(response => response.json())
                .then(data => {
                    // Vérifier si des nouveaux messages ont été ajoutés depuis la dernière récupération
                    if (messages.length !== data.messages.length) {
                        // Ajouter les nouveaux messages à la liste existante
                        setMessages(data.messages);
                    }
                })
                .catch(error => console.log(error));
        }, 5000);

        // Nettoyer le setInterval lors du démontage du composant
        return () => clearInterval(interval);
    }, [messages]);

    return (
        <section className="feed-section">
            <ul className="main-feed">
                {messages.map((message, index) => (
                    <li className="feed-container" key={index}>
                        <div className="user-container">
                            <img src={userIcon} alt="" className="pp-friend" />
                            <p className="name-author">{message.name}</p>
                        </div>
                        <p className="text-author">{message.message}</p>
                        <ul className="icons-post">
                            <li><img src={likeIcon} alt="" className="emote" id="likeBtn" /></li>
                            <li><img src={loveIcon} alt="" className="emote" id="loveBtn" /></li>
                            <li><img src={laughIcon} alt="" className="emote" id="laughBtn" /></li>
                            <li><img src={surpriseIcon} alt="" className="emote" id="surpriseBtn" /></li>
                            <li><img src={angryIcon} alt="" id="angryBtn" className="emote" /></li>
                            <li><img src={commentIcon} alt="" id="commentBtn" className="emote" /></li>
                        </ul>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Feed;
