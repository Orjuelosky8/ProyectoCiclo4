import React from 'react';

function ProvImg({src}) {
    return (
        <div>
            <img className="hero-img" src={src} alt="Foto destacada" />
        </div>
    );
}

export default ProvImg;