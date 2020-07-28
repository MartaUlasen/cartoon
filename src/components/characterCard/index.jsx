import React from 'react';
import classNames from 'classnames';
import './index.scss';

const CharacterCard = (props) => {
    const {
        data: {
            name, status, species, gender, image, location,
        },
    } = props;

    const statusClass = classNames({
        card__status: true,
        'card__status--alive': status === 'Alive',
        'card__status--dead': status === 'Dead',
    });

    return (
        <div className='card'>
            <img className='card__img' src={image} alt={name} />
            <div className='card__description'>
                <h5 className='card__name'>{name}</h5>
                <div className={statusClass}>{status}</div>
                <div className='card__additional'>
                    <div className='card__additional-title'>Species:</div>
                    <div className='card__additional-value'>{species}</div>
                </div>
                <div className='card__additional'>
                    <div className='card__additional-title'>Gender:</div>
                    <div className='card__additional-value'>{gender}</div>
                </div>
                <div className='card__additional'>
                    <div className='card__additional-title'>Location:</div>
                    <div className='card__additional-value'>{location.name}</div>
                </div>
            </div>
        </div>
    );
};

export default CharacterCard;
