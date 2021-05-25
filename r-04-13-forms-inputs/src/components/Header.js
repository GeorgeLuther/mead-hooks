import React from 'react'

export default function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </header>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};