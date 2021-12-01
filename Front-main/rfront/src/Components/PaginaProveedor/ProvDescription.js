import React from 'react';

function ProvDescription({description}) {
    return (
        <section>
            <h3>Descripcción de la Empresa</h3>
            <p>{description}</p>
        </section>
    );
}

export default ProvDescription;