import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post('/api/UrlShortner/shorten', originalUrl, {
            headers: { 'Content-Type': 'application/json' }
        });
        setShortUrl(response.data);
    };

    return (
        <div className="App">
            <h1>URL Shortener</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="url"    
                    value={originalUrl}
                    onChange={(e) => setOriginalUrl(e.target.value)}
                    placeholder="Enter URL"
                    required
                />
               
               {/* <button onClick={handleSubmit}>Get Url</button>*/}
                <button type="submit">Shorten</button>
            </form>
            {shortUrl && (
                <div>
                    <p>Short URL: <a href={'/${shortUrl}'}>{window.location.origin}/{shortUrl}</a></p>
                </div>

    )}


        </div >

    );
};


export default App;
