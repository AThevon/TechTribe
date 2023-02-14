import React from 'react';

function Input() {
    return (
        <section className="sending-section">
            <input type="text" id="pseudoInput"/>
                <textarea name="message" id="textInput"></textarea>
                <button className="send-btn">Send</button>
        </section>
    );
}

export default Input;