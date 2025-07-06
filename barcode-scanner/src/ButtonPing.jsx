function ButtonPing(){

    fetch('google.com')
    .then(response => {
        if (response.ok) {
            console.log('Ping successful!');
        } else {
            console.error('Ping failed:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Error during ping:', error);
    });
    return(
        <button onClick={ButtonPing}>Ping MGoogle</button>
    )
}

export default ButtonPing;
