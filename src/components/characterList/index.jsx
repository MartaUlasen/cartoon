import React, { useEffect, useRef, useCallback } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from 'store/characterList';
import CharacterCard from 'components/characterCard';
import ErrorMessage from 'components/errorMessage';
import { Loader } from 'react-feather';
import './index.scss';

const getHrefId = (href) => href?.split('/').filter((v) => v).pop();

const CharacterList = ({
    loading,
    data,
    error,
    next,
    requestCharacterList,
}) => {
    const loaderRef = useRef(null);

    const loadMoreCharacters = useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting && next) {
            requestCharacterList(next);
        }
    }, [next, requestCharacterList]);

    useEffect(() => {
        const observerTarget = loaderRef.current;

        const observer = new IntersectionObserver(loadMoreCharacters, {
            root: null,
            rootMargin: '0px',
            threshold: 0.2,
        });

        if (loaderRef && observerTarget) {
            observer.observe(observerTarget);
        }

        return () => observer.unobserve(observerTarget);
    }, [loaderRef, loadMoreCharacters]);

    return (
        <>
            <div>
                {data?.map(
                    (character) => {
                        const path = `/characters/${getHrefId(character.url)}`;
                        return (
                            <Link to={path} className='card-link'>
                                <CharacterCard key={character.id} data={character} />
                            </Link>
                        );
                    }
                )}
                {error && <ErrorMessage error={error} />}
            </div>
            <div ref={loaderRef}>{loading && <Loader className='icon-loading' size={20} />}</div>
        </>
    );
};

const mapStateToProps = ({ characterList }) => ({
    loading: characterList.loading,
    data: characterList.data,
    error: characterList.error,
    next: characterList.next,
});

const mapDispatchToProps = {
    requestCharacterList: actions.requestCharacterList,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
