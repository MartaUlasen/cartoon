import React from 'react';

const CharacterCard = (props) => {
    const { name } = props;
    return (
        <div className='card'>
            <span>{name}</span>
        </div>
    );
};

export default CharacterCard;
