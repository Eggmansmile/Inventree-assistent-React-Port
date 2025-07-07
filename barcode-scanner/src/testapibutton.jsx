import { useState } from 'react';

function TestAPIbutton({ username, password }) {
    const [token, setToken] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const sendAPI = async () => {
        if (!username || !password) {
            const msg = 'Username and password are required. Please log in first.';
            setError(msg);
            console.error('Authentication failed:', msg);
            return;
        }

        setIsLoading(true);
        setError(null);
        setToken(null);

        try {
            // InvenTree uses Basic Authentication to get a token.
            // The format is 'Basic ' followed by a base64 encoded 'username:password' string.
            const credentials = btoa(`${username}:${password}`);

            const response = await fetch('http://inventree.localhost/api/user/token/', {
                method: 'GET',
                headers: {
                    'Authorization': `Basic ${credentials}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ detail: 'Failed to parse error response.' }));
                throw new Error(`HTTP error! Status: ${response.status} - ${errorData.detail || response.statusText}`);
            }

            const data = await response.json();

            console.log('Authentication successful. Token:', data.token);
            setToken(data.token);
        } catch (e) {
            console.error('Authentication failed:', e);
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <button onClick={sendAPI} disabled={isLoading}>
                {isLoading ? 'Authenticating...' : 'Test API Authentication'}
            </button>
            {token && <p style={{ color: 'var(--color-success)' }}>Token received! Check console.</p>}
            {error && <p style={{ color: 'var(--color-foreground-error, red)' }}>Error: {error}</p>}
        </div>
    );
}

export default TestAPIbutton;
