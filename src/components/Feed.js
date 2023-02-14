import React from 'react';

function Feed() {
    return (
        <section className="feed-section">
                <ul className="main-feed">
                    <li className="feed-container">
                        <div className="user-container">
                            <picture className="img-author"></picture>
                            <p className="name-author"></p>
                        </div>
                        <p className="text-author"></p>
                        <ul className="icons-post">
                            <figure className="comment-btn"></figure>
                            <figure className="like-btn"></figure>
                        </ul>
                    </li>
                </ul>
            </section>
    );
}

export default Feed;