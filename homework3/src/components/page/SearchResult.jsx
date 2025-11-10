import React from 'react';

function SearchResult({ images }) {
    return (
        <div className="search-results-container">
            <div id="text1">Search Results</div>

            <div id="image-container">
                {images.length === 0 ? null : (
                    images.map((img, index) => (
                        <img className="search-image" src={img.urls.small} alt={img.alt}/>
                    ))
                )}
            </div>
        </div>
    );
}

export default SearchResult;