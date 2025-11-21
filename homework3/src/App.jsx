import React, { useState } from 'react';
import Header from './components/page/Header';
import SearchBar from './components/page/SearchBar';
import SearchResult from './components/page/SearchResult';
import Categories from './components/page/Categories';

function App() {
    const [images, setImages] = useState([]);

    return (
        <div>
            <Header />
            <SearchBar onSearch={setImages} />
            <SearchResult images={images} />
            <Categories />
        </div>
    );
}

export default App;