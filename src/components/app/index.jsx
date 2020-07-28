import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CharacterList from 'components/characterList';
import Character from 'components/character';

const App = () => (
    <div className='App'>
        <header className='App-header'>
            The Rick and Morty
        </header>
        <hr />
        <main>
            <Switch>
                <Route exact path='/' component={CharacterList} />
                <Route exact path='/characters/:id' component={Character} />
            </Switch>
        </main>
    </div>
);

export default App;
