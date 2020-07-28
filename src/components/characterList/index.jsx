import React, { useEffect } from 'react';
import { actions } from 'store/characterList';
import { connect } from 'react-redux';

const CharacterList = ({
    loading,
    error,
    characters,
    next,
    requestCharacterList,
}) => {
    useEffect(() => {
        requestCharacterList('https://rickandmortyapi.com/api/character');
    }, [requestCharacterList]);

    const buttonHandler = () => {
        requestCharacterList(next);
    };
    return (
        <>
            <div>
                {loading && <span>Loading</span>}
                {characters?.map((character, id) => <div key={character.id}>{`${id + 1} ${character.name}`}</div>)}
                {error && <span>{error}</span>}
            </div>
            <button
                type='button'
                onClick={buttonHandler}
            >
                Load more

            </button>
        </>
    );
};

const mapStateToProps = ({ characterList }) => ({
    isLoading: characterList.loading,
    characters: characterList.characters,
    prev: characterList.prev,
    next: characterList.next,
    error: characterList.error,
});

const mapDispatchToProps = {
    requestCharacterList: actions.requestCharacterList,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
