import React from 'react';

function ButtonPing(){

    const handlePing = () => {
        // The fetch needs a full URL, including the protocol (https://).
        // 'no-cors' mode is used here to avoid CORS errors for a simple ping,
        // but it means we can't inspect the response.
        fetch('https://google.com', { mode: 'no-cors' })
            .then(() => {
                console.log('Ping request sent to Google!');
            })
            .catch(error => {
                console.error('Error during ping:', error);
            });
    };

    return(
        <button onClick={handlePing}>Ping Google</button>
    )
}

export default ButtonPing;
