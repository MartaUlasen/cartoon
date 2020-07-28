import React, { useEffect, useRef, useCallback } from 'react';
import { actions } from 'store/characterList';
import { connect } from 'react-redux';
import CharacterCard from 'components/characterCard';
import { Loader } from 'react-feather';

const CharacterList = ({
    loading,
    error,
    characters,
    next,
    requestCharacterList,
}) => {
    const loader = useRef(null);

    const loadMoreCharacters = useCallback((entries) => {
        const target = entries[0]; // что такое entries
        if (target.isIntersecting && next) {
            requestCharacterList(next);
        }
    }, [next, requestCharacterList]);

    useEffect(() => {
        requestCharacterList('https://rickandmortyapi.com/api/character');
    }, [requestCharacterList]);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2,
        };

        const observer = new IntersectionObserver(loadMoreCharacters, options);

        if (loader && loader.current) {
            observer.observe(loader.current);
        }

        return () => observer.unobserve(loader.current);
    }, [loader, loadMoreCharacters]);

    return (
        <>
            <div>
                {characters?.map(
                    (character) => <CharacterCard key={character.id} data={character} />)}
                {error && <span>{error}</span>}
            </div>
            <Loader ref={loader}>{loading && <Loader className='icon-loading' size={20} />}</Loader>
        </>
    );
};

const mapStateToProps = ({ characterList }) => ({
    loading: characterList.loading,
    characters: characterList.characters,
    next: characterList.next,
    error: characterList.error,
});

const mapDispatchToProps = {
    requestCharacterList: actions.requestCharacterList,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
