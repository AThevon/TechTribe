import React from 'react';

function Input() {
    return (
        <section className="sending-section">
            <input type="text" id="pseudoInput" placeholder='Username'/>
                <textarea name="message" id="textInput" placeholder='Start typing here'></textarea>
                <button className="send-btn">Send</button>
        </section>
    );
}
export default Input;