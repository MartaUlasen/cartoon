import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CharacterList from 'components/characterList';
import Character from 'components/character';
import './index.scss';

const App = () => (
    <div className='app'>
        <header className='header'>
            The Rick and Morty
        </header>
        <main className='main'>
            <Switch>
                <Route exact path='/' component={CharacterList} />
                <Route exact path='/characters/:id' component={Character} />
            </Switch>
        </main>
    </div>
);

export default App;
