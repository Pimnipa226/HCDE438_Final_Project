import React, { useState } from 'react';
import { fetchImages } from "../../services/api.js";

function SearchBar({ onSearch }) {
    const [search, setSearch] = useState('');

    const handleSearch = async (query = search) => {
        const results = await fetchImages(query);
        onSearch(results);
    };

    const handleFilterClick = (e) => {
        const category = e.target.dataset.query;
        handleSearch(category);
    };

    return (
        <div id="search_bar_section">
            <div className="search-bar-container">
                <p className="quote">A moment. A feeling. A Frame.</p>
                <div className="search-bar">
                    <input
                        className="search-box"
                        type="text"
                        placeholder="Enter Keywords"
                        onChange={e => setSearch(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && handleSearch()}
                    />



                    <div className="dropdown">
                        <button className="drop-button">
                            <img className="filter-icon" src="/assets/images/filter.png" alt="Filter" />
                        </button>
                        <div className="dropdown-content" onClick={handleFilterClick}>
                            <button className="filter-option" data-query="paintings">Paintings</button>
                            <button className="filter-option" data-query="photographs">Photographs</button>
                            <button className="filter-option" data-query="drawings">Drawings</button>
                            <button className="filter-option" data-query="digital arts">Digital Arts</button>
                            <button className="filter-option" data-query="sculptures">Sculptures</button>
                            <button className="filter-option" data-query="ceramics pottery">Ceramics & Pottery</button>
                            <button className="filter-option" data-query="glass">Glass</button>
                            <button className="filter-option" data-query="antiques">Antiques</button>
                        </div>
                    </div>
                    <button className="search-button" onClick={() => handleSearch()}>
                        <img className="magnifying_glass" src="/assets/images/magnifying-glass.png" alt="Search" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;