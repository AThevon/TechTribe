import React from 'react';
import userIcon from '../assets/user-solid.svg'


function Aside() {
    return (
        <aside className="main-aside">
            <div className="title-aside">
                <h3>Contacts</h3>
                <p>13 online</p>
            </div>
            <ul className="navbar-aside">
                <li className="nav-btn-aside">Online</li>
                <li className="nav-btn-aside">All</li>
                <li className="nav-btn-aside">Add</li>
            </ul>
            <ul className="all-friends">
                <li className="friend">
                    <img src={userIcon} alt="" className="pp-friend" />
                    <p className="text-friend">
                        John<span>online</span>
                    </p>
                    <figure className="btn-chat-friend"></figure>
                </li>
                
            </ul>
            <div className="main-mp">
                <button className="btn-send-mp">Let's discuss !</button>
                <figure className="btn-status"></figure>
            </div>
        </aside>
    );
}

export default Aside;