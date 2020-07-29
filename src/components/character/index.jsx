import React, { useEffect } from 'react';
import { actions } from 'store/character';
import { connect } from 'react-redux';
import { Loader } from 'react-feather';
import './index.scss';
import classNames from 'classnames';

const Character = (props) => {
    const {
        loading,
        error,
        requestCharacter,
        id,
        data: {
            status, image, name, species, gender, location,
        } = {},
    } = props;
    const statusClass = classNames({
        card__status: true,
        'card__status--alive': status === 'Alive',
        'card__status--dead': status === 'Dead',
    });

    useEffect(() => {
        requestCharacter(`https://rickandmortyapi.com/api/character/${id}`);
    }, [requestCharacter, id]);

    return (
        <>
            {error && <span>{error}</span>}
            {loading
                ? <Loader className='icon-loading' size={20} />
                : (
                    <div className='character'>
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
                                <div className='card__additional-value'>{location?.name}</div>
                            </div>
                        </div>
                    </div>
                ) }
        </>
    );
};

const mapStateToProps = ({ character }) => ({
    data: character.data,
});

const mapDispatchToProps = {
    requestCharacter: actions.requestCharacter,
};
export default connect(mapStateToProps, mapDispatchToProps)(Character);
