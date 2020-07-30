import React, { useEffect } from 'react';
import { actions } from 'store/character';
import { connect } from 'react-redux';
import { Loader } from 'react-feather';
import CharacterCard from 'components/characterCard';
import ErrorMessage from 'components/errorMessage';

export const Character = ({
    id,
    loading,
    data,
    error,
    requestCharacter,
}) => {
    useEffect(() => {
        requestCharacter(`https://rickandmortyapi.com/api/character/${id}`);
    }, [requestCharacter, id]);

    return (
        <>
            {error && <ErrorMessage error={error} />}
            {loading
                ? (
                    <Loader
                        className='icon-loading'
                        size={20}
                        data-testid='loader'
                    />
                )
                : (<CharacterCard data={data} />)}
        </>
    );
};

const mapStateToProps = ({ character }) => ({
    loading: character.loading,
    data: character.data,
    error: character.error,
});

const mapDispatchToProps = {
    requestCharacter: actions.requestCharacter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Character);
