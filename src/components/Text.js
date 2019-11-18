import React from 'react';

export default function Text(props) {
    const [isHeader, text] = props;

    return (
        isHeader ? <h4>{text}</h4> : <p>{text}</p>
    )
}