import React from 'react';
import { useState } from 'react';

function Categories() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => setIsOpen(!isOpen);

    return (
        <div>

            <div className="categories">
                <button className="accordion" id="categories-button">
                    Categories&nbsp;
                    <span><img className="chevron" src="/assets/images/chevron.png" alt="expand"/></span>
                </button>

                <div className="panel" id="photo-categories" role="region" aria-labelledby="categories-button">
                    <div className="photo_categories">
                        <div id="paintings">Paintings</div>
                        <div id="photographs">Photographs</div>
                        <div id="drawings">Drawings</div>
                        <div id="digital_arts">Digital Arts</div>
                        <div id="sculptures">Sculptures</div>
                        <div id="ceramics_and_pottery">Ceramics & Pottery</div>
                        <div id="glass">Glass</div>
                        <div id="antiques">Antiques</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Categories