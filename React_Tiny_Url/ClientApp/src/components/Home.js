import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [originalUrl, setOriginalUrl] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/shorten', { originalUrl });
            const shortUrl = response.data.shortUrl;
            navigate(/result/${ shortUrl });
        } catch (err) {
            setError('Failed to shorten URL. Please try again.');
            console.error(err);
        }
    };

    return (
        <div>
            <h1>URL Shortener</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="url"
                    placeholder="Enter original URL"
                    value={originalUrl}
                    onChange={(e) => setOriginalUrl(e.target.value)}
                    required
                />
                <button type="submit">Shorten URL</button>
            </form>
        </div>
    );
};

export default Home;