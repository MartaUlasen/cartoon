import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './index.scss';

const getHrefId = (href) => href.split('/').filter((v) => v).pop();

const CharacterCard = (props) => {
    const {
        data: {
            name, status, species, gender, image, location, url,
        },
    } = props;
    const path = `/characters/${getHrefId(url)}`;
    const statusClass = classNames({
        card__status: true,
        'card__status--alive': status === 'Alive',
        'card__status--dead': status === 'Dead',
    });

    return (
        <Link to={path} className='card'>
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
        </Link>
    );
};

export default CharacterCard;
