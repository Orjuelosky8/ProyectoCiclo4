import React from 'react';

function ProvContactData({type, data}) {
    return (
        <>
            <dt>{type}</dt>
            <dd>{data}</dd>
        </>
    );
}

export default ProvContactData;